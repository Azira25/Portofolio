/**
 * ==========================================
 * 🔐 KONFIGURASI PASSWORD & SESSION 🔐
 * ==========================================
 */

const PASSWORD_ADMIN = "admin123"; // Ganti password di sini
const SESSION_KEY = "portfolio_admin_session";

// 1. Fungsi Cek Password (dipakai di login.html)
window.checkPassword = function(input) {
    return input === PASSWORD_ADMIN;
};

// 2. Fungsi Set Login (dipakai saat password benar)
window.doLogin = function() {
    sessionStorage.setItem(SESSION_KEY, "true");
};

// 3. Fungsi Cek Status Login (dipakai di index.html)
window.isLoggedIn = function() {
    return sessionStorage.getItem(SESSION_KEY) === "true";
};

// 4. Fungsi Logout
window.doLogout = function() {
    sessionStorage.removeItem(SESSION_KEY);
};