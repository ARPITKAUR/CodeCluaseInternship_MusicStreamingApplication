const audio = document.querySelector('audio');
const playPauseButton = document.querySelector('.play-pause');

playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
});

const volumeInput = document.querySelector('.volume');
volumeInput.addEventListener('input', () => {
    audio.volume = volumeInput.value / 100;
});

audio.addEventListener('ended', () => {
    playPauseButton.textContent = 'Play';
});
