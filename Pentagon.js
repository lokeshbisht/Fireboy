const cvs = document.getElementById("pentagon");
const ctx = cvs.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
 
let x2 = 550
let y2 = 50

let x1 = 265
let y1 = 257

let x3 = 374
let y3 = 593

let x4 = 726
let y4 = 593

let x5 = 835
let y5 = 257


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

ctx.fillStyle = "red";	
ctx.fillRect(x4, y4, 2, 2);
ctx.strokeStyle = "red";
ctx.strokeRect(x4, y4, 2, 2);

ctx.fillStyle = "red";	
ctx.fillRect(x5, y5, 2, 2);
ctx.strokeStyle = "red";
ctx.strokeRect(x5, y5, 2, 2);


let currX = x2
let currY = y2

let rand = Math.floor(Math.random() * 4)
let lastRand = rand

function draw() {
	
	let x
	let y
	
	ctx.clearRect(0, 0, 2000, 20)
	
	do {
		rand = Math.floor(Math.random() * 5)
	}while (lastRand == rand);
	
	lastRand = rand
	
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
	} else if (rand < 3) {
		x = (currX + x3) / 2
		y = (currY + y3) / 2
		
		currX = x
		currY = y
	} else if (rand < 4) {
		x = (currX + x4) / 2
		y = (currY + y4) / 2
		
		currX = x
		currY = y
	} else {
		x = (currX + x5) / 2
		y = (currY + y5) / 2
		
		currX = x
		currY = y
	}
	
	
	ctx.fillStyle = "green";	
	ctx.fillRect(currX, currY, 2, 2);
	ctx.strokeStyle = "green";
	ctx.strokeRect(currX, currY, 2, 2);
}

let game = setInterval(draw);
