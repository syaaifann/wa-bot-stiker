# 🤖 WhatsApp Sticker Bot (Baileys)

Bot WhatsApp sederhana, kencang, dan ringan yang dibuat menggunakan Node.js dan library `@whiskeysockets/baileys`. Bot ini berfungsi untuk mengubah gambar yang dikirim pengguna menjadi stiker WhatsApp secara otomatis.

---

## 📸 Fitur Utama

* **.stiker / !stiker**: Mengubah foto yang dikirim (dengan *caption*) menjadi stiker WhatsApp.
* **ping**: Cek status keaktifan bot secara cepat.
* **Direct Socket Stream**: Tanpa Puppeteer / Chrome, hemat RAM, dan proses pemuatan stiker super cepat.

---

## 🛠️ Prasyarat (Prerequisites)

Sebelum menjalankan bot ini, pastikan komputer kamu sudah terpasang:
* [Node.js](https://nodejs.org/) (Versi 18 ke atas disarankan)
* [Git](https://git-scm.com/) (Opsional, untuk *clone* repositori)

---

## 🚀 Cara Membuat & Menginstal dari Nol

Jika kamu ingin membuat bot ini dari awal di komputer lokal, ikuti langkah-langkah berikut:

### 1. Inisialisasi Proyek
Buka terminal/CMD, buat folder baru, lalu jalankan inisialisasi Node.js:
```bash
mkdir wa-bot
cd wa-bot
npm init -y
```

### 2. Install Dependency / Library
Install modul utama yang dibutuhkan untuk menjalankan bot dan mengolah stiker:
```bash
npm install @whiskeysockets/baileys wa-sticker-formatter qrcode-terminal pino @hapi/boom
```

### 3. Buat File Utama (`index.js`)
Buat file `index.js` di dalam folder proyek, lalu masukkan kode integrasi Baileys dan `wa-sticker-formatter`.

### 4. Jalankan Bot
Eksekusi perintah berikut untuk memuat bot:
```bash
node index.js
```

---

## 📲 Cara Penggunaan Bot

1. Setelah menjalankan `node index.js`, **QR Code** akan muncul di terminal CMD.
2. Buka aplikasi **WhatsApp** di HP $\rightarrow$ **Perangkat Tertaut (Linked Devices)** $\rightarrow$ **Tautkan Perangkat**.
3. Scan QR Code yang ada di terminal.
4. Setelah status koneksi menjadi **`open`**, kirim foto di obrolan WA dengan *caption*:
   ```text
   .stiker
   ```
5. Bot akan memproses dan membalas gambar tersebut dalam bentuk stiker! 🎉

---

## 📂 Struktur Folder Proyek

```text
wa-bot/
├── auth_info_baileys/  # Sesi login WA (Otomatis dibuat, JANGAN di-upload ke GitHub)
├── node_modules/       # Modul dependensi Node.js
├── index.js            # Kode logika utama bot
├── package.json        # Manifest proyek & daftar library
└── README.md           # Dokumentasi proyek
```

---

## 🔐 Catatan Keamanan

> **PENTING:** Jangan pernah mengunggah folder `auth_info_baileys/` atau folder sesi login ke repositori publik. Folder tersebut berisi token akses akun WhatsApp kamu. Pastikan untuk memasukkan folder tersebut ke dalam `.gitignore`.

---

## 👤 Pembuat

* **Ifan** - [*Repository Author*](https://github.com/syaaifann)
