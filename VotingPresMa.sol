// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PemiluPresMa {

    // 1. STRUKTUR DATA
    struct Kandidat {
        uint256 id;
        string nama;
        uint256 jumlahSuara;
    }

    // Mapping untuk verifikasi identitas (Menjawab judul proyek)
    mapping(address => bool) public pemilihTerverifikasi;
    
    // Mapping untuk melacak yang sudah memilih
    mapping(address => bool) public sudahMemilih;
    
    mapping(uint256 => Kandidat) public daftarKandidat;
    uint256 public totalKandidat;

    // Alamat Komisi Pemilihan Umum (KPU) Kampus
    address public ketuaKPU;

    // 2. MODIFIER (HAK AKSES)
    modifier hanyaKPU() {
        require(msg.sender == ketuaKPU, "Hanya KPU Kampus yang memiliki akses");
        _;
    }

    // 3. EVENT LOGGING
    event PemilihDiverifikasi(address mahasiswa);
    event SuaraMasuk(uint256 idKandidat, address pemilih);
    event KandidatDitambahkan(uint256 idKandidat, string nama);

    constructor() {
        ketuaKPU = msg.sender;
    }

    // 4. FUNGSI INTI 

    // Fungsi Write: KPU memverifikasi identitas mahasiswa agar bisa memilih (Whitelist)
    function verifikasiPemilih(address _mahasiswa) public hanyaKPU {
        // TODO: Ubah status pemilihTerverifikasi menjadi true
        // TODO: Panggil event PemilihDiverifikasi
    }

    // Fungsi Write: KPU mendaftarkan calon PresMa
    function tambahKandidat(string memory _nama) public hanyaKPU {
        // TODO: Tambah totalKandidat dan masukkan ke mapping daftarKandidat
    }

    // Fungsi Write: Mahasiswa memberikan hak suara untuk PresMa
    function berikanSuara(uint256 _idKandidat) public {
        // TODO: Validasi (require) agar pemilihTerverifikasi == true (Harus mahasiswa sah)
        // TODO: Validasi (require) agar sudahMemilih == false (Belum pernah memilih)
        // TODO: Tambahkan jumlahSuara pada kandidat PresMa
        // TODO: Ubah status sudahMemilih menjadi true
    }

    // Fungsi Read: Mengambil hasil pemilu
    function lihatHasil(uint256 _idKandidat) public view returns (string memory nama, uint256 jumlahSuara) {
        // TODO: Kembalikan nama dan jumlah suara kandidat PresMa
    }
}