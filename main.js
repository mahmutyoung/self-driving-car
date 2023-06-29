const canvas = document.getElementById('myCanvas');
canvas.width = 200;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

console.log(canvas.width);
console.log(canvas);
ctx.fillStyle = 'red';
const car = new Car(100, 300, 30, 50);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  car.draw(ctx);
  car.update();
  requestAnimationFrame(animate);
}
animate();
