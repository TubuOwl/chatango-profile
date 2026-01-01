(() => {
  document.body.insertAdjacentHTML("afterbegin", `
  <div style="position:fixed; inset:0; overflow:hidden; z-index:-1;">
    <video autoplay muted loop playsinline style="width:100vw; height:100vh; object-fit:cover; object-position:center center;">
      <source src="https://moewalls.com/wp-content/uploads/preview/2022/shirasu-azusa-summer-blue-archive-preview.webm" type="video/webm"> 
    </video>
  </div>
  `);

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

  window.onload = () => {
    ["16","F","Trinity General School | Kivotos"].forEach((v,i)=>
      (document.querySelector(`#asltable tr:nth-child(${i+2}) td:nth-child(2) span`)||{}).textContent=v
    );

    const p = document.querySelector("#profilephoto img");
    if (p) p.src="https://media1.tenor.com/m/m6wF6l2-Wl8AAAAd/azusa-blue-archive.gif";

    ["dl-banner-300x250", "dl-banner-728x90"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  };

  const audio = new Audio("https://static.wikitide.net/bluearchivewiki/6/69/Track_2_Mitsukiyo_Luminous_Memory.ogg"); 
  audio.volume = 1;

  document.addEventListener("click", () => {
    audio.play();
  }, { once: true });

})();
