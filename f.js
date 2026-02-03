window.addEventListener("DOMContentLoaded", async () => {

  function rand(min,max){ return Math.floor(Math.random()*(max-min))+min; }

  function getUser(){
    try{
      let f=document.cookie.match(/id\.chatango\.com=([^;]+)/);
      let u=f?f[1]:null;
      return u?u.charAt(0).toUpperCase()+u.slice(1):null;
    }catch{ return null; }
  }

  function canvasFP(){
    const c=document.createElement("canvas");
    const ctx=c.getContext("2d");
    ctx.fillText("fp",2,2);
    return c.toDataURL();
  }

  async function hash(str){
    const buf=new TextEncoder().encode(str);
    const h=await crypto.subtle.digest("SHA-256",buf);
    return [...new Uint8Array(h)].map(b=>b.toString(16).padStart(2,"0")).join("");
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

  // tampilkan dulu
  document.getElementById("out").innerHTML =
    `<b>User:</b> ${username}<br><b>DeviceID:</b><br><textarea style="width:90%;height:70px">${deviceID}</textarea><br><br>Checking...`;

  // kirim ke server
  fetch("https://device-check-eight.vercel.app/api/check", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ name: username, id: deviceID })
  })
  .then(r=>r.json())
  .then(d=>{
    document.getElementById("out").innerHTML += d.allowed
      ? "<h3 style='color:green'>✅ WHITELISTED</h3>"
      : "<h3 style='color:red'>⛔ NOT REGISTERED</h3>";
  })
  .catch(e=>{
    document.getElementById("out").innerHTML += "<br>❌ Server error";
  });

});
