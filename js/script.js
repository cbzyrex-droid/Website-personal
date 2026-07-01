// ======================================================
// HOTEL KENCONO - LOGIN SYSTEM
// PART 1
// ======================================================

// akun default (SIMULASI DATABASE)
const users = [
    {
        username: "admin",
        password: "admin123",
        role: "admin"
    },
    {
        username: "user",
        password: "user123",
        role: "user"
    }
];


// ambil form login
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(e){
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // cek user
        const foundUser = users.find(
            u => u.username === username && u.password === password
        );

        if(foundUser){

            // simpan session sederhana
            localStorage.setItem("loginUser", JSON.stringify(foundUser));

            alert("Login berhasil! Selamat datang " + foundUser.role);

            // arahkan sesuai role
            if(foundUser.role === "admin"){
                window.location.href = "admin.html";
            } else {
                window.location.href = "biodata.html";
            }

        } else {
            alert("Username atau password salah!");
        }

    });

}
// ==========================================
// BIODATA
// ==========================================

const biodataForm = document.getElementById("biodataForm");

if (biodataForm) {

    biodataForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const biodata = {
            nama: document.getElementById("nama").value,
            umur: document.getElementById("umur").value,
            tanggal: document.getElementById("tanggal").value,
            bulan: document.getElementById("bulan").value,
            tahun: document.getElementById("tahun").value,
            telepon: document.getElementById("telepon").value,
            gender: document.getElementById("gender").value,
            alamat: document.getElementById("alamat").value
        };

        localStorage.setItem("biodata", JSON.stringify(biodata));

        alert("Biodata berhasil disimpan!");

        window.location.href = "user.html";

    });

}
// ======================================
// TOMBOL LOGIN DI INDEX
// ======================================

const btnLogin = document.getElementById("btnLogin");

if (btnLogin) {

    btnLogin.addEventListener("click", function () {

        window.location.href = "login.html";

    });

}