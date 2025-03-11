// get our elements
const player = document.querySelector(".player");
const playButton = player.querySelector(".toggle");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const volume = player.querySelector(".slider");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const mute = player.querySelector(".mute");



// make our functions
function playVideo(e) {
    if (e.type === 'keyup' && e.key === ' ' || e.type === 'click') {

    if (video.paused === true) {
        video.play()    }
    else {
        video.pause()
    }
}
};

function togglePlayButton() {
    this.paused ? playButton.innerText = "►" : playButton.innerText = "❚❚"
};

function skip() {
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
    video[this.name] = this.value * 2
    video[this.name] === 0 ? mute.innerText = "🔇" : mute.innerText = "🔊"
};

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`
};

function scrub(e) {
    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration;
};


// hook up our event listeners
playButton.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);
document.addEventListener('keyup', playVideo);
video.addEventListener('play', togglePlayButton);
video.addEventListener('pause', togglePlayButton);


skipButtons.forEach(button => {
    button.addEventListener('click', skip)
});

ranges.forEach(item => {
    item.addEventListener('change', handleRangeUpdate)
});

video.addEventListener('timeupdate', handleProgress);
progress.addEventListener('click', scrub);
