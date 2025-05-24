window.addEventListener("DOMContentLoaded", () => {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  // Generate a random session ID
  function generateSessionId() {
    return Date.now().toString() + rand(1000, 9999);
  }

  // Get existing cookies
  let cookies = document.cookie;
  let sessionMatch = cookies.match(/session_id=([^;]+)/);
  let sessionId = sessionMatch ? sessionMatch[1] : generateSessionId();

  // If session_id didn't exist, set it
  if (!sessionMatch) {
    document.cookie = `session_id=${sessionId}; path=/; max-age=31536000; SameSite=Lax`;
  }

  let name;
  try {
    let found = cookies.match(/id\.chatango\.com=([^;]+)/);
    let user = found ? found[1] : null;
    name = user.charAt(0).toUpperCase() + user.slice(1);
  } catch {
    name = "Anon" + rand(1000, 9999);
  }

  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push({
    username: name,
    session_id: sessionId,
    timestamp: new Date().toISOString()
  });

  localStorage.setItem("history", JSON.stringify(history));
  console.log("User history updated:", history);
});
