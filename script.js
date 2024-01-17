// script.js

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let currentVideoIndex = 0;
const videos = document.querySelectorAll('.video-wrapper iframe');
const videoWrapper = document.querySelector('.video-wrapper');

function stopAllVideos() {
    videos.forEach(video => {
        const src = video.src;
        video.src = src; // Reset the src to stop the video
    });
}

function updateVideoPosition() {
    const videoWidth = videos[0].offsetWidth;
    const newTransformValue = -currentVideoIndex * (videoWidth + 20); // 20 is the margin-right value
    videoWrapper.style.transform = `translateX(${newTransformValue}px)`;
}

function nextVideo() {
    stopAllVideos();
    if (currentVideoIndex < videos.length - 1) {
        currentVideoIndex++;
    } else {
        currentVideoIndex = 0; // Go to the first video if currently at the last
    }
    updateVideoPosition();
}

function previousVideo() {
    stopAllVideos();
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
    } else {
        currentVideoIndex = videos.length - 1; // Go to the last video if currently at the first
    }
    updateVideoPosition();
}

// Initialize the carousel
updateVideoPosition();
