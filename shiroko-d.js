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
    "https://static.wikitide.net/bluearchivewiki/5/50/Shiroko_Season_Xmas.ogg",
    "https://static.wikitide.net/bluearchivewiki/3/34/Shiroko_LogIn_2.ogg",
    "https://static.wikitide.net/bluearchivewiki/b/b5/Shiroko_Lobby_1.ogg",
    "https://static.wikitide.net/bluearchivewiki/2/2f/Shiroko_Lobby_2.ogg",
    "https://static.wikitide.net/bluearchivewiki/transcoded/0/00/Shiroko_Relationship_Up_1.ogg/Shiroko_Relationship_Up_1.ogg.mp3",
    "https://static.wikitide.net/bluearchivewiki/transcoded/9/91/Shiroko_Relationship_Up_3.ogg/Shiroko_Relationship_Up_3.ogg.mp3",
    "https://static.wikitide.net/bluearchivewiki/transcoded/9/9c/Shiroko_Relationship_Up_4.ogg/Shiroko_Relationship_Up_4.ogg.mp3",
    "https://static.wikitide.net/bluearchivewiki/transcoded/5/55/Shiroko_Growup_2.ogg/Shiroko_Growup_2.ogg.mp3"
  ];

  const subtitles = [
    {jp:"メリークリスマス。今日は特別な日なんだって。どういう風に特別なのか わからないけど…先生、教えてくれない？。",en:"Merry Christmas. I've heard that today is a special day. Though, I don't know why it's special...Will you teach me, Sensei?",id:"Selamat Hari Natal, aku dengar hari ini hari yang istimewa, meski aku tidak tahu kenapa… maukah Sensei mengajariku?"},
    {jp:"ようこそ、先生。今日もよろしく。",en:"Welcome, Sensei. It's good to see you again.",id:"Selamat datang, Sensei. Senang bertemu denganmu lagi."},
    {jp:"先生を手伝うために ここにいるよ。",en:"I'm here to help, Sensei.",id:"Aku di sini untuk membantumu, Sensei."},
    {jp:"何でそんなにじーっと見てるの？",en:"Why is Sensei staring at me like that?",id:"Kenapa Sensei menatapku seperti itu?"},
    {jp:"おかしい。ドキドキが止まらない。",en:"It's strange... My heart is pounding.",id:"Aneh… hatiku berdebar kencang."},
    {jp:"先生。教えて。私の知らない、色んなことを、もっと……",en:"Sensei, tell me more things I don't know.",id:"Sensei, ceritakan lebih banyak hal yang belum kuketahui."},
    {jp:"先生に会ったその瞬間から……ここは私にとってもっと特別な場所になった。",en:"From that moment I met Sensei, this place became more special to me.",id:"Sejak saat aku bertemu Sensei, tempat ini menjadi lebih istimewa bagiku."},
    {jp:"ありがとう、先生。",en:"Thank you, Sensei.",id:"Terima kasih, Sensei."}
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
