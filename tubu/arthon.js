const music = document.getElementById("bg-music");
const video = document.getElementById("bgVideo");

const video = document.getElementById("bgVideo");
const sources = [
      "https://www.desktophut.com/files/pXJv4LBHTS-l4d2background01.mp4",
      "https://www.desktophut.com/files/o1TAlp3047-l4d2background02.mp4",
      "https://www.desktophut.com/files/9FhuAosnDa-l4d2background03.mp4",
      "https://www.desktophut.com/files/qjXs3lGU2S-l4d2background04.mp4",
      "https://www.desktophut.com/files/neAC2K9PM3-l4d2background05.mp4"
    ];
let index = 0;
setInterval(() => {
  video.classList.add("fade-out");
  setTimeout(() => {
    index = (index + 1) % sources.length;
    video.src = sources[index];
    video.play();
    video.classList.remove("fade-out");
  }, 0);
}, 10000);
function enableMusic() {
  music.muted = false;
  music.play().catch(err => console.log("Autoplay blocked:", err));
  document.removeEventListener("click", enableMusic);
  document.removeEventListener("keydown", enableMusic);
}

document.addEventListener("click", enableMusic);
document.addEventListener("keydown", enableMusic);
