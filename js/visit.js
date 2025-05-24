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
});
