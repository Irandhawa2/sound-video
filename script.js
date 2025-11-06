const video = document.getElementById('myVideo');
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');

video.muted = true;
video.loop = true;
audio.loop = true;

playBtn.addEventListener('click', () => {
  video.play();
  audio.play();
});

pauseBtn.addEventListener('click', () => {
  video.pause();
  audio.pause();
});
