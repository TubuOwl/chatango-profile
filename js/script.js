const ytWindow = document.getElementById("ytWindow");
const showBtn = document.getElementById("showBtn");
const ytInput = document.getElementById("ytInput");
const ytFrame = document.getElementById("ytFrame");

const chatWindow = document.getElementById("chatWindow");
const showChatBtn = document.getElementById("showChatBtn");
const chatInput = document.getElementById("chatInput");

const friendWindow = document.getElementById("friendWindow");
const showFriendBtn = document.getElementById("showFriendBtn");

let angle = 0;

const toggleDisplay = (el, showBtnEl) => {
  if(el.style.display === "none" || !el.style.display) {
    el.style.display = "block";
    if(showBtnEl) showBtnEl.style.display = "none";
  } else {
    el.style.display = "none";
    if(showBtnEl) showBtnEl.style.display = "block";
  }
};

const hideWindow = () => toggleDisplay(ytWindow, showBtn);
const showWindow = () => toggleDisplay(ytWindow, showBtn);

const rotateWindow = () => {
  angle = (angle + 90) % 360;
  ytWindow.style.transform = `rotate(${angle}deg)`;
};

async function changeURL() {
  const query = ytInput.value.trim();
  if(!query) return alert("Masukkan kata kunci pencarian YouTube.");
  try {
    const res = await fetch(`https://toxicdevilapi.vercel.app/search/youtube?query=${encodeURIComponent(query)}`);
    const data = await res.json();
    if(data?.result?.length > 0) {
      ytFrame.src = `https://www.youtube.com/embed/${data.result[0].id}`;
    } else alert("Video tidak ditemukan.");
  } catch {
    alert("Gagal memuat video dari API.");
  }
}

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
  const parts = url.split("?");
  if(parts.length < 2) return;
  
  parts[1].split(",").forEach((entry, i) => {
    let chatname = entry, settings = defaultSettings;
    if(entry.includes("!")) [chatname] = entry.split("!"), settings = graySettings;
    else if(entry.includes("$")) [chatname] = entry.split("$"), settings = blackSettings;
    chatWidgets.appendChild(createChatElement(chatname, settings, i));
  });
}

function addChat() {
  const input = chatInput.value.trim();
  if(!input) return alert("Masukkan nama chatroom Chatango.");
  const chatWidgets = document.getElementById("chatWidgets");
  const exists = Array.from(chatWidgets.querySelectorAll("script")).some(s => {
    try {
      return JSON.parse(s.textContent).handle.toLowerCase() === input.toLowerCase();
    } catch {
      return false;
    }
  });
  if(exists) return alert("Chatroom sudah ada.");
  chatWidgets.appendChild(createChatElement(input, defaultSettings, Date.now()));
  chatInput.value = "";
}

function hideChatWindow() {
  toggleDisplay(chatWindow, showChatBtn);
}
function showChatWindow() {
  toggleDisplay(chatWindow, showChatBtn);
}

function hideFriendWindow() {
  toggleDisplay(friendWindow, showFriendBtn);
}
function showFriendWindow() {
  toggleDisplay(friendWindow, showFriendBtn);
}

window.onload = () => {
  initChats();
  ytWindow.style.display = "none";
  chatWindow.style.display = "none";
  friendWindow.style.display = "none";
  showBtn.style.display = "block";
};
