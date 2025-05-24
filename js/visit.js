// Fungsi untuk mengambil cookies sebagai objek
function getCookies() {
  const pairs = document.cookie.split(";");
  const cookies = {};
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    cookies[pair[0].trim()] = decodeURIComponent(pair.slice(1).join('='));
  }
  return cookies;
}

// Variabel untuk menyimpan cookies terakhir
let lastCookies = {};

// Fungsi untuk memeriksa perubahan cookies
function checkCookies() {
  const currentCookies = getCookies();

  // Bandingkan dengan cookies terakhir yang disimpan
  const changed = JSON.stringify(currentCookies) !== JSON.stringify(lastCookies);

  if (changed) {
    console.log("Ada perubahan cookie:", currentCookies);
    lastCookies = currentCookies; // update cookies terakhir
  }
}

// Ambil cookies pertama kali saat halaman dimuat
lastCookies = getCookies();

// Jalankan pengecekan setiap 5 detik (5000 ms)
setInterval(checkCookies, 5000);
