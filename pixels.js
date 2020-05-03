const cvs = document.getElementById("snake");
const ctx = cvs.getContext("2d");

const ground = new Image();
ground.src = "images/ground.png";

function copy() {
	ctx.drawImage(ground, 0, 0);
	var imgData = ctx.getImageData(0, 0, 50, 50);
	ctx.putImageData(imgData, 100, 100);
}

function copy() {
	ctx.drawImage(ground, 0, 0);
	var imgData = ctx.getImageData(0, 0, 50, 50);
	ctx.putImageData(imgData, 100, 100);
}

setInterval(copy)