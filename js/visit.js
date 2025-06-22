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
  history.push({
    username: name,
    timestamp: new Date().toISOString()
  });

  localStorage.setItem("history", JSON.stringify(history));
  console.log("User history updated:", history);

  // --- DISPLAY TEXT ON PAGE ---
  const display = document.createElement("div");
  display.style.padding = "1em";
  display.style.background = "#f4f4f4";
  display.style.border = "1px solid #ccc";
  display.style.margin = "1em 0";
  display.style.fontFamily = "sans-serif";

  let html = `<strong>Current User:</strong> ${name}<br><strong>Visit History:</strong><ul>`;
  history.slice(-5).reverse().forEach(entry => {
    html += `<li>${entry.username} - ${new Date(entry.timestamp).toLocaleString()}</li>`;
  });
  html += `</ul>`;

  display.innerHTML = html;
  document.body.prepend(display);
});
</script>
