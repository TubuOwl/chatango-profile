const friends = [
  ["1/e/1ev", "1ev"],
  ["1/x/1xc", "1xc"],
  ["a/d/adit", "Adit"],
  ["a/g/agung", "Agung"],
  ["a/l/alina", "Alina"],
  ["b/e/betrayer", "Betrayer"],
  ["b/o/bounnnw", "Bounnnw"],
  ["c/h/cheese", "Cheese"],
  ["d/a/daniel", "Daniel"],
  ["d/z/dzikriyoshikageliebe", "Dzikriyoshikageliebe"],
  ["f/a/fath", "Fath"],
  ["h/i/hikimarun", "Hikimarun"],
  ["k/i/kitainginlari", "Kitainginlari"],
  ["n/a/nanbas", "Nanbas"],
  ["o/r/orekisannn", "Orekisannn"],
  ["p/a/patrick", "Patrick"],
  ["t/i/tidakterdaftar", "Tidakterdaftar"],
  ["u/c/ucup", "Ucup"],
  ["u/l/ulnuh", "Ulnuh"],
  ["v/f/vf", "Vf"],
  ["z/s/zs", "Zs"]
];
  const container = document.getElementById("friendList");
  friends.forEach(([path, name]) => {
    const div = document.createElement("div");
    div.className = "friend";
    div.innerHTML = `<img src="https://ust.chatango.com/profileimg/${path}/thumb_m.jpg"><span>${name}</span>`;
    container.appendChild(div);
  });
function showFriendWindow() {
    document.getElementById("friendWindow").style.display = "block";
    document.getElementById("openBtn").style.display = "none";
}
function hideFriendWindow() {
    document.getElementById("friendWindow").style.display = "none";
    document.getElementById("openBtn").style.display = "block";
}
