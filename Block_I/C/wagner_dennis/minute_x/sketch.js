let particles = [];
let numParticles = 10;
let t = 0;

function setup() {
  createCanvas(800, 800);
  background(0);
  for (let i = 0; i < numParticles; i++) {
    particles[i] = new Particle(width / 2, height / 2);
  }
}

function draw() {
  blendMode(ADD);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
  }

  if (millis() > 60000) {
    background(0);
    t = 0;
    particles = [];
    for (let i = 0; i < numParticles; i++) {
      particles[i] = new Particle(width / 2, height / 2);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.lifetime = 100;
    this.offset = createVector(random(1000), random(1000));
    this.respawnCounter = 0; // Add a respawn counter for each particle
  }

  update() {
    let angle = noise(
      (this.pos.x + this.offset.x) * 0.01,
      (this.pos.y + this.offset.y) * 0.01,
      t
    ) * TWO_PI * 2;
    this.acc = p5.Vector.fromAngle(angle);
    this.acc.setMag(0.01);

    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);

    this.lifetime -= 1;

    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1.5;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1.5;
    }

    if (this.lifetime < 0) {
      this.pos = createVector(width / 2, height / 2);
      this.lifetime = 100;
      this.offset = createVector(random(1000), random(1000));
      this.respawnCounter++; // Increment the respawn counter
    }
  }

  display() {
    strokeWeight(2);
    let hueVal = map(t, 0, 60000, 0, 255);

    if (this.respawnCounter % 2 === 1) {
      stroke(255, 0, 0, this.lifetime);
    } else {
      stroke(hueVal, 255, 255, this.lifetime);
    }

    point(this.pos.x, this.pos.y);
  }
}