const friends = [
  ["a/p/aparecera", "aparecera"],

  ["b/a/bacot", "bacot"],
  ["e/g/eg", "eg"],
  ["a/g/agung", "Agung"],
  ["g/u/gustixa", "gustixa"],
  ["k/e/kezu", "kezu"],
  ["m/a/macha", "macha"],
  ["v/i/vianbot", "vianbot"],
  ["u/c/ucup", "Ucup"],
  ["a/g/agunq", "agunq"],

  ["t/u/tubu", "tubu"],
  ["s/n/snowbloomspruce", "snowbloomspruce"],
  ["t/a/taihen691", "taihen691"],
  ["x/p/xpe", "xpe"],
  ["a/q/aqunq", "aqunq"],
  ["n/a/nanbas", "Nanbas"],
  ["t/i/tidakterdaftar", "Tidakterdaftar"],
  ["n/e/newalive", "newalive"],
  ["k/a/kanna", "kanna"],
  ["k/r/krasiaannerose", "krasiaannerose"],
  ["a/n/anzenasan", "anzenasan"],
  ["r/y/ryunzeyxz", "ryunzeyxz"]
];

// ==== hierarchy ====
const OWNER = ["aparecera"];
const MODS = ["bacot", "eg", "agung", "gustixa", "kezu", "macha", "vianbot", "ucup", "agunq"];

const OWNER_ICON_SVG = `
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100%" viewBox="0 0 210 70" preserveAspectRatio="xMinYMin">
    <rect x="0" y="0" width="100%" height="100%" fill="#1a1a1a"></rect>
    <path d="M10 10 L 40 10  40 20  20 20  20 30  40 30  40 60  10 60  10 50  30 50  30 40  10 40 Z" fill="#ffd76a" stroke="none"></path>
    <path d="M50 10 L 80 10  80 20  70 20  70 60  60 60  60 20  50 20 Z" fill="#ffd76a" stroke="none"></path>
    <path d="M90 10 L 120 10 120 60  110 60  110 50  100 50 100 60 90 60 Z M100 20 L 100 40  110 40  110 20 Z" fill="#ffd76a" stroke="none"></path>
    <path d="M130 10 L 160 10  160 20 140 20  140 30  150 30  150 40  140 40  140 60  130 60 Z" fill="#ffd76a" stroke="none"></path>
    <path d="M170 10 L 200 10  200 20 180 20  180 30  190 30  190 40  180 40  180 60  170 60 Z" fill="#ffd76a" stroke="none"></path>
  </svg>`;

const MOD_ICON_SVG = `
  <svg width="100%" height="100%" viewBox="0 0 100 100">
    <path stroke="none" fill="#FFCC00" d="M86.5 70.35 Q75 89.75 50 100 25 89.75 13.5 70.35 1 49.2 0 10.4 17.55 16.1 27.95 12.75 38.35 9.4 50 0 61.65 9.4 72.05 12.75 82.45 16.1 100 10.4 99 49.2 86.5 70.35"></path>
  </svg>`;

function roleOf(name){
  const n = name.toLowerCase();
  if (OWNER.includes(n)) return "owner";
  if (MODS.includes(n)) return "mod";
  return "member";
}

function badgeHTML(role){
  if (role === "owner"){
    return `<span class="role-badge badge-owner">
      <span class="msg_badge"><span class="icon mod-icon">${OWNER_ICON_SVG}</span></span>
      Owner
    </span>`;
  }
  if (role === "mod"){
    return `<span class="role-badge badge-mod">
      <span class="msg_badge"><span class="icon mod-icon">${MOD_ICON_SVG}</span></span>
      Mod
    </span>`;
  }
  return `<span class="role-badge badge-member">Member</span>`;
}

// render friend grid
const container = document.getElementById("friendList");
friends.forEach(([path, name], i) => {
  const role = roleOf(name);
  const div = document.createElement("div");
  div.className = `friend role-${role}`;
  div.style.animationDelay = (i * 0.04) + "s";
  div.innerHTML = `
    <div class="avatar-ring">
      <img src="https://ust.chatango.com/profileimg/${path}/thumb_m.jpg"
           alt="${name}"
           loading="lazy"
           onerror="this.onerror=null;this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%2280%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23eaf6ff%22/><text x=%2250%25%22 y=%2256%25%22 font-size=%2230%22 text-anchor=%22middle%22 fill=%22%234fb3e8%22>?</text></svg>';">
    </div>
    <span class="name">${name}</span>
    ${badgeHTML(role)}
  `;
  container.appendChild(div);
});
document.getElementById("friendCount").textContent = friends.length;
