window.addEventListener("DOMContentLoaded", async () => {

  function rand(min, max){
    return Math.floor(Math.random()*(max-min))+min;
  }

  function getUser(){
    try{
      let found = document.cookie.match(/id\.chatango\.com=([^;]+)/);
      let user = found ? found[1] : null;
      return user ? user.charAt(0).toUpperCase()+user.slice(1) : null;
    }catch{
      return null;
    }
  }

  function canvasFP(){
    const c=document.createElement("canvas");
    const ctx=c.getContext("2d");
    ctx.font="16px Arial";
    ctx.fillText("fp",2,2);
    return c.toDataURL();
  }

  async function hash(str){
    const buf=new TextEncoder().encode(str);
    const hash=await crypto.subtle.digest("SHA-256",buf);
    return [...new Uint8Array(hash)]
      .map(b=>b.toString(16).padStart(2,"0"))
      .join("");
  }

  const username = getUser() || "Anon"+rand(1000,9999);

  const rawFP =
    navigator.userAgent +
    navigator.platform +
    navigator.hardwareConcurrency +
    screen.width +
    screen.height +
    canvasFP();

  const deviceID = await hash(rawFP);

  document.body.innerHTML = `
    <h2>Device Info</h2>
    <b>Username:</b> ${username}<br>
    <b>Device ID:</b><br>
    <textarea style="width:90%;height:80px">${deviceID}</textarea>
  `;
});
