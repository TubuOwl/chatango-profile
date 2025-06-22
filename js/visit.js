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
  let timestamp = new Date().toISOString();
  history.push({ username: name, timestamp });

  localStorage.setItem("history", JSON.stringify(history));
  console.log("User history updated:", history);

  // Create a display element
  const display = document.createElement("div");
  display.style.padding = "10px";
  display.style.background = "#f0f0f0";
  display.style.border = "1px solid #ccc";
  display.style.margin = "10px";
  display.style.fontFamily = "Arial, sans-serif";
  display.style.whiteSpace = "pre-wrap";

  // Format and set the content
  let text = `👋 Hello, ${name}!\nYour visit has been recorded.\n\n📜 Visit History:\n`;
  history.slice(-5).forEach((entry, index) => {
    text += `${index + 1}. ${entry.username} at ${entry.timestamp}\n`;
  });

  display.textContent = text;

  // Inject it into the body
  document.body.prepend(display);
});
