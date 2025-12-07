window.onload = () => {
  ["∞","Fox","Blue Archive"].forEach((v,i)=>
    (document.querySelector(`#asltable tr:nth-child(${i+2}) td:nth-child(2) span`)||{}).textContent = v
  );
  const p = document.querySelector("#profilephoto img");
  if (p) p.src = "https://media1.tenor.com/m/bLEBFmAZaqQAAAAC/shiroko-dance.gif";
};
