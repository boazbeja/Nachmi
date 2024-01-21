const musicBox = document.getElementById('music-box-img');
const oldMan = document.getElementById('old-man-img');
const music = new Audio('בצל ירוק - ונצואלה.mp3');
document.getElementById('play-btn').addEventListener('click', function() {
    music.play();
    oldMan.style.bottom = '5%'; // Makes the old man "stand up"
    musicBox.style.transform = 'scale(1.1)'; // Enlarges the music box
});

document.getElementById('pause-btn').addEventListener('click', function() {
    music.pause();
    oldMan.style.bottom = '0'; // Makes the old man "sit down"
    musicBox.style.transform = 'scale(1)'; // Returns the music box to original size
});

document.getElementById('volume-control').addEventListener('input', function(e) {
    music.volume = e.target.value / 100;
});
