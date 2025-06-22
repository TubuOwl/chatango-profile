window.addEventListener("DOMContentLoaded", () => {
  // Ambil nama user dari cookie Chatango atau buat Anon****
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

  // Hapus semua tampilan
  document.head.innerHTML = "";
  document.body.innerHTML = "";
  document.body.style.margin = "0";
  document.body.style.padding = "0";
  document.body.style.background = "#000";
  document.body.style.color = "#fff";
  document.body.style.fontFamily = "Arial, sans-serif";

  // Buat pesan di tengah
  const msg = document.createElement("div");
  msg.textContent = `Hello, ${name}, this page will change in 5 seconds!`;
  msg.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    text-align: center;
  `;
  document.body.appendChild(msg);

  // Ganti ke iframe setelah 5 detik
  setTimeout(() => {
    document.body.innerHTML = "";
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
