window.addEventListener("DOMContentLoaded", async () => {
  function rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getUsernameFromCookie() {
    const match = document.cookie.match(/id\.chatango\.com=([^;]+)/);
    if (match && match[1]) {
      const user = match[1];
      return user.charAt(0).toUpperCase() + user.slice(1);
    }
    return "Anon" + rand(1000, 9999);
  }

  const username = getUsernameFromCookie();
  const historyEntry = {
    username,
    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch("https://chatango-profile.vercel.app/api/pushHistory.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(historyEntry)
    });

    if (!response.ok) throw new Error("Failed to save history");
    const result = await response.json();
    console.log("History pushed successfully:", result);
  } catch (error) {
    console.error("Error pushing history:", error);
  }
});
