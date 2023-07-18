let forms = [];
let bgColor;

function setup() {
  createCanvas(800, 800);
  bgColor = color(230,230,250);
}

function draw() {
  background(bgColor);


  if (frameCount % 60 == 0) {
    let form = new Form();
    forms.push(form);
  }


  for (let i = forms.length - 1; i >= 0; i--) {
    forms[i].update();
    forms[i].show();

    for (let j = i - 1; j >= 0; j--) {
      if (forms[i].intersects(forms[j])) {

        if (!forms[i].collided && !forms[j].collided) {
          let randomColor = color(random(100, 200), random(100, 200), random(100, 200));
          forms[i].color = randomColor;
          forms[j].color = randomColor;
          forms[i].collided = true;
          forms[j].collided = true;
        }

        forms[i].velocity = createVector(0, 0);
        forms[j].velocity = createVector(0, 0);
      }
    }


    forms[i].constrain();

    if (forms[i].offscreen()) {
      forms.splice(i, 1);
    }
  }
}

class Form {
  constructor() {
    this.x = random(width);
    this.y = -50;
    this.size = random(20, 50);
    this.color = color(random(100, 200), random(100, 200), random(100, 200));
    this.velocity = createVector(0, random(3, 7));
    this.collided = false; 
  }

  update() {
    this.y += this.velocity.y;
  }

  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  offscreen() {
    return (this.y > height + this.size);
  }

  intersects(other) {
    let distance = dist(this.x, this.y, other.x, other.y);
    return (distance < (this.size + other.size) / 2);
  }

  constrain() {
    if (this.y + this.size / 2 > height) {
      this.y = height - this.size / 2;
      this.velocity.y = 0;
    }
  }
}
