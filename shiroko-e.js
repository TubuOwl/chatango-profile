(() => {
  document.body.insertAdjacentHTML("afterbegin", `
  <div style="position:fixed; inset:0; overflow:hidden; z-index:-1;">
    <video autoplay muted loop playsinline style="width:100vw; height:100vh; object-fit:cover; object-position:center center;">
      <source src="https://moewalls.com//wp-content/uploads/preview/2024/shiroko-terror-blue-archive-preview.webm" type="video/webm">
    </video>
  </div>
  `);

  const subtitleBox = document.createElement("div");
  subtitleBox.style.position = "fixed";
  subtitleBox.style.bottom = "40px";
  subtitleBox.style.width = "100%";
  subtitleBox.style.textAlign = "center";
  subtitleBox.style.fontSize = "22px";
  subtitleBox.style.fontWeight = "600";
  subtitleBox.style.color = "white";
  subtitleBox.style.textShadow = "0 0 8px black";
  subtitleBox.style.pointerEvents = "none";
  subtitleBox.style.zIndex = "9999";
  subtitleBox.style.fontFamily = "Arial, sans-serif";
  subtitleBox.innerText = "";
  document.body.appendChild(subtitleBox);

  const logoImg = document.querySelector(".logo_div img");
  if (logoImg) {
    logoImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Blue_Archive_EN_logo.svg/2560px-Blue_Archive_EN_logo.svg.png";
    logoImg.style.width = "115px";
    logoImg.style.height = "47px";
    logoImg.style.objectFit = "contain";
    const logoBox = document.querySelector(".logo_div");
    if (logoBox) {
      logoBox.style.width = "115px";
      logoBox.style.height = "47px";
    }
  }

  const playlist = [
    "https://static.wikitide.net/bluearchivewiki/5/51/Shiroko%EF%BC%8ATerror_Season_NewYear.ogg",
    "https://static.wikitide.net/bluearchivewiki/f/f9/Shiroko%EF%BC%8ATerror_LogIn_1.ogg",
    "https://static.wikitide.net/bluearchivewiki/5/5f/Shiroko%EF%BC%8ATerror_LogIn_2.ogg",
    "https://static.wikitide.net/bluearchivewiki/5/52/Shiroko%EF%BC%8ATerror_Lobby_4.ogg",
    "https://static.wikitide.net/bluearchivewiki/7/7f/Shiroko%EF%BC%8ATerror_MemorialLobby_1_1.ogg",
    "https://static.wikitide.net/bluearchivewiki/2/2b/Shiroko%EF%BC%8ATerror_MemorialLobby_1_2.ogg",
    "https://static.wikitide.net/bluearchivewiki/1/1d/Shiroko%EF%BC%8ATerror_Relationship_Up_1.ogg",
    "https://static.wikitide.net/bluearchivewiki/7/7b/Shiroko%EF%BC%8ATerror_MemorialLobby_5.ogg",
    "https://static.wikitide.net/bluearchivewiki/2/28/Shiroko%EF%BC%8ATerror_Cafe_monolog_2.ogg",
    "https://static.wikitide.net/bluearchivewiki/a/a1/Shiroko%EF%BC%8ATerror_Cafe_monolog_3.ogg"
  ];

  const subtitles = [
    {
      jp: "あけましておめでとう、先生。また新しい一年が始まるね。先生の今年の目標は？",
      en: "Happy New Year, Sensei. Another year is starting. What are your goals for this year?",
      id: "Selamat Tahun Baru, Sensei. Tahun baru kembali dimulai. Apa target Sensei tahun ini?"
    },
    {
      jp: "忙しそうだけど…手伝おうか？",
      en: "You look busy... Need some help?",
      id: "Kelihatannya kamu sibuk… mau aku bantu?"
    },
    {
      jp: "ん、待ってたよ、先生。仕事が終わるまで、帰さないから。",
      en: "I've been waiting for you, Sensei. I won't let you go until the job is done.",
      id: "Hm, aku sudah menunggumu, Sensei. Aku tidak akan membiarkanmu pulang sampai pekerjaannya selesai."
    },
    {
      jp: "何でそんなにじーっと見てるの…？ん、睨めっこ対決、受けて立つ。",
      en: "Why are you staring at me for that long...? A staring contest, huh? You're on.",
      id: "Kenapa kamu menatapku terus begitu…? Hm, adu tatapan ya? Aku terima tantangannya."
    },
    {
      jp: "…いつも通りだね、ここは。",
      en: "This place is still the same.",
      id: "…Tempat ini tetap sama seperti biasanya."
    }
    {
      jp: "変わったのは、私だけか。",
      en: "I guess I'm the only one who has changed.",
      id: "Sepertinya hanya aku saja yang berubah."
    },
    {
      jp: "先生、肩……貸して。",
      en: "Sensei... Lend me your shoulder.",
      id: "Sensei… boleh pinjam bahumu?"
    },
    {
      jp: "ん、ありがとう。先生。",
      en: "Mm. Thank you, Sensei.",
      id: "Hm, terima kasih, Sensei."
    },
    {
      jp: "平和だね、ここは。",
      en: "Peaceful here, isn't it?",
      id: "Damai ya, di sini."
    },
    {
      jp: "ん、休憩しようかな。",
      en: "I think I'll take a break.",
      id: "Hm, sepertinya aku akan istirahat sebentar."
    }
  ];

  let index = 0;
  let isPlaying = false;
  const bgm = new Audio();
  bgm.volume = 1.0;

  const showSubtitle = (jp,en,id) => {
    subtitleBox.innerHTML = `${jp}<br><span style="font-size:18px; opacity:.85">${en}</span><br><span style="font-size:18px; opacity:.85">${id}</span>`;
  };

  const clearSubtitle = () => { subtitleBox.innerHTML = ""; };

  const playNext = () => {
    if (!bgm.paused && bgm.currentTime > 0) return;
    if (index >= playlist.length) { isPlaying = false; clearSubtitle(); return; }
    bgm.src = playlist[index];
    bgm.currentTime = 0;
    bgm.play().catch(()=>{});
    const sub = subtitles[index];
    if (sub) showSubtitle(sub.jp,sub.en,sub.id); else clearSubtitle();
    index++;
  };

  bgm.addEventListener("ended", () => {
    if (index < playlist.length) setTimeout(()=>playNext(),5000);
    else { isPlaying = false; clearSubtitle(); }
  });

  document.addEventListener("click", () => {
    if (!isPlaying) { isPlaying = true; index = 0; playNext(); }
  });

  window.onload = () => {
    ["∞","Fox","Blue Archive"].forEach((v,i)=>
      (document.querySelector(`#asltable tr:nth-child(${i+2}) td:nth-child(2) span`)||{}).textContent=v
    );
    const p = document.querySelector("#profilephoto img");
    if (p) p.src="https://media1.tenor.com/m/bLEBFmAZaqQAAAAC/shiroko-dance.gif";
    
    ["dl-banner-300x250", "dl-banner-728x90"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    const audio = new Audio("https://static.wikitide.net/bluearchivewiki/2/2f/Track_228_Mitsukiyo_0k%40eri.ogg");
    audio.volume = 0.2;
    audio.loop = true;
    audio.autoplay = true;
    audio.play().catch(()=>{});
  };
})();
