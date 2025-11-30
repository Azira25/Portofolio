/**
 * KONFIGURASI KEAMANAN
 * ---------------------
 * Ganti text di dalam tanda kutip di bawah ini dengan password baru Anda.
 */

const PASSWORD_ADMIN = "admin123";

/**
 * Fungsi untuk memverifikasi password
 * Jangan ubah bagian ini kecuali Anda mengerti JavaScript.
 */
export function verifikasiPassword(input) {
    // Mengecek apakah input sama dengan password yang disimpan
    return input === PASSWORD_ADMIN;
}
