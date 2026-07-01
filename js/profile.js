// ======================================================
// HOTEL KENCONO - PROFILE SYSTEM
// FINAL PART
// ======================================================

const profileContainer = document.getElementById("profile");

if (profileContainer) {

    const user = JSON.parse(localStorage.getItem("loginUser"));

    if (!user) {
        profileContainer.innerHTML = "<h2>Belum login</h2>";
    } else {

        profileContainer.innerHTML = `
            <div class="profile-card fade-up">
                <img src="https://i.pravatar.cc/150?img=12" alt="profile">
                <h2>${user.username}</h2>
                <p>Role: ${user.role}</p>

                <table>
                    <tr><td>Username</td><td>${user.username}</td></tr>
                    <tr><td>Role</td><td>${user.role}</td></tr>
                </table>

                <div class="profile-button">
                    <button onclick="logout()">Logout</button>
                </div>
            </div>
        `;
    }
}


// logout function
function logout(){
    localStorage.removeItem("loginUser");
    alert("Berhasil logout!");
    window.location.href = "login.html";
}