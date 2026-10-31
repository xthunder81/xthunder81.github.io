# Web Portfolio

Portofolio pribadi bertema classic retro, dibangun dengan React, Vite, dan Tailwind CSS. Navigasi halaman menggunakan URL hash sehingga setiap halaman dapat dibuka langsung, misalnya `#/profil` atau `#/proyek`.

## Persyaratan

- Node.js 20 atau lebih baru
- npm (sudah termasuk bersama Node.js)
- Git

Tidak ada file `.env` atau API key yang dibutuhkan untuk menjalankan aplikasi.

## Clone dan Instalasi

```bash
git clone https://github.com/xthunder81/xthunder81.github.io.git
cd xthunder81.github.io
npm ci
```

`npm ci` memasang dependency sesuai versi yang tercatat di `package-lock.json`.

## Menjalankan Secara Lokal

```bash
npm run dev
```

Buka URL yang ditampilkan Vite di terminal, biasanya `http://localhost:5173/`.

## Build Produksi

```bash
npm run build
npm run preview
```

Perintah build menghasilkan situs statis di folder `dist/`. Perintah preview menjalankan hasil build secara lokal.

## Struktur Proyek

```text
src/
	controllers/  # State halaman dan aksi form
	models/       # Data profil, navigasi, dan proyek
	views/
		components/ # Komponen kecil yang digunakan ulang
		layout/     # Header, menu, dan footer
		pages/      # Halaman Utama, Profil, Proyek, dan Kontak
public/
	icon/         # Favicon
	images/       # Gambar statis
```

## Mengubah Konten

- Edit `src/models/portfolio.js` untuk mengubah data profil, daftar proyek, atau menu navigasi.
- Setiap proyek memiliki `name`, `type`, `description`, `image`, `imageAlt`, `color`, dan `url`. `url` adalah alamat repo atau website tujuan ketika kartu proyek dipilih.
- Halaman proyek menampilkan maksimal 6 proyek per halaman. Paging muncul otomatis jika jumlah proyek lebih dari 6.
- Letakkan gambar di `public/images/`, lalu gunakan path seperti `/images/nama-gambar.jpg` pada data.
- Favicon berada di `public/icon/favicon.svg`; rujukannya diatur dari `index.html`.
- Alamat email kontak diatur lewat `profile.email`. Form kontak membuka aplikasi email pengguna dengan draft pesan, bukan mengirim pesan ke server.

## Deploy

Workflow `.github/workflows/deploy.yml` membangun situs dan menerbitkan folder `dist/` ke GitHub Pages setiap kali ada push ke branch `main`. Workflow juga dapat dijalankan manual dari tab Actions.

Untuk mengaktifkan deployment pada repository hasil clone/fork:

1. Buka **Settings > Pages** di repository GitHub.
2. Pada **Build and deployment**, pilih **GitHub Actions** sebagai source.
3. Push perubahan ke branch `main`, atau jalankan workflow **Deploy to GitHub Pages** dari tab **Actions**.
4. Tunggu workflow selesai, lalu buka alamat Pages yang ditampilkan pada deployment.

Output build lokal berada di `dist/` dan tidak perlu di-commit. Repository ini memakai konfigurasi root untuk situs `xthunder81.github.io`. Jika deploy di repository project pada subpath, sesuaikan opsi `base` Vite dan path aset publik sebelum deploy.
