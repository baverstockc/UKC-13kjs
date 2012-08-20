//Add some globals
var timer = 0;
var canvas;
var context;

//Use for game initialisation
window.onload = function () {
   canvas = document.getElementById("gameCanvas");
   context = canvas.getContext("2d");

   drawGrid();
   drawElements();
   start();
}

//Looping Game Turn function
function start() {
    document.getElementById('timer').innerHTML = timer;
    timer++;
    setTimeout('start()', 50);
}

//Draw the grid
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

//Draw "Players"
function drawElements() {
    context.beginPath();
    context.rect(60, 360, 40, 40);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();

    context.beginPath();
    context.rect(500, 360, 40, 40);
    context.fillStyle = '#8ED6FF';
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = 'black';
    context.stroke();
}