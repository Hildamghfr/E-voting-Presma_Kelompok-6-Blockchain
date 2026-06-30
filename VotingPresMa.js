// Aset dari Backend (Isi sesuai hasil dari Remix IDE kamu)
const contractAddress = "0x6c12400E9BcF0F80f1a9fc8174D88c21Db5F316A";
const contractABI =	[
	{
		"inputs": [],
		"name": "berhentikanPemilu",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_hashNIM",
				"type": "bytes32"
			}, 
			{
				"internalType": "uint256",
				"name": "_idKandidat",
				"type": "uint256"
			}
		],
		"name": "berikanSuara",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lanjutkanPemilu",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mengulangPemilu",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mulaiPemilu",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "hashNIM",
				"type": "bytes32"
			}
		],
		"name": "PemilihDiverifikasi",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "enum PemiluPresMa.StatusPemilu",
				"name": "statusBaru",
				"type": "uint8"
			}
		],
		"name": "StatusBerubah",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "hashTransaksi",
				"type": "bytes32"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "idKandidat",
				"type": "uint256"
			}
		],
		"name": "SuaraMasuk",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "sudahiPemilu",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_nama",
				"type": "string"
			}
		],
		"name": "tambahKandidat",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_hashNIM",
				"type": "bytes32"
			}
		],
		"name": "verifikasiPemilih",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "daftarKandidat",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "nama",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "jumlahSuara",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "dapatkanTotalRiwayat",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ketuaKPU",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "nimSudahMemilih",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "nimTerverifikasi",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "riwayatPemilu",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "hashTransaksi",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "idKandidat",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "statusSaatIni",
		"outputs": [
			{
				"internalType": "enum PemiluPresMa.StatusPemilu",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalKandidat",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "walletSudahMemilih",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Fungsi menghubungkan website ke Dompet MetaMask
async function connectWallet() {
    if (window.ethereum) {
        try {
            // Meminta izin akses akun MetaMask pengguna
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Inisialisasi Ethers.js
            provider = new ethers.BrowserProvider(window.ethereum);
            signer = await provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            
            console.log("Terhubung dengan dompet:", accounts[0]);
            alert("MetaMask Berhasil Terhubung!");
        } catch (error) {
            console.error("User menolak koneksi dompet", error);
        }
    } else {
        alert("MetaMask belum terpasang. Silakan pasang ekstensi MetaMask terlebih dahulu!");
    }
}

// Fungsi Integrasi: Mahasiswa memberikan suara (Picu fungsi berikanSuara)
// Tambahkan hashNIM sebagai parameter
async function voteCandidate(hashNIM, candidateId) {
    try {
        if (!contract) return alert("Silakan hubungkan dompet MetaMask terlebih dahulu!");
        
        console.log(`Mengirimkan suara untuk Kandidat ID: ${candidateId}...`);
        
        // Kirim DUA parameter sesuai permintaan Smart Contract
        const tx = await contract.berikanSuara(hashNIM, candidateId);
        
        alert("Transaksi dikirim ke Blockchain Sepolia. Tunggu konfirmasi blok...");
        await tx.wait(); 
        
        alert("Pemungutan suara berhasil dicatat secara permanen!");
    } catch (error) {
        alert("Transaksi Gagal: " + (error.reason || error.message));
    }
}

// Fungsi Integrasi: KPU melakukan Whitelist (Picu fungsi verifikasiPemilih)
async function verifyVoterAddress(voterAddress) {
    try {
        if (!contract) return alert("Hubungkan dompet panitia!");
        const tx = await contract.verifikasiPemilih(voterAddress);
        await tx.wait();
        alert(`Alamat dompet ${voterAddress} resmi masuk DPT!`);
    } catch (error) {
        alert("Gagal verifikasi: " + error.reason);
    }
}

// FITUR 3: Mengambil data dari fungsi 'riwayatPemilu' di contract dan melakukan ekspor file
async function exportLaporan(format) {
    if (!contract) return alert("Hubungkan dompet dulu!");
    
    // 1. Ambil total data riwayat dari smart contract
    const totalRiwayat = await contract.dapatkanTotalRiwayat();
    let dataLaporan = [];

    for (let i = 0; i < totalRiwayat; i++) {
        const item = await contract.riwayatPemilu(i);
        dataLaporan.push({
            "Nomor Urut": i + 1,
            "Hash Bukti Transaksi": item.hashTransaksi,
            "Pilihan Kandidat ID": item.idKandidat.toString(),
            "Waktu Transaksi": new Date(Number(item.timestamp) * 1000).toLocaleString()
        });
    }

    // 2. Eksekusi Ekspor berdasarkan format pilihan pengguna
    if (format === 'JSON') {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataLaporan, null, 2));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "Laporan_Pemilu_PresMa.json");
        downloadAnchor.click();
        
    } else if (format === 'EXCEL') {
        const worksheet = XLSX.utils.json_to_sheet(dataLaporan);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Hasil Pemilu");
        XLSX.writeFile(workbook, "Laporan_Pemilu_PresMa.xlsx");
        
    } else if (format === 'PDF') {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.text("LAPORAN AUDIT HASIL PEMILU PRESMA", 10, 10);
        
        let yDoc = 20;
        dataLaporan.forEach((row) => {
            doc.text(`${row["Nomor Urut"]}. Paslon ID: ${row["Pilihan Kandidat ID"]} | Hash: ${row["Hash Bukti Transaksi"].substring(0,15)}...`, 10, yDoc);
            yDoc += 10;
        });
        doc.save("Laporan_Pemilu_PresMa.pdf");
    }
}