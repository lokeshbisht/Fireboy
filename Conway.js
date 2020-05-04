const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
 
function drawLine(x1, y1, x2, y2) {
	
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.stroke();
}

function drawCircle(color, x, y, r) {
	
	ctx.beginPath();
    ctx.arc(x, y, r, 0, 2 * Math.PI, false);
    ctx.fillStyle = color;
    ctx.fill();
      
	
}

function rand(x) {
	
	return Math.floor(Math.random() * x)
}

let len = 1200
let val = ["red", "green", "blue", "yellow", "cyan", "orange"]

for (let i = 0; i < len; i += 20) {
	drawLine(0, i, len, i)
	drawLine(i, 0, i, len)
}

let x = []
let y = []

for (let i = 10, j = 10; i < len; i += 20) {
	for (let j = 10; j < len; j += 20) {
		x.push(i)
		y.push(j)
	}
}

let init = 50

//for (let i = 0; i < init; i ++) {	
function dr() {	
	a = rand(x.length)
	b = rand(y.length)
	
	c = rand(6)
	drawCircle(val[c], x[a], y[b], 5)
}

setInterval(dr)
