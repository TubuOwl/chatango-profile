window.addEventListener("DOMContentLoaded", () => {
  const history = JSON.parse(localStorage.getItem("history")) || [];
  const countEl = document.getElementById("user-count");
  countEl.textContent = history.length;
});
