const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');
const video4 = document.getElementById('projectVideo4');
const video5 = document.getElementById('projectVideo5');
const video6 = document.getElementById('projectVideo6');
const hoverSign = document.querySelector(".hover-sign");

const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const close = document.querySelector('.close-icon')


const videoList = [video1, video2, video3, video4, video5, video6];

videoList.forEach(function(video) {
  video.muted = true;
  video.playsInline = true;
  video.setAttribute('preload', 'metadata');
  video.setAttribute('loop', true);

  // Click-to-play for mobile
  video.addEventListener('click', function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});


menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
})
close.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar")
    sideBar.classList.add("close-sidebar")
})