class Car {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0;
    this.angle = 0;
    this.acceleration = 0.2;
    this.friction = 0.05;
    this.maxSpeed = 2;
    this.controls = new Controls();
  }
  update() {
    this.#move();
  }

  #move() {
    //this.controls.forward
    if (this.controls.forward && !this.controls.backward) {
      this.speed += this.acceleration - this.friction;
      if (this.speed > this.maxSpeed) {
        this.speed = this.maxSpeed;
      }
    }
    //this.controls.backward
    if (this.controls.backward && !this.controls.forward) {
      this.speed -= this.acceleration - this.friction;
      if (this.speed < -this.maxSpeed / 2) {
        this.speed = -this.maxSpeed / 2;
      }
    } else if (
      (!this.controls.backward && !this.controls.forward) ||
      (this.controls.backward && this.controls.forward)
    ) {
      if (this.speed > 0) {
        this.speed -= this.friction;
        if (this.speed <= this.friction) {
          this.speed = 0;
        }
      }
      if (this.speed < 0) {
        this.speed += this.friction;
        if (this.speed >= -this.friction) {
          this.speed = 0;
        }
      }
    }
    if (this.speed !== 0) {
      //this.controls.left
      if (this.controls.left) {
        //going forward or back
        this.speed >= 0 ? (this.angle += 0.03) : (this.angle -= 0.03);
      }
      //this.controls.right
      if (this.controls.right) {
        //going forward or back
        this.speed > 0 ? (this.angle -= 0.03) : (this.angle += 0.03);
      }
    }
    this.x -= this.speed * Math.sin(this.angle);
    this.y -= this.speed * Math.cos(this.angle);
  }
  draw(ctx) {
    ctx.save();
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(-this.angle);
    ctx.translate(-(this.x + this.width / 2), -(this.y + this.height / 2));
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.restore();
  }
}
