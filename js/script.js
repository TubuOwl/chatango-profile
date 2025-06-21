
/* ################################################################ */
/* # YOUTUBE WINDOW ################################################ */
/* ################################################################ */

let angle = 0;

function hideWindow() {
  const ytWindow = document.getElementById("ytWindow");
  const showBtn = document.getElementById("showBtn");
  ytWindow.style.display = "none";
  showBtn.style.display = "block";
}

function showWindow() {
  closeAllWindows();
  const ytWindow = document.getElementById("ytWindow");
  const showBtn = document.getElementById("showBtn");
  ytWindow.style.display = "block";
  showBtn.style.display = "none";
}

function rotateWindow() {
  const ytWindow = document.getElementById("ytWindow");
  angle = (angle + 90) % 360;
  ytWindow.style.transform = `rotate(${angle}deg)`;
}

async function changeURL() {
  const ytInput = document.getElementById("ytInput");
  const ytFrame = document.getElementById("ytFrame");
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

/* ################################################################ */
/* # CHATROOM / CHATBOX ########################################### */
/* ################################################################ */

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
  const chatWindow = document.getElementById("chatWindow");
  const showChatBtn = document.getElementById("showChatBtn");
  chatWindow.style.display = "none";
  showChatBtn.style.display = "block";
}

function showChatWindow() {
  closeAllWindows();
  const chatWindow = document.getElementById("chatWindow");
  const showChatBtn = document.getElementById("showChatBtn");
  chatWindow.style.display = "block";
  showChatBtn.style.display = "none";
}

function addChat() {
  const chatInput = document.getElementById("chatInput");
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

/* ################################################################ */
/* # FRIEND LIST ################################################## */
/* ################################################################ */

function hideFriendWindow() {
  const friendWindow = document.getElementById("friendWindow");
  const showFriendBtn = document.getElementById("showFriendBtn");
  friendWindow.style.display = "none";
  showFriendBtn.style.display = "block";
}

function showFriendWindow() {
  closeAllWindows();
  const friendWindow = document.getElementById("friendWindow");
  const showFriendBtn = document.getElementById("showFriendBtn");
  friendWindow.style.display = "block";
  showFriendBtn.style.display = "none";
}

/* ################################################################ */
/* # AUTO-CLOSE WINDOWS SYSTEM #################################### */
/* ################################################################ */

function closeAllWindows() {
  // Close YouTube window
  const ytWindow = document.getElementById("ytWindow");
  const showBtn = document.getElementById("showBtn");
  ytWindow.style.display = "none";
  showBtn.style.display = "block";
  
  // Close Chat window
  const chatWindow = document.getElementById("chatWindow");
  const showChatBtn = document.getElementById("showChatBtn");
  chatWindow.style.display = "none";
  showChatBtn.style.display = "block";
  
  // Close Friend window
  const friendWindow = document.getElementById("friendWindow");
  const showFriendBtn = document.getElementById("showFriendBtn");
  friendWindow.style.display = "none";
  showFriendBtn.style.display = "block";
  
  // Close Blackjack window
  blackjackWindow.style.display = "none";
  showBlackjackBtn.style.display = "block";
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

/* ################################################################ */
/* # BLACKJACK #################################################### */
/* ################################################################ */

const blackjackWindow = document.getElementById("blackjackWindow");
const showBlackjackBtn = document.getElementById("showBlackjackBtn");
const bgMusic = document.getElementById("bgMusic");

function hideBlackjackWindow() {
  blackjackWindow.style.display = "none";
  showBlackjackBtn.style.display = "block";
  bgMusic.pause();
  bgMusic.currentTime = 0;
}

function showBlackjackWindow() {
  closeAllWindows();
  blackjackWindow.style.display = "block";
  showBlackjackBtn.style.display = "none";
  bgMusic.play().catch(err => {
    console.warn("Autoplay failed:", err);
  });
}
