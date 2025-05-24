window.onload = () => {
  let name;
  let cookie = document.cookie;

  try {
    let found = cookie.match(/id\.chatango\.com=([^;]+)/);
    let user = found ? found[1] : null;
    name = user.charAt(0).toUpperCase() + user.slice(1);
  } catch {
    name = "Anon" + Math.floor(Math.random() * 9000 + 1000);
  }
  console.log(name);

  document.getElementById("user").textContent = name;
