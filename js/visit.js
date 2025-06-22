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

  // Simpan history terbaru
  let history = JSON.parse(localStorage.getItem("history")) || [];
  let timestamp = new Date().toISOString();
  history.push({ username: name, timestamp });
  localStorage.setItem("history", JSON.stringify(history));

  // Buat elemen pesan
  const display = document.createElement("div");
  display.style.padding = "10px";
  display.style.background = "#fef3c7";
  display.style.border = "1px solid #f59e0b";
  display.style.margin = "10px";
  display.style.fontFamily = "Arial, sans-serif";
  display.style.fontSize = "16px";
  display.style.textAlign = "center";
  display.textContent = `Hello, ${name}, page ini akan berubah dalam 5 second`;

  document.body.prepend(display);

  // Ganti isi body dengan iframe setelah 5 detik
  setTimeout(() => {
    document.body.innerHTML = ''; // Kosongkan isi body
    const iframe = document.createElement('iframe');
    iframe.src = "https://chatango-profile-dusky.vercel.app/";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.left = "0";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    document.body.appendChild(iframe);
  }, 5000);
});
