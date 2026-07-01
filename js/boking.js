// ======================================================
// HOTEL KENCONO - BOOKING SYSTEM
// PART 2
// ======================================================


// ambil form
const bookingForm = document.getElementById("bookingForm");
function hitungBooking() {

    const tipeKamar = document.getElementById("jenisKamar").value;

    const checkin = new Date(document.getElementById("checkin").value);
    const checkout = new Date(document.getElementById("checkout").value);

    let hargaPerHari = 0;

    if (tipeKamar === "Kamar Istirahat") {
        hargaPerHari = 150000;
    } else if (tipeKamar === "Kamar Standar") {
        hargaPerHari = 350000;
    } else if (tipeKamar === "Kamar VIP") {
        hargaPerHari = 750000;
    }

    if (!isNaN(checkin) && !isNaN(checkout)) {

        const hari = (checkout - checkin) / (1000 * 60 * 60 * 24);

        if (hari > 0) {

            const total = hargaPerHari * hari;

            document.getElementById("harga").innerText =
                "Rp" + hargaPerHari.toLocaleString("id-ID");

            document.getElementById("malam").innerText = hari;

            document.getElementById("total").innerText =
                "Rp" + total.toLocaleString("id-ID");

        }

    }

}
if (bookingForm) {

    bookingForm.addEventListener("submit", function(e){
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const tipeKamar = document.getElementById("jenisKamar").value;
        

        // harga kamar
        let hargaPerHari = 0;

        if (tipeKamar === "Kamar Istirahat") {
    hargaPerHari = 150000;
} else if (tipeKamar === "Kamar Standar") {
    hargaPerHari = 350000;
} else if (tipeKamar === "Kamar VIP") {
    hargaPerHari = 750000;
}
        const checkin = new Date(document.getElementById("checkin").value);
        const checkout = new Date(document.getElementById("checkout").value);
        
        const selisih = checkout - checkin;
        
        const hari = selisih / (1000 * 60 * 60 * 24);

        const total = hargaPerHari * hari;
        

        // data booking
       const bookingData = {
    nama: nama,
    jenisKamar: tipeKamar,
    checkin: document.getElementById("checkin").value,
    checkout: document.getElementById("checkout").value,
    tamu: document.getElementById("tamu").value,
    hari: hari,
    total: total
};

        // simpan ke localStorage
        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        bookings.push(bookingData);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        // tampilkan hasil
        

        alert("Booking berhasil disimpan!");
        window.location.href = "history.html";

        bookingForm.reset();

    });

}
document.getElementById("jenisKamar").addEventListener("change", hitungBooking);

document.getElementById("checkin").addEventListener("change", hitungBooking);

document.getElementById("checkout").addEventListener("change", hitungBooking);