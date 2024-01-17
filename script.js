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

function showVideo(index) {
    videos.forEach((video, idx) => {
        video.style.display = idx === index ? 'block' : 'none';
    });
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    showVideo(currentVideoIndex);
}

function previousVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    showVideo(currentVideoIndex);
}

// Initialize the first video
showVideo(currentVideoIndex);
