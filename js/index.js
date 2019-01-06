var w = window.innerWidth;
var h = window.innerHeight;

var intro = document.getElementsByClassName("intro")[0];
var Episodios = document.getElementsByClassName("Episodios")[0];
var historia = document.getElementsByClassName("historia")[0];
var párrafos = document.getElementsByClassName("párrafos")[0];
var sonido = document.getElementById("sonido");

intro.style.fontSize = w / 45 + "px";
Episodios.style.fontSize = w / 20 + "px";
historia.style.fontSize = w / 45 + "px";
párrafos.style.height = h + "px";

window.addEventListener("resize", function() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  intro.style.fontSize = w / 55 + "px";
  Episodios.style.fontSize = w / 20 + "px";
  historia.style.fontSize = w / 45 + "px";
  párrafos.style.height = h + "px";
  /*Fondo de estrellas*/
  inicio();
  nevada();
});

function animar() {
  intro.className = 'intro texto_intro animación_intro';
  Episodios.className = 'intro Episodios animación_Episodios';
  historia.className = 'historia texto_historia animación_historia';
  sonido.play();
}


/*Fondo de estrellas*/

var canvas = document.getElementById('snow');
var ctx = canvas.getContext('2d');

canvas.width = w;
canvas.height = h;

var num = 200;
var tamaño = 3;
var elementos = [];
 
inicio();
nevada();

function inicio() {
  for (var i = 0; i < num; i++) {
    elementos[i] = {
      x: Math.ceil(Math.random() * w),
      y: Math.ceil(Math.random() * h),
      tamaño: Math.random() * tamaño
    }
  }
}

function nevada() {
  ctx.clearRect(0, 0, w, h);
  for (var i = 0; i < num; i++) {
    var e = elementos[i];
    ctx.beginPath();
    ctx.fillStyle = "#ff6";
    ctx.arc(e.x, e.y,e.tamaño,0,2*Math.PI);
    ctx.fill();
  }
}