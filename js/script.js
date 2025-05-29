let angle = 0;

function hideWindow() {
  ytWindow.style.display = "none";
  showBtn.style.display = "block";
}

function showWindow() {
  ytWindow.style.display = "block";
  showBtn.style.display = "none";
}

function rotateWindow() {
  angle = (angle + 90) % 360;
  ytWindow.style.transform = `rotate(${angle}deg)`;
}

async function changeURL() {
  const input = ytInput.value.trim();
  if (!input) return alert("Masukkan kata kunci pencarian YouTube.");
  try {
    const res = await fetch(`https://toxicdevilapi.vercel.app/search/youtube?query=${encodeURIComponent(input)}`);
    const data = await res.json();
    if (data?.result?.length > 0) {
      ytFrame.src = `https://www.youtube.com/embed/${data.result[0].id}`;
    } else {
      alert("Video tidak ditemukan.");
    }
  } catch (error) {
    alert("Gagal memuat video dari API.");
  }
}

const defaultSettings = {
  a: "cc0000", b: 100, c: "FFFFFF", d: "FFFFFF", k: "cc0000", l: "cc0000",
  m: "cc0000", n: "FFFFFF", q: "cc0000", r: 100, fwtickm: 1
};
const graySettings = { ...defaultSettings, a: "404040", c: "c0c0c0", d: "c0c0c0", k: "990000" };
const blackSettings = { ...defaultSettings, a: "000000", c: "ffffff", d: "ffffff" };

function createChatElement(chatname, settings, idSuffix) {
  const div = document.createElement("div");
  div.className = "chat-box";

  const closeBtn = document.createElement("button");
  closeBtn.className = "close-btn";
  closeBtn.title = "Hapus chat";
  closeBtn.innerHTML = "×";
  closeBtn.onclick = () => div.remove();
  div.appendChild(closeBtn);

  const script = document.createElement("script");
  script.id = "cid" + String(idSuffix).padStart(19, '0');
  script.setAttribute("data-cfasync", "false");
  script.async = true;
  script.src = "//st.chatango.com/js/gz/emb.js";
  script.style.width = "250px";
  script.style.height = "350px";
  script.textContent = JSON.stringify({
    handle: chatname,
    arch: "js",
    styles: settings
  });

  div.appendChild(script);
  return div;
}

function initChats() {
  const url = window.location.href;
  const chatWidgets = document.getElementById("chatWidgets");
  const rawData = url.split("?");
  if (rawData.length < 2) return;

  const chatData = rawData[1].split(",");
  chatData.forEach((entry, i) => {
    let chatname = entry, settings = defaultSettings;
    if (entry.includes("!")) [chatname] = entry.split("!"), settings = graySettings;
    else if (entry.includes("$")) [chatname] = entry.split("$"), settings = blackSettings;
    const chatEl = createChatElement(chatname, settings, i);
    chatWidgets.appendChild(chatEl);
  });
}

window.onload = initChats;

function hideChatWindow() {
  chatWindow.style.display = "none";
  showChatBtn.style.display = "block";
}

function showChatWindow() {
  chatWindow.style.display = "block";
  showChatBtn.style.display = "none";
}

function addChat() {
  const input = chatInput.value.trim();
  if (!input) return alert("Masukkan nama chatroom Chatango.");
  const chatWidgets = document.getElementById("chatWidgets");
  const exists = Array.from(chatWidgets.querySelectorAll("script")).some(s => {
    try {
      const cfg = JSON.parse(s.textContent);
      return cfg.handle.toLowerCase() === input.toLowerCase();
    } catch {
      return false;
    }
  });
  if (exists) return alert("Chatroom sudah ada.");
  chatWidgets.appendChild(createChatElement(input, defaultSettings, Date.now()));
  chatInput.value = "";
}

function hideFriendWindow() {
  friendWindow.style.display = "none";
  showFriendBtn.style.display = "block";
}

function showFriendWindow() {
  friendWindow.style.display = "block";
  showFriendBtn.style.display = "none";
}
function () {
  initChats();
  document.getElementById("ytWindow").style.display = "none";
  document.getElementById("chatWindow").style.display = "none";
};
