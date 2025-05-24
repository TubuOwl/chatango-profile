window.onload = start;

function rand(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function start() {
  let name;
  let cookie = document.cookie;

  try {
    let found = cookie.match("id.chatango.com=([^;]+)");
    let user = found ? found[1] : null;
    name = user.charAt(0).toUpperCase() + user.slice(1);
  } catch {
    name = "Anon" + rand(1000, 9999);
  }

  document.getElementById("user").textContent = name;

  // Ambil history lama dari localStorage (atau array kosong kalau belum ada)
  let history = JSON.parse(localStorage.getItem("history")) || [];

  // Tambahkan user baru ke history
  history.push({
    username: name,
    timestamp: new Date().toISOString()
  });

  // Simpan kembali ke localStorage
  localStorage.setItem("history", JSON.stringify(history));

  // (Opsional) tampilkan history di console
  console.log("User history:", history);
}
