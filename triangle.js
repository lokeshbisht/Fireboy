const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
 
let x2 = 600
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

let rand = Math.floor(Math.random() * 4)

let col = "green"

cvs.addEventListener('click', function(event){

    x2 = event.clientX;
    y2 = event.clientY;
	//ctx.clearRect(0, 0, 2000, 2000)
	
	if (col === "green") {
		col = "red"
	}
	else {
		col = "green"
	}
}, false);

function draw() {
	
	let x
	let y
	
	
		rand = Math.floor(Math.random() * 3)
	
	
	
	
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
	} else{
		x = (currX + x3) / 2
		y = (currY + y3) / 2
		
		currX = x
		currY = y
	}
	
	
	ctx.fillStyle = col;	
	ctx.fillRect(currX, currY, 1, 1);
}

let game = setInterval(draw);
