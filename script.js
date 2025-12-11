// ========================================
// 🚩 AREA UNTUK MENGEDIT DATA SECARA DETAIL PER SEL 🚩
// ========================================

// 1. ATUR LEBAR KOLOM DI SINI
const COLUMN_WIDTHS = {
    0: '160px',  // Kolom A
    1: '150px',  // Kolom B
    2: '150px',  // Kolom C
    3: '150px',  // Kolom D
    4: '150px',  // Kolom E
    5: '150px',  // Kolom F
    6: '150px',  // Kolom G
    7: '150px',  // Kolom H
    8: '150px',  // Kolom I
    9: '150px',  // Kolom J
    10: '250px', // Kolom K
    11: '160px', // Kolom L
    12: '150px', // Kolom M
    13: '150px', // Kolom N
    14: '190px', // Kolom O
    // Tambahkan lebih banyak pengaturan di sini. Default adalah 100px
};


/**
 * 2. UBAH DATA DI SINI.
 */
const dataGrid = [
    // BARIS 1 (A1 hingga O1) - HEADER DATA
    ['NOMOR HP / WA ', 'ID FAYA', 'NAMA FAYA', 'TARGET COIN', 'TARGET DIAMOND', 'RP COIN', 'RP DIAMOND', 'BONUS', 'DOLAR $', 'RP / COIN BONUS', 'TOTAL RP', 'NOMOR REG', 'AKUN REG', 'NAMA REG', 'STATUS FAYA' /* Tambahkan data lainnya hingga kolom Z */],

    
    // BARIS 2 (A3 hingga O3)
    ['+853 6653 2440', '10067655', 'ꜱ͜͡ᴋᴬ ᭼Candy', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', '0', 'Rp 0', '085267348782', 'DANA', 'Esti Septiani', 'Anggota'],

    
    // BARIS 3 (A5 hingga O5)
    ['+62 851 9803 3804', '10015083', 'ꜱ͜͡ᴋᴬ ᭼Nelfi', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', 'Rp 0', 'Rp 0', '082298428493', 'DANA', 'Yunelfi', 'Super Admin / Rp 2.000'],

    
    // BARIS 4 (A6 hingga O6)
    ['+62 831 6828 6042', '10085046', 'ꜱ͜͡ᴋᴬ ᭼𝐒ɦα𝗂𝗋α', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', '0', 'Rp 0', '083839419665', 'DANA', 'kas125', 'Anggota'],

    
    // BARIS 5 (A7 hingga 07)
    ['+62 878 2624 7644', '10065906', 'ꜱ͜͡ᴋᴬ ᭼🍀DuduLLz🍀', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', ' $ : Rp 0', '0', 'Rp 0', '082119792181', 'DANA', 'INEU SETIAWATI', 'Angota'],

    
    // BARIS 6 (A7 hingga 07)
    ['+62 812 6933 0165', '10069203', 'ꜱ͜͡ᴋᴬ ᭼W҉A҉H҉Y҉O҉E҉"', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', ' $ : Rp 0', '0', 'Rp 0', '081269330165', 'DANA', 'MENANTIUS LAFAU', 'Super Admin / Rp 2.000'],

    
    // BARIS 7 (A8 hingga 08)
    ['+62 882 9471 5902', '10029550', 'ꜱ͜͡ᴋᴬ ᭼AGUNG', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', ' $ : Rp 0', '0', 'Rp 0', '088294715902', 'DANA', 'AGUNG SUWANDI', 'Angota'],

    
    // BARIS 8 (A10 hingga 10)
    ['+62 823 5944 5110', '10112534', 'ꜱ͜͡ᴋᴬ ᭼𝐂𝗶𝗵𝘂Ꮍ', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', ' $ : Rp 0', '0', 'Rp 0', '901715299202', 'Seabank', 'Yek yagil ', 'Angota'],

    
    // BARIS 9 (A11 hingga 11)
    ['+62 812 4683 7174', '10076638', 'ꜱ͜͡ᴋᴬ ᭼Salsa hangeul', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', ' $ : Rp 0', '0', 'Rp 0', '082276671001', 'GoPay', 'Nur istifadah', 'Super Admin / Rp 2.000'],

    
    // BARIS 10 (A12 hingga 12)
    ['+62 831 8857 3803', '10098483', 'ꜱ͜͡ᴋᴬ ᭼Tika', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', '0', 'Rp 0', '083178112886', 'GoPay', 'Dewi kartika', 'Anggota'],

    
    // BARIS 11 (A13 hingga 13)
    ['+62 852 4998 7044', '10112418', 'ꜱ͜͡ᴋᴬ ᭼爱|•sᴀɴᴊɪッ', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', ' $ : Rp 0', '0', 'Rp 0', '085249987044', 'ShopeePay', 'MUHAMMAD RIFAI', 'Angota'],

    
    // BARIS 12 (A12 hingga 12)
    ['+62 858 4640 2435', '10083600', 'ꜱ͜͡ᴋᴬ ᭼Luber♡', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', '0', 'Rp 0', '089520373882', 'LinkAja', 'Septian noval setia', 'Anggota'],

    
    // BARIS 13 (A13 hingga 13)
    ['+62 812 6470 1180', '10027528', 'ꜱ͜͡ᴋᴬ ᭼buaya cuek', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', '0', 'Rp 0', '2970638566', 'BCA', 'Liya Fitriani', 'Anggota'],

    
    // BARIS 14 (A14 hingga 14)
    ['+62 822 5812 7459', '10084725', 'ꜱ͜͡ᴋᴬ ᭼£lsa', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', '0', 'Rp 0', '204301012055508', 'BRI', 'Elsa tri wahyuni', 'Anggota'],



    
    ['+62 821 7207 0365', '10053588', 'ꜱ͜͡ᴋᴬ ᭼NICO"', '100.000', '100.000', 'Rp 20.000', 'Rp 20.000', 'Rp 11.000', ' $ : Rp 0', '0', 'Rp 0', '-', '-', '-', 'Anggota'],
    
    
    ['+62 821 7207 0365', '10087223', 'ꜱ͜͡ᴋᴬ ᭼Siska', '100.000', '100.000', 'Rp Rp 20.000', 'Rp Rp 20.000', 'Rp 11.000', ' $ : Rp 0', '0', 'Rp 0', '-', '-', '-', 'Anggota'],

    
    ['+62 821 7207 0365', '10030779', 'ꜱ͜͡ᴋᴬ ᭼Asuwi⚔️', '100.000', '100.000', 'Rp Rp 20.000', 'Rp 20.000', 'Rp 11.000','$ : Rp 17.000', '0', 'Rp 0', '-', '-', '-', 'Admin Room'],

    
    ['+62 896 4677 5883', '10026365', 'ꜱ͜͡ᴋᴬ ᭼Arow ✯⃟»𝙽"', '0', '0', 'Rp 0', 'Rp 0', 'Rp 0', '$ : Rp 0', 'Rp 0', 'Rp 0', '089646775883', 'DANA', 'Wi**** H*** M****', 'OWNER SKA'],
    
    // ... TAMBAHKAN BARIS LAIN HINGGA 100 ...
];

// ------------------------------------------
// JANGAN UBAH KODE DI BAWAH INI
// ------------------------------------------

// Otomatis mendapatkan jumlah baris dan kolom dari dataGrid
let rows = dataGrid.length;
let cols = dataGrid.length > 0 ? dataGrid[0].length : 0;

function getColumnName(index) {
    let name = '';
    while (index >= 0) {
        name = String.fromCharCode(65 + (index % 26)) + name;
        index = Math.floor(index / 26) - 1;
    }
    return name;
}

function initializeSpreadsheet() {
    const headerRow = document.getElementById('headerRow');
    const tableBody = document.getElementById('tableBody');

    // Membuat Header Kolom (A, B, C...)
    headerRow.innerHTML = '<th class="corner-cell">No</th>';
    for (let c = 0; c < cols; c++) {
        const th = document.createElement('th');
        th.className = 'col-header';
        th.textContent = getColumnName(c);

        // Menerapkan Lebar Kolom
        const width = COLUMN_WIDTHS[c] || '100px';
        th.style.minWidth = width;

        headerRow.appendChild(th);
    }

    // Membuat Baris dan Sel
    tableBody.innerHTML = '';

    for (let r = 0; r < rows; r++) {
        const tr = document.createElement('tr');

        // MENAMBAHKAN WARNA PADA BARIS PERTAMA (r === 0)
        if (r === 0) {
            tr.classList.add('row-highlight');
        }

        const rowHeader = document.createElement('td');
        rowHeader.className = 'row-header';
        rowHeader.textContent = r + 1;
        tr.appendChild(rowHeader);

        for (let c = 0; c < cols; c++) {
            const td = document.createElement('td');
            td.className = 'cell';

            // Menerapkan Lebar Kolom pada Sel
            const width = COLUMN_WIDTHS[c] || '100px';
            td.style.minWidth = width;

            const input = document.createElement('input');
            input.type = 'text';
            input.className = 'cell-input';
            input.dataset.row = r;
            input.dataset.col = c;

            input.value = (dataGrid[r] && dataGrid[r][c] !== undefined) ? dataGrid[r][c] : '';
            input.readOnly = true;

            td.appendChild(input);
            tr.appendChild(td);
        }

        tableBody.appendChild(tr);
    }
}

// ... (Kode sebelumnya)

// ========================================
// FUNGSI UTAMA: MENAMPILKAN INFO AGENSI (TELAH DIPERBAHARUI DENGAN DATA BARU)
// ========================================

// Konten Info Agensi Baru
const agencyInfoContent = `
<div style="text-align: center; margin-bottom: 20px;">
    <h2 style="color: #1a73e8; margin: 0; font-size: 20px;">🎉 WELCOME TO AGENCY SAHABAT KITA 🎉</h2>
    <p style="color: #5f6368; font-style: italic;">Jadwal dan Ketentuan Resmi Agensi</p>
</div>

<hr style="border: 0; border-top: 1px solid #dadce0;">

<div style="margin-top: 15px;">
    <h3 style="color: #d93025; margin-bottom: 5px;">🔴 JADWAL LIVE ADMIN</h3>
    <p style="margin: 5px 0 0; font-weight: bold; color: #202124;">SUPER ADMIN LIVE:</p>
    <ul style="padding-left: 20px; margin-top: 5px; list-style-type: none; line-height: 1.6;">
        <li>⭐ NELFI: JAM 08.00 - 12.00</li>
        <li>⭐ SALSA: JAM 08.00 - 12.00</li>
        <li>⭐ AROW: JAM 17.00 - 24.00</li>
    </ul>
    <p style="margin: 10px 0 0; font-weight: bold; color: #202124;">ADMIN LIVE:</p>
    <ul style="padding-left: 20px; margin-top: 5px; list-style-type: none; line-height: 1.6;">
        <li>✨ AZRIL: JAM 13.00 - 17.00</li>
    </ul>
    <hr style="border: 0; border-top: 1px dashed #ccc; margin: 15px 0;">
    <p style="margin: 0; font-size: 14px; color: #5f6368;">*JAM 23 / 24: Bebas Admin RUM</p>
    <p style="margin: 0; font-size: 14px; color: #5f6368;">*JAM 01 / 06: OFF LIVE</p>
</div>

<hr style="border: 0; border-top: 1px solid #dadce0; margin: 20px 0;">

<div style="margin-top: 15px;">
    <h3 style="color: #0f9d58; margin-bottom: 5px;">✅ OPEN ADMIN PERSYARATAN</h3>
    <ul style="padding-left: 20px; margin-top: 0; line-height: 1.6;">
        <li>Minimal Kekayaan Level 11</li>
        <li>Hapal Rules (Aturan)</li>
        <li>Pintar Berbicara</li>
    </ul>
</div>

<div style="margin-top: 20px;">
    <h3 style="color: #f7a01d; margin-bottom: 5px;">💰 BONUS JOIN AGENCY</h3>
    <ul style="padding-left: 20px; margin-top: 0; line-height: 1.6;">
        <li>Anggota Aktif: Bonus 2% (Min. di RUM Agency 1/2 jam)</li>
        <li>Anggota GIF RUM Agency: 3% (Cashback koin diberikan jam 00.00)</li>
        <li>Sering Cek In Fameli: Bonus Minggu Aktif 2.000 GIF / 4.000 GIF</li>
    </ul>
</div>

<div style="margin-top: 20px;">
    <h3 style="color: #1c529f; margin-bottom: 5px;">✨ MEMBER JOIN BONUS (Minimal Target 50K)</h3>
    <p style="margin: 0; font-size: 13px; color: #70757a;">*⛔ HANYA UNTUK MEMBER PERTAMA JOIN AGENCY YA 👌*</p>
    <ul style="padding-left: 20px; margin-top: 5px; line-height: 1.6;">
        <li>Target 50K: Bonus GIF 10.000</li>
        <li>Target 250K: Bonus GIF 20.000</li>
    </ul>
</div>

<div style="margin-top: 20px;">
    <h3 style="color: #673ab7; margin-bottom: 5px;">🚀 BONUS PUSH RUM AGENCY (Rp) ✅</h3>
    <ul style="padding-left: 20px; margin-top: 0; line-height: 1.6;">
        <li>LVL 5 / 400: 4.000</li>
        <li>LVL 6 / 550: 6.000</li>
        <li>LVL 7 / 750: 8.000</li>
        <li>LVL 8 / 1,1M: 10.000</li>
        <li>LVL 9 / 1,450: 13.000</li>
        <li>LVL 10 / 1,900: 16.000</li>
    </ul>
</div>

<div style="margin-top: 20px;">
    <h3 style="color: #4285f4; margin-bottom: 5px;">📈 TARGET MINGGUAN AGENCY (GIF)</h3>
    <p style="margin: 0; font-size: 13px; color: #70757a;">*Diberikan ke seluruh member yang push bersama di RUM Agency*</p>
    <ul style="padding-left: 20px; margin-top: 5px; line-height: 1.6;">
        <li>Target 1.500.000: 30.000 COIN GIF</li>
        <li>Target 3.000.000: 65.000 COIN GIF</li>
        <li>Target 5.000.000: 120.000 COIN GIF</li>
    </ul>
</div>
`;

function showAgencyInfo() {
    showElegantPopup('Informasi Agensi', agencyInfoContent);
}

// ========================================
// FUNGSI BARU: MENAMPILKAN POP-UP ELEGANT
// ========================================

function showElegantPopup(title, contentHTML) {
    // 1. Buat elemen latar belakang (backdrop)
    const backdrop = document.createElement('div');
    backdrop.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10000;
    `;
    backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) {
            backdrop.remove();
        }
    });

    // 2. Buat elemen pop-up (modal)
    const modal = document.createElement('div');
    modal.style.cssText = `
        background: white;
        padding: 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        max-width: 90%;
        width: 450px;
        max-height: 80%;
        overflow-y: auto;
        position: relative;
    `;
    modal.innerHTML = contentHTML;

    // 3. Tambahkan tombol tutup
    const closeButton = document.createElement('button');
    closeButton.textContent = '✖';
    closeButton.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 18px;
        cursor: pointer;
        color: #70757a;
        padding: 5px;
        transition: color 0.2s;
    `;
    closeButton.onmouseover = () => closeButton.style.color = '#d93025';
    closeButton.onmouseout = () => closeButton.style.color = '#70757a';
    closeButton.onclick = () => backdrop.remove();

    modal.prepend(closeButton); // Masukkan tombol tutup di paling atas modal
    backdrop.appendChild(modal);
    document.body.appendChild(backdrop);
}

// ... (Sisa kode di bagian bawah script.js)
initializeSpreadsheet();

// Fungsi Pencarian
function searchData() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    const searchResult = document.getElementById('searchResult');

    if (!searchTerm) {
        showToast('Masukkan kata kunci pencarian');
        return;
    }

    clearSearch();

    const inputs = document.querySelectorAll('.cell-input');
    let foundCount = 0;
    let firstMatch = null;

    inputs.forEach(input => {
        const value = input.value.toLowerCase();
        if (value.includes(searchTerm)) {
            input.classList.add('highlight');
            foundCount++;
            if (!firstMatch) {
                firstMatch = input;
            }
        }
    });

    if (foundCount > 0) {
        searchResult.textContent = `Ditemukan ${foundCount} hasil`;
        if (firstMatch) {
            firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        showToast(`Ditemukan ${foundCount} hasil`);
    } else {
        searchResult.textContent = 'Tidak ada hasil';
        showToast('Tidak ada hasil ditemukan');
    }
}

function clearSearch() {
    const inputs = document.querySelectorAll('.cell-input');
    inputs.forEach(input => {
        input.classList.remove('highlight');
    });
    document.getElementById('searchResult').textContent = '';
    document.getElementById('searchInput').value = '';
}

document.getElementById('searchInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchData();
    }
});

function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Panggil fungsi inisialisasi saat halaman dimuat
initializeSpreadsheet();
