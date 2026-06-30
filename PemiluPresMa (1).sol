// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract PemiluPresMa {

    // FITUR 4: State Management (Siklus Hidup Pemilu)
    enum StatusPemilu { BelumMulai, Berjalan, Diberhentikan, Selesai }
    StatusPemilu public statusSaatIni;

    struct Kandidat {
        uint256 id;
        string nama;
        uint256 jumlahSuara;
    }

    // FITUR 2: Struktur untuk mencatat riwayat transaksi yang di-hash
    struct BuktiSuaraHashed {
        bytes32 hashTransaksi; // Hash kriptografi representasi voting
        uint256 idKandidat;
        uint256 timestamp;
    }

    // FITUR 1: Mapping menggunakan hash bytes32 untuk anonimitas & verifikasi ID (NIM)
    mapping(bytes32 => bool) public nimTerverifikasi;
    mapping(bytes32 => bool) public nimSudahMemilih;
    
    mapping(address => bool) public walletSudahMemilih;
    mapping(uint256 => Kandidat) public daftarKandidat;
    
    // Menyimpan seluruh riwayat bukti transaksi secara on-chain
    BuktiSuaraHashed[] public riwayatPemilu;
    
    uint256 public totalKandidat;
    address public ketuaKPU;

    // MODIFIER
    modifier hanyaKPU() {
        require(msg.sender == ketuaKPU, "Hanya KPU Kampus yang memiliki akses");
        _;
    }

    // FITUR 4: Modifier untuk mengunci fungsi berdasarkan status pemilu
    modifier wajibStatus(StatusPemilu _status) {
        require(statusSaatIni == _status, "Status pemilu tidak sesuai untuk aksi ini");
        _;
    }

    // EVENTS
    event PemilihDiverifikasi(bytes32 indexed hashNIM);
    event SuaraMasuk(bytes32 indexed hashTransaksi, uint256 idKandidat);
    event StatusBerubah(StatusPemilu statusBaru);

    constructor() {
        ketuaKPU = msg.sender;
        statusSaatIni = StatusPemilu.BelumMulai;
    }

    // ==================== FITUR 4: STATE MANAGEMENT ====================
    
    function mulaiPemilu() public hanyaKPU {
        statusSaatIni = StatusPemilu.Berjalan;
        emit StatusBerubah(statusSaatIni);
    }

    // Memberhentikan sementara (Pause)
    function berhentikanPemilu() public hanyaKPU wajibStatus(StatusPemilu.Berjalan) {
        statusSaatIni = StatusPemilu.Diberhentikan;
        emit StatusBerubah(statusSaatIni);
    }

    // Melanjutkan kembali (Resume)
    function lanjutkanPemilu() public hanyaKPU wajibStatus(StatusPemilu.Diberhentikan) {
        statusSaatIni = StatusPemilu.Berjalan;
        emit StatusBerubah(statusSaatIni);
    }

    // Menyudahi pemilu secara permanen (Stop)
    function sudahiPemilu() public hanyaKPU {
        statusSaatIni = StatusPemilu.Selesai;
        emit StatusBerubah(statusSaatIni);
    }

    // Mengulang pemilu dari awal (Reset)
    function mengulangPemilu() public hanyaKPU {
        statusSaatIni = StatusPemilu.BelumMulai;
        for (uint256 i = 1; i <= totalKandidat; i++) {
            daftarKandidat[i].jumlahSuara = 0;
        }
        delete riwayatPemilu;
        emit StatusBerubah(statusSaatIni);
    }

    // ==================== FUNGSI INTI DAN KRIPTOGRAFI ====================

    // FITUR 1: KPU melakukan verifikasi menggunakan HASH NIM (bukan NIM mentah) demi privasi
    function verifikasiPemilih(bytes32 _hashNIM) public hanyaKPU {
        require(!nimTerverifikasi[_hashNIM], "NIM sudah terverifikasi sebelumnya");
        nimTerverifikasi[_hashNIM] = true;
        emit PemilihDiverifikasi(_hashNIM);
    }

    function tambahKandidat(string memory _nama) public hanyaKPU wajibStatus(StatusPemilu.BelumMulai) {
        totalKandidat++;
        daftarKandidat[totalKandidat] = Kandidat(totalKandidat, _nama, 0);
    }

    // FITUR 1 & 2: Proses voting dengan pengamanan hash ganda
    function berikanSuara(bytes32 _hashNIM, uint256 _idKandidat) public wajibStatus(StatusPemilu.Berjalan) {
        require(nimTerverifikasi[_hashNIM], "NIM Anda belum terverifikasi oleh KPU");
        require(!nimSudahMemilih[_hashNIM], "NIM ini sudah menggunakan hak suara");
        require(!walletSudahMemilih[msg.sender], "Dompet ini sudah digunakan untuk memilih");
        require(_idKandidat > 0 && _idKandidat <= totalKandidat, "ID Kandidat tidak valid");

        nimSudahMemilih[_hashNIM] = true;
        walletSudahMemilih[msg.sender] = true;
        daftarKandidat[_idKandidat].jumlahSuara++;

        // FITUR 2: Membuat riwayat transaksi hashing internal secara on-chain
        bytes32 hRx = keccak256(abi.encodePacked(msg.sender, _hashNIM, block.timestamp));
        riwayatPemilu.push(BuktiSuaraHashed(hRx, _idKandidat, block.timestamp));

        emit SuaraMasuk(hRx, _idKandidat);
    }

    // Fungsi Pembacaan untuk ekspor data di Frontend
    function dapatkanTotalRiwayat() public view returns (uint256) {
        return riwayatPemilu.length;
    }
}