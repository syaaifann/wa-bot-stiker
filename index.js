const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, downloadMediaMessage } = require('@whiskeysockets/baileys');
const { Boom } = require('@hapi/boom');
const qrcode = require('qrcode-terminal');
const { Sticker, StickerTypes } = require('wa-sticker-formatter');

async function connectToWhatsApp() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: false,
        // Menyembunyikan log JSON yang terlalu panjang di terminal
        logger: require('pino')({ level: 'silent' }) 
    });

    sock.ev.on('creds.update', saveCreds);

    // Event Koneksi
    sock.ev.on('connection.update', (update) => {
        const { connection, lastDisconnect, qr } = update;

        if (qr) {
            console.log('\n--- SCAN QR CODE DI BAWAH INI ---');
            qrcode.generate(qr, { small: true });
        }

        if (connection === 'close') {
            // Ambil status code secara aman tanpa bikin crash
            const statusCode = (lastDisconnect?.error instanceof Boom) 
                ? lastDisconnect.error.output?.statusCode 
                : null;

            const shouldReconnect = statusCode !== DisconnectReason.loggedOut;
            
            console.log(`Koneksi terputus (Status Code: ${statusCode}). Reconnect: ${shouldReconnect}`);

            if (shouldReconnect) {
                connectToWhatsApp();
            }
        } else if (connection === 'open') {
            console.log('========================================');
            console.log('Bot WhatsApp (Baileys) Aktif & Siap Bikin Stiker!');
            console.log('========================================');
        }
    });

    // Event Pesan Masuk
    sock.ev.on('messages.upsert', async (m) => {
        const msg = m.messages[0];
        if (!msg.message || msg.key.fromMe) return;

        const from = msg.key.remoteJid;
        
        // Ambil teks pesan / caption foto
        const caption = msg.message.imageMessage?.caption || 
                        msg.message.conversation || 
                        msg.message.extendedTextMessage?.text || '';
        
        const command = caption.toLowerCase().trim();

        // FITUR STIKER (.stiker)
        if (msg.message.imageMessage && (command === '.stiker' || command === '!stiker')) {
            try {
                await sock.sendMessage(from, { text: 'Sedang memproses stiker, tunggu sebentar ya... ⏳' }, { quoted: msg });

                // Download gambar
                const buffer = await downloadMediaMessage(
                    msg,
                    'buffer',
                    {},
                    { logger: undefined, reuploadRequest: sock.updateMediaMessage }
                );

                // Buat Stiker
                const sticker = new Sticker(buffer, {
                    pack: 'Ipan-Softskill.nxa',
                    author: 'Ifan',
                    type: StickerTypes.FULL,
                    quality: 70
                });

                const stickerBuffer = await sticker.toBuffer();

                // Kirim Stiker
                await sock.sendMessage(from, { sticker: stickerBuffer }, { quoted: msg });
                console.log('Stiker Baileys Berhasil Dikirim!');

            } catch (err) {
                console.error('Error Bikin Stiker:', err.message);
                await sock.sendMessage(from, { text: 'Aduhh, gagal mengubah gambar jadi stiker nih! 😅' }, { quoted: msg });
            }
        } 
        // Respon Teks
        else if (command === 'ping') {
            await sock.sendMessage(from, { text: '_*Pong! softBot Super Kencang 🚀*_' }, { quoted: msg });
        }
                else {
            await sock.sendMessage(from, { text: '_*mohon maaf sepertinya admin sedang sibuk.silahkan tinggalkan pesan atau telefon langsung🙏...*_' }, { quoted: msg });
        }
    });
}

connectToWhatsApp();