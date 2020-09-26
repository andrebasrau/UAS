$(document).ready(function (){
    $('#butdesc1').click (function (){
        $("#desc-kolom1").fadeToggle();
    })

    $('#butdesc2').click (function (){
        $("#desc-kolom2").fadeToggle();
    });
    $('#butdesc3').click (function (){
        $("#desc-kolom3").fadeToggle();
    });
    $('#butdesc4').click (function (){
        $("#desc-kolom4").fadeToggle();
    });
    $('#butdesc5').click (function (){
        $("#desc-kolom5").fadeToggle();
    });
    $('#butdesc6').click (function (){
        $("#desc-kolom6").fadeToggle();
    });
    

});

var canvas =document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");



var y = 100;
var x = 100;
var vy= 2;
var vx = 2;
var r = 10;
// var heightratio = 0.5;



var color = "white";

function random (min, max){
  var num = Math.floor (Math.random()*(max-min) + min);
  return num;
}
function init (){
  x= random (0, canvas.width);
  y= random (0, canvas.height)
}
function drawBall (){
  ctx.beginPath();
  ctx.arc(x,y,r,0,2*Math.PI);
  ctx.fillStyle = color;
  ctx.fill();
}
function draw (){
  
  ctx.clearRect (0,0, canvas.width, canvas.height);
  // changeColor ();
  drawBall ();
  if (x+r>=canvas.width || x-r<=0){
    vx*=-1
  }
  if (y+r>=canvas.height || y-r<=0){
    vy*=-1
  }
  x+=vx;
  y+=vy;


}
// draw();
// init();
// setInterval(draw, 10);
// init ();
setInterval(draw, 10);
