const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
 
let x2 = 700
let y2 = 30

let x1 = 30
let y1 = 600

let x3 = 1200
let y3 = 600

ctx.fillStyle = "red";	
ctx.fillRect(x1, y1, 2, 2);
ctx.strokeStyle = "red";
ctx.strokeRect(x1, y1, 2, 2);

ctx.fillStyle = "red";	
ctx.fillRect(x2, y2, 2, 2);
ctx.strokeStyle = "red";
ctx.strokeRect(x2, y2, 2, 2);

ctx.fillStyle = "red";	
ctx.fillRect(x3, y3, 2, 2);
ctx.strokeStyle = "red";
ctx.strokeRect(x3, y3, 2, 2);

let currX = x2
let currY = y2

function draw() {
	
	let x
	let y
	
	ctx.clearRect(0, 0, 2000, 20)
	
	let rand = Math.random() * 3
	
	if (rand < 1) {
		x = (currX + x1) / 2
		y = (currY + y1) / 2
		
		currX = x
		currY = y
	} else if (rand < 2) {
		x = (currX + x2) / 2
		y = (currY + y2) / 2
		
		currX = x
		currY = y
	} else {
		x = (currX + x3) / 2
		y = (currY + y3) / 2
		
		currX = x
		currY = y
	}
	
	
	ctx.fillStyle = "green";	
	ctx.fillRect(currX, currY, 2, 2);
	ctx.strokeStyle = "green";
	ctx.strokeRect(currX, currY, 2, 2);
}

let game = setInterval(draw);
