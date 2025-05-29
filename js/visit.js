function getCookies() {
  const pairs = document.cookie.split(";");
  const cookies = {};
  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    cookies[pair[0].trim()] = decodeURIComponent(pair.slice(1).join('='));
  }
  return cookies;
}

let lastCookies = {};

function checkCookies() {
  const currentCookies = getCookies();

  const changed = JSON.stringify(currentCookies) !== JSON.stringify(lastCookies);

  if (changed) {
    console.log("Ada perubahan cookie:", currentCookies);
    lastCookies = currentCookies;
  }
}

lastCookies = getCookies();

setInterval(checkCookies, 5000);
