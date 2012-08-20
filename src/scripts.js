var timer = 0;
var canvas;
var context;

window.onload = function () {
   canvas = document.getElementById("gameCanvas");
   context = canvas.getContext("2d");

   drawGrid();
   start();
}


function start() {
    document.getElementById('timer').innerHTML = timer;
    timer++;
    setTimeout('start()', 50);
}

function drawGrid() {
    for (i = 0; i < 10; i++) {
        context.beginPath();
        context.moveTo(0, i*50);
        context.lineTo(900, i*50);
        context.stroke();
    }
    for (i = 0; i < 18; i++) {
        context.beginPath();
        context.moveTo(i*50,0);
        context.lineTo(i*50,500);
        context.stroke();
    }
}

function drawElements() {
}