const music = document.getElementById("bg-music");
const video = document.getElementById("bgVideo");

const sources = [
  "https://www.desktophut.com/files/pXJv4LBHTS-l4d2background01.mp4",
  "https://www.desktophut.com/files/o1TAlp3047-l4d2background02.mp4",
  "https://www.desktophut.com/files/9FhuAosnDa-l4d2background03.mp4",
  "https://www.desktophut.com/files/qjXs3lGU2S-l4d2background04.mp4",
  "https://www.desktophut.com/files/neAC2K9PM3-l4d2background05.mp4"
];

let index = 0;
const v1 = document.getElementById("video1");
const v2 = document.getElementById("video2");

v1.src = sources[index];

setInterval(() => {
  index = (index + 1) % sources.length;

  if (v1.classList.contains("active")) {
    v2.src = sources[index];
    v2.load();
    v2.play();
    v2.classList.add("active");
    v1.classList.remove("active");
  } else {
    v1.src = sources[index];
    v1.load();
    v1.play();
    v1.classList.add("active");
    v2.classList.remove("active");
  }
}, 10000);

function enableMusic() {
  music.muted = false;
  music.play().catch(err => console.log("Autoplay blocked:", err));
  document.removeEventListener("click", enableMusic);
  document.removeEventListener("keydown", enableMusic);
}

document.addEventListener("click", enableMusic);
document.addEventListener("keydown", enableMusic);
