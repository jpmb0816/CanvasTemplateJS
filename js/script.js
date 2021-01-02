const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const FPS = 60;

function render() {
	ctx.fillStyle = '#5e1a31';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}

setInterval(render, 1000 / FPS);