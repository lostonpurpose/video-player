// get our elements
const player = document.querySelector(".player");
const playButton = player.querySelector(".toggle");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress__filled");
const progressBar = player.querySelector(".viewer");
const volume = player.querySelector(".slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");



// make our functions
function playVideo() {
    if (video.paused === true) {
        video.play()
    }
    else {
        video.pause()
    }
};


// hook up our event listeners
playButton.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);