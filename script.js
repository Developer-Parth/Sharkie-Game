import Game from './game/game.class.js';

const game = new Game(document.getElementById('canvas'));

document.getElementById('intro').style.opacity = "1";
setTimeout(() => {
    document.getElementById('intro').style.opacity = "0";
    document.getElementById('intro').style.transition = "opacity 1s ease-out";
    setTimeout(() => {
        document.getElementById('intro').style.display = "none";
    }, 1000);
}, 1000);
