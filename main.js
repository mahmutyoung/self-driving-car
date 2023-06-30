const canvas = document.getElementById('myCanvas');
canvas.width = 200;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

console.log(canvas.width);
console.log(canvas);

const car = new Car(100, 250, 30, 50);
//ctx.restore();
let currentRoad = new Road(0, -canvas.height, canvas.width, 3 * canvas.height);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  if (currentRoad.y >= 0 || currentRoad.y <= -2 * canvas.height) {
    currentRoad.y = -canvas.height;
  }
  currentRoad.draw(ctx);
  currentRoad.update();
  console.log(currentRoad.y);
  ctx.save();
  ctx.fillStyle = 'red';
  car.draw(ctx);
  car.update();
  console.log(car.speed, car.x, car.y);
  ctx.restore();

  requestAnimationFrame(animate);
}
animate();
