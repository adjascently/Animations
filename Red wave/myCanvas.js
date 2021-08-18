const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
let canvasW = canvas.width = window.innerWidth;
let canvasH = canvas.height = window.innerHeight;
let angle = 0;
let y = 0;
let radius = 30
    
tick();

function tick() {
  requestAnimationFrame(tick);
  draw();
  angle++;
}

function drawWave(angle, amplitude, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  for(let i = radius; i <= canvasW; i += 50){
    y = Math.sin((angle + i) * Math.PI / 180) * amplitude + canvasH / 2;
    ctx.arc(i, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

function draw() {
  ctx.clearRect(0, 0, canvasW, canvasH);
  drawWave(angle, 45, "#cc000022");
}
