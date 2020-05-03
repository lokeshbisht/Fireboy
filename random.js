const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
 
let x = []
let y = []

for (let i = 10; i < 500; i++) {
	x.push(i)
	y.push(i)
}

let val = ["red", "green", "blue", "yellow", "cyan", "orange"]

for (let i = 0; i < x.length; i++) {
	for (let j = 0; j < y.length; j++) {
		let ind = Math.floor(Math.random() * 6)
		
		ctx.fillStyle = val[ind];
		ctx.fillRect(x[i], y[j], 1, 1);
	}
}

function change() {
	
	let rand1 = Math.floor(Math.random() * 490)
	let rand2 = Math.floor(Math.random() * 490)
	let ind = Math.floor(Math.random() * 6)
	
	ctx.fillStyle = val[0];
	ctx.fillRect(x[rand1], y[rand2], 1, 1);
}

let game = setInterval(change);