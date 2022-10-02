const video = document.querySelector(".video"),
  playBtn = document.querySelector(".controls_play"),
  stopBtn = document.querySelector(".controls_stop"),
  playBtnImg = document.querySelector(".play_btn"),
  progress = document.querySelector(".progress"),
  time = document.querySelector(".controls_time");

// play pause
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
playBtn.addEventListener("click", toggleVideoStatus);
