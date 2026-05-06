# Sistem E-Voting Pemilihan Presiden Mahasiswa (PresMa) Berbasis Blockchain

Repositori ini memuat prototipe *Decentralized Application* (dApp) untuk memfasilitasi Pemilihan Presiden Mahasiswa yang transparan, aman, dan kebal terhadap manipulasi data (*tamper-proof*). Proyek ini dirancang sebagai pemenuhan Ujian Tengah Semester (UTS) dalam perancangan sistem informasi akademik di lingkungan Institut Teknologi PLN (ITPLN).

Sistem ini mentransisikan proses pemungutan suara dari arsitektur basis data terpusat menuju *smart contract* di jaringan Ethereum, guna mengeliminasi *single point of failure* dan menjamin integritas rekapitulasi suara.

---

## 📌 Deskripsi Arsitektur Sistem
Sistem *e-voting* ini mengimplementasikan pendekatan arsitektur hibrida untuk menjaga efisiensi komputasi jaringan (*gas fee*) dan melindungi privasi (*Personally Identifiable Information*). 

Logika inti (*core logic*) pemungutan suara diimplementasikan di dalam `VotingPresMa.sol`, yang secara spesifik mencatat:
1. **Verifikasi Identitas:** Mekanisme *whitelist* berbasis *mapping* (`pemilihTerverifikasi`), di mana hanya alamat *wallet* mahasiswa yang telah diverifikasi oleh Ketua KPU yang berhak memberikan suara.
2. **Kekebalan Suara:** Pencatatan ID Kandidat dan akumulasi perolehan suara di dalam *blockchain* yang bersifat *immutable*.
3. **Pencegahan Pemungutan Suara Ganda:** Penguncian status dompet (`sudahMemilih`) secara otomatis setelah satu kali eksekusi transaksi.

## ✨ Fitur Utama (Berdasarkan Smart Contract)
- **Role-Based Access Control:** Penggunaan *modifier* `hanyaKPU` memastikan bahwa otorisasi pendaftaran kandidat dan verifikasi daftar pemilih tetap hanya dapat dilakukan oleh Ketua Komisi Pemilihan Umum (KPU) Kampus.
- **One Student, One Vote:** Mekanisme validasi ketat untuk memastikan mahasiswa terdaftar secara sah dan mencegah duplikasi suara.
- **Event Logging:** Pencatatan jejak audit (*audit trail*) secara *real-time* ke dalam buku besar publik setiap kali terjadi verifikasi pemilih, penambahan kandidat, atau masuknya suara.

## 🛠️ Tumpukan Teknologi (Tech Stack)
- **Smart Contract:** Solidity (^0.8.0)
- **Jaringan Target:** Ethereum Sepolia (Testnet)
- **Lingkungan Pengembangan (IDE):** Remix Ethereum
- **Otentikasi Identitas (Web3):** MetaMask
- **Arsitektur Antarmuka:** HTML/CSS/JS (Fase Implementasi Lanjutan)

## 🚀 Panduan Pengujian (Simulasi Remix IDE)
Untuk menguji integritas dan fungsionalitas logika *smart contract*, ikuti langkah prosedural berikut:
1. Buka [Remix IDE](https://remix.ethereum.org/).
2. Buat fail baru dengan nama `VotingPresMa.sol` dan salin kode *smart contract* dari repositori ini.
3. Jalankan kompilasi pada tab **Solidity Compiler** (gunakan versi 0.8.0 atau lebih tinggi).
4. Navigasikan ke tab **Deploy & Run Transactions**. Atur *Environment* ke **Injected Provider - MetaMask** dan pastikan dompet terhubung ke jaringan **Sepolia**.
5. Klik **Deploy**. Alamat yang melakukan *deploy* akan otomatis ditetapkan sebagai `ketuaKPU`.
6. Lakukan simulasi dengan mendaftarkan alamat mahasiswa melalui fungsi `verifikasiPemilih` sebelum mengeksekusi fungsi `berikanSuara`.

## 👥 Tim Pengembang
| Nama | Peran | Tanggung Jawab Utama |
| :--- | :--- | :--- |
| **Hilda Maghfira Genansi** | Project Manager & System Analyst | Analisis arsitektur sistem, perancangan hibrida, penyusunan spesifikasi |
| **[Nama Anggota 2]** | Smart Contract & Backend Planner | Perancangan *skeleton* Solidity & struktur data *on-chain* |
| **[Nama Anggota 3]** | UI/UX & Frontend Planner | Perancangan *wireframe* antarmuka & integrasi visual |
| **[Nama Anggota 4]** | Researcher & Academic Writer | Studi banding komparatif & kompilasi dokumentasi analitis |
