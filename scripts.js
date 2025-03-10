// get our elements
player = document.querySelector(".player");
playButton = document.querySelector(".player__button");
videoPlaying = document.querySelector(".player__video");



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