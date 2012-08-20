var timer = 0;

function init() {
    start();
}

function start() {
    document.getElementById('timer').innerHTML = timer;
    timer++;
    setTimeout('start()', 50);
}