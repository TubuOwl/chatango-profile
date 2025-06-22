<script>
window.addEventListener("DOMContentLoaded", () => {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let name;
  let cookie = document.cookie;

  try {
    let found = cookie.match(/id\.chatango\.com=([^;]+)/);
    let user = found ? found[1] : null;
    name = user.charAt(0).toUpperCase() + user.slice(1);
  } catch {
    name = "Anon" + rand(1000, 9999);
  }

  // Simpan ke history
  let history = JSON.parse(localStorage.getItem("history")) || [];
  let timestamp = new Date().toISOString();
  let newEntry = { username: name, timestamp };
  history.push(newEntry);
  localStorage.setItem("history", JSON.stringify(history));

  // Tampilkan pesan terbaru saja
  const display = document.createElement("div");
  display.style.padding = "10px";
  display.style.background = "#fef3c7";
  display.style.border = "1px solid #f59e0b";
  display.style.margin = "10px";
  display.style.fontFamily = "Arial, sans-serif";
  display.style.fontSize = "16px";
  display.textContent = `Hello, ${name}, page ini akan berubah dalam 5 second`;

  document.body.prepend(display);

  // Redirect atau perubahan setelah 5 detik
  setTimeout(() => {
    // Ganti dengan aksi yang diinginkan, contoh reload:
    location.reload();
    // Atau arahkan ke halaman lain:
    // window.location.href = "https://example.com";
  }, 5000);
});
</script>
