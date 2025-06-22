<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Auto Iframe Redirect</title>
</head>
<body>
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
      history.push({ username: name, timestamp: new Date().toISOString() });
      localStorage.setItem("history", JSON.stringify(history));

      // Tampilkan pesan
      const message = document.createElement("div");
      message.textContent = `Hello, ${name}, page ini akan berubah dalam 5 second`;
      message.style.cssText = `
        padding: 20px;
        background: #fff3cd;
        color: #856404;
        border: 1px solid #ffeeba;
        font-family: sans-serif;
        text-align: center;
        margin: 20px;
        font-size: 18px;
      `;
      document.body.appendChild(message);

      // Setelah 5 detik, ganti dengan iframe
      setTimeout(() => {
        document.body.innerHTML = ""; // Hapus semua isi body
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
  </script>
</body>
</html>
