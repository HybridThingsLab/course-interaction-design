let sequence = [ 'Du', 'Du', 'traust', 'dich', 'echt', 'diesen', 'Knopf', 'zu', 'drücken', 'du', 'Frechdachs', '!'];
let currentIndex = 0;
let clicked = false;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);

  if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 75 && mouseY < height / 2 + 75) {
    fill(255);
    strokeWeight(3);
    cursor(HAND);
  } else {
    fill(0);
    cursor(ARROW);
  }

  ellipse(width / 2, height / 2, 150, 150);
  textAlign(CENTER, TOP);
  fill(0);
  textSize(30)
  if (clicked) {
    text(sequence[currentIndex], width / 2, height / 2 + 100);
  } else {
    text("Bitte nicht klicken!", width / 2, height / 2 + 100);
  }
}

function mouseClicked() {
  if (mouseX > width / 2 - 75 && mouseX < width / 2 + 75 && mouseY > height / 2 - 75 && mouseY < height / 2 + 75) {
    clicked = true;
    if (sequence[currentIndex] == undefined) {

      currentIndex = 0;
      clicked = false;
    } else {
      currentIndex++;
    }
  }
}