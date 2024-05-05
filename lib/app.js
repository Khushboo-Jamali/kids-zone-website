const video = document.querySelector(".card-one video");
video.addEventListener("mouseenter", function () {
  video.play();
  // hoverText.classList.remove("active");
});
video.addEventListener("mouseleave", function () {
  video.pause();
  // hoverText.classList.add("active");
});

const Video = document.querySelector(".card-three video");
Video.addEventListener("mouseenter", () => {
  Video.play();
});
Video.addEventListener("mouseleave", () => {
  Video.pause();
});

const VIdeo = document.querySelector(".card-two video");
VIdeo.addEventListener("mouseenter", () => {
  VIdeo.play();
});
VIdeo.addEventListener("mouseleave", () => {
  VIdeo.pause();
});
