// ======================================================
// HOTEL KENCONO - INVOICE SYSTEM
// ======================================================

const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

if (bookings.length > 0) {

    const lastBooking = bookings[bookings.length - 1];

    document.getElementById("namaUser").innerText = lastBooking.nama;

    document.getElementById("jenisKamar").innerText = lastBooking.jenisKamar;

    document.getElementById("checkIn").innerText = lastBooking.checkin;

    document.getElementById("checkOut").innerText = lastBooking.checkout;

    document.getElementById("jumlahMalam").innerText =
        lastBooking.hari + " Malam";

    document.getElementById("jumlahTamu").innerText =
        lastBooking.tamu + " Orang";

    document.getElementById("totalHarga").innerText =
        "Rp " + lastBooking.total.toLocaleString("id-ID");

}