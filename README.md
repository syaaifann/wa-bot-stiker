# 🤖 WhatsApp Sticker Bot (Baileys Multi-Platform)

Bot WhatsApp sederhana, kencang, dan ringan yang dibangun menggunakan Node.js dan library `@whiskeysockets/baileys`. Repositori ini menyediakan 2 versi skrip yang siap pakai sesuai kebutuhan perangkatmu: **Desktop (PC/Laptop)** dan **Android (Termux)**.

---

## 🚀 Fitur Utama

* **.stiker / !stiker**: Mengubah gambar menjadi stiker WhatsApp secara otomatis.
* **ping**: Cek status responsivitas bot.
* **Versi Desktop**: Login menggunakan QR Code di terminal.
* **Versi Termux Android**: Login tanpa QR Code (menggunakan **Pairing Code / Kode Verifikasi 8 Digit**) & tanpa masalah kompilasi `sharp` (menggunakan Native FFmpeg).

---

## 💻 Cara Install & Jalankan

Pilih panduan instalasi sesuai dengan perangkat yang kamu gunakan:

### 📱 1. Versi Android (Termux)

Cocok buat kamu yang ingin menjalankan bot 24 jam langsung dari HP Android tanpa laptop.

```bash
# Update & install dependensi sistem
pkg update && pkg upgrade -y
pkg install nodejs-lts git ffmpeg -y

# Clone repositori & masuk ke folder termux
git clone [https://github.com/USERNAME_KAMU/wa-bot.git](https://github.com/USERNAME_KAMU/wa-bot.git)
cd wa-bot/termux

# Install modul Node.js
npm install

# Jalankan bot
node index.js
```
> **Catatan:** Masukkan nomor WhatsApp kamu dengan awalan `62` saat diminta di terminal, lalu masukkan Kode Verifikasi 8 digit yang muncul ke menu **WhatsApp -> Perangkat Tertaut -> Tautkan dengan nomor telepon saja**.

---

### 🖥️ 2. Versi Desktop (PC / Laptop)

Cocok untuk pengguna Windows, Linux, atau macOS.

```bash
# Clone repositori & masuk ke folder desktop
git clone [https://github.com/USERNAME_KAMU/wa-bot.git](https://github.com/USERNAME_KAMU/wa-bot.git)
cd wa-bot/desktop

# Install modul Node.js
npm install

# Jalankan bot
node index.js
```
> **Catatan:** Scan **QR Code** yang muncul di terminal menggunakan fitur **Perangkat Tertaut** di WhatsApp HP kamu.

---

## 📂 Struktur Repositori

```text
wa-bot/
├── desktop/             # Kode utama untuk versi PC/Laptop (QR Code)
│   ├── index.js
│   └── package.json
├── termux/              # Kode utama untuk versi Android (Pairing Code + FFmpeg)
│   ├── index.js
│   └── package.json
├── .gitignore           # Menjaga file sensitif/sesi agar tidak ter-upload
└── README.md            # Dokumentasi proyek
```

---

## 🔐 Catatan Keamanan & Git

> **PENTING:** Pastikan folder sesi (`auth_info_baileys/`) dan `node_modules/` dimasukkan ke dalam `.gitignore` agar token akses WhatsApp kamu tidak bocor ke publik.

---

## 👤 Pembuat

* **Ifan** - [*anonxb10*](https://github.com/USERNAME_KAMU)
