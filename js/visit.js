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

  let history = JSON.parse(localStorage.getItem("history")) || [];
  const entry = {
    username: name,
    timestamp: new Date().toISOString()
  };
  history.push(entry);
  localStorage.setItem("history", JSON.stringify(history));
  console.log("User history updated:", history);

  // === DISPLAY ON PAGE ===
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "10px";
  container.style.right = "10px";
  container.style.background = "rgba(0, 0, 0, 0.7)";
  container.style.color = "#fff";
  container.style.padding = "10px";
  container.style.borderRadius = "5px";
  container.style.fontFamily = "sans-serif";
  container.style.zIndex = "9999";

  container.textContent = `Welcome, ${entry.username}! Logged at ${new Date(entry.timestamp).toLocaleString()}`;
  document.body.appendChild(container);
});
</script>
