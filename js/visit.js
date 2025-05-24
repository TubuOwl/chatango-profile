window.addEventListener("DOMContentLoaded", () => {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Ambil session ID dari cookie st.chatango.com
  let cookies = document.cookie;
  let sessionId;

  try {
    let match = cookies.match(/st\.chatango\.com=sessionid_(\d+)/);
    if (match) {
      sessionId = match[1];

      // Set session_id cookie jika ditemukan dari st.chatango.com
      document.cookie = `session_id=${sessionId}; path=/; max-age=31536000; SameSite=Lax`;
    }
  } catch (e) {
    console.warn("Gagal membaca cookie st.chatango.com");
  }

  // Ambil username dari id.chatango.com jika ada, jika tidak anon
  let name;
  try {
    let found = cookies.match(/id\.chatango\.com=([^;]+)/);
    let user = found ? found[1] : null;
    name = user.charAt(0).toUpperCase() + user.slice(1);
  } catch {
    name = "Anon" + rand(1000, 9999);
  }

  // Simpan ke localStorage history
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push({
    username: name,
    session_id: sessionId || null,
    timestamp: new Date().toISOString()
  });

  localStorage.setItem("history", JSON.stringify(history));
  console.log("User history updated:", history);
});
