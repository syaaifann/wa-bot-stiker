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
