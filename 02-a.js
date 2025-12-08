(() => {
  document.body.insertAdjacentHTML("afterbegin", `
  <div style="position:fixed; inset:0; overflow:hidden; z-index:-1;">
    <video autoplay muted loop playsinline style="width:100vw; height:100vh; object-fit:cover; object-position:center center;">
      <source src="https://moewalls.com/wp-content/uploads/preview/2023/efce1f806df1e429b0f75b37001a862ee1807ef8.webm" type="video/webm">
    </video>
  </div>
  `);

  const logoImg = document.querySelector(".logo_div img");
  if (logoImg) {
    logoImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Darling_in_the_Franxx_logo.svg/1200px-Darling_in_the_Franxx_logo.svg.png";
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
    ["19","F","Darling"].forEach((v,i)=>
      (document.querySelector(`#asltable tr:nth-child(${i+2}) td:nth-child(2) span`)||{}).textContent=v
    );

    const p = document.querySelector("#profilephoto img");
    if (p) p.src="https://media.tenor.com/11oLYghHHuwAAAAj/zero-two.gif";

    ["dl-banner-300x250", "dl-banner-728x90"].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
  };

  const audio = new Audio("https://fine.sunproxy.net/file/V29IWHV2aW9vd2pxQk9uR2Z4TzdpRlVLbTd5YnlRNmtxbkVKKzJ0dU13SVZUQXp5OWk3NUpacjhlM09vQ2lqVlJHcyt3WFhZRHRlWVAxWU5BREtZOE5Vd0VJNjM2UFB5QWtMU1VCa2twUWs9/2_Phut_Hon_-_2_Phut_Hon_-_Phao_Kaiz_Remix_Mp3Fly_(SkySound.cc).mp3");
  audio.autoplay = true;
  audio.volume = 1;
  audio.play().catch(()=>{});

})();
