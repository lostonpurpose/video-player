// get our elements
const player = document.querySelector(".player");
const playButton = player.querySelector(".toggle");
const videoPlaying = player.querySelector(".viewer");
const progress = player.querySelector(".progress__filled");
const progressBar = player.querySelector(".viewer");
const volume = player.querySelector(".slider");
const skipButtons = player.querySelectorAll(".[data-skip]");
const ranges = player.querySelectorAll(".player__slider");



// make our functions
function playVideo() {
    if (videoPlaying.paused === true) {
        videoPlaying.play()
    }
    else {
        videoPlaying.pause()
    }
};


// hook up our event listeners
playButton.addEventListener('click', playVideo);