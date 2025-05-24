window.addEventListener("DOMContentLoaded", () => {
  const historyList = document.getElementById("history-list");
  const history = JSON.parse(localStorage.getItem("history")) || [];

  history.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.username} - ${new Date(entry.timestamp).toLocaleString()}`;
    historyList.appendChild(li);
  });
});
