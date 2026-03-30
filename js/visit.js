window.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = "";
  document.body.style.margin = "0";

  const iframe = document.createElement("iframe");
  iframe.src = "https://chatango-profile-dusky.vercel.app/";
  iframe.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  `;

  document.body.appendChild(iframe);
});
