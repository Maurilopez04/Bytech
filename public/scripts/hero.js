
document.addEventListener('DOMContentLoaded', () => {
    const bgVideo = document.getElementById('myVideo');
    window.addEventListener('scroll', function() {
        var value = 1 + window.scrollY / -600;
        bgVideo.style.opacity = Math.max(value, 0);
    });
});