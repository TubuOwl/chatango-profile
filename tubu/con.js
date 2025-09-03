const music = document.getElementById("bg-music");
function enableMusic() {
music.muted = false;
music.play().catch(err => console.log("Autoplay blocked:", err));
document.removeEventListener("click", enableMusic);
document.removeEventListener("keydown", enableMusic);
}
document.addEventListener("click", enableMusic);
document.addEventListener("keydown", enableMusic);
