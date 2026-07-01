alert("ADMIN JS BERHASIL DIMUAT");
// ======================================================
// HOTEL KENCONO - ADMIN PANEL
// FINAL PART
// ======================================================

const adminContainer = document.getElementById("adminPanel");

if (adminContainer) {

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length === 0) {
        adminContainer.innerHTML = "<h2>Belum ada data booking</h2>";
    } else {

        let html = `
        <div class="admin-container fade-up">
            <h1>ADMIN DASHBOARD</h1>

            <table>
                <tr>
                    <th>Nama</th>
                    <th>Kamar</th>
                    <th>Hari</th>
                    <th>Total</th>
                </tr>
        `;

        bookings.forEach((b, index) => {
            html += `
                <tr>
                    <td>${b.nama}</td>
                    <td>${b.tipeKamar}</td>
                    <td>${b.hari}</td>
                    <td>Rp ${b.total.toLocaleString()}</td>
                </tr>
            `;
        });

        html += `</table>

            <div class="mt-40 text-center">
                <button onclick="resetData()">Reset Semua Data</button>
            </div>

        </div>`;

        adminContainer.innerHTML = html;
    }
}


// reset data booking
function resetData(){
    if(confirm("Yakin mau hapus semua data booking?")) {
        localStorage.removeItem("bookings");
        alert("Data berhasil dihapus!");
        location.reload();
    }
}
// ======================================
// EDIT KAMAR
// ======================================

function editKamar(button){

    let baris = button.parentElement.parentElement;

    let nama = baris.cells[1].innerText;
    let harga = baris.cells[2].innerText.replace("Rp","").replace(/\./g,"");

    let namaBaru = prompt("Edit Nama Kamar :", nama);

    if(namaBaru == null) return;

    let hargaBaru = prompt("Edit Harga :", harga);

    if(hargaBaru == null) return;

    baris.cells[1].innerText = namaBaru;
    baris.cells[2].innerText = "Rp" + Number(hargaBaru).toLocaleString();

    alert("Data kamar berhasil diperbarui!");

}



// ======================================
// HAPUS KAMAR
// ======================================

function hapusKamar(button){

    alert("Fitur Hapus masih dalam proses pembuatan 😊");

}
// ======================================
// TAMBAH KAMAR BARU
// ======================================

const formKamar = document.getElementById("formKamar");

if (formKamar) {

    formKamar.addEventListener("submit", function(e){

        e.preventDefault();

        const nama = document.getElementById("namaKamar").value;
        const harga = document.getElementById("hargaKamar").value;
        const fasilitas = document.getElementById("fasilitasKamar").value;

        const tabel = document.querySelector(".table-section tbody");

        const nomor = tabel.rows.length + 1;

        const baris = tabel.insertRow();

        baris.innerHTML = `
            <td>${nomor}</td>
            <td>${nama}</td>
            <td>Rp${Number(harga).toLocaleString()}</td>
            <td>Tersedia</td>
            <td>
                <button onclick="editKamar(this)">Edit</button>
                <button onclick="hapusKamar(this)">Hapus</button>
            </td>
        `;

        alert("Kamar berhasil ditambahkan!");

        formKamar.reset();

    });

}