// ======================================================
// HOTEL KENCONO - HISTORY SYSTEM
// PART 3
// ======================================================

const historyContainer = document.getElementById("historyBody");

if (historyContainer) {

    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    console.log(bookings);

    if (bookings.length === 0) {
        historyContainer.innerHTML = "<h2>Belum ada riwayat booking</h2>";
    } else {

        let html = "";
        
        

        bookings.forEach((data, index) => {
            console.log(data);

    html += `
        <tr>
            <td>${index + 1}</td>
            <td>${new Date().toLocaleDateString("id-ID")}</td>
            <td>${data.jenisKamar}</td>
            <td>${data.checkin}</td>
            <td>${data.checkout}</td>
            <td>Rp ${data.total.toLocaleString("id-ID")}</td>
            <td>Selesai</td>
        </tr>
    `;

});
        

        historyContainer.innerHTML = html;
    }
}