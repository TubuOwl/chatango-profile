const friends = [
    ["t/u/tubu", "Tubu"],
    ["a/g/agung", "Agung"],
    ["c/h/cheese", "Cheese"],
    ["e/g/eg", "Eg"],
    ["v/f/vf", "Vf"],
    ["k/i/kingbael", "Kingbael"],
    ["u/l/ulnuh", "Ulnuh"],
    ["p/a/patrick", "Patrick"],
    ["l/u/lukimukti", "Lukimukti"]
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
