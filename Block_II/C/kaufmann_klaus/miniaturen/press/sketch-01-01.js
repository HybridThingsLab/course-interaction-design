let sRadius = 40;
let tRadius = 200;
let tThickness = 40;
let myShader;
let hovered = false;
let clickDelta = {
  value: 0
};
let hoverDelta = {
  value: 0
};
let pressed = false;

function preload() {
  myShader = loadShader("shader.vert", "shader.frag");
}

function setup() {
  createCanvas(800, 800, WEBGL);
  ortho(-width / 2, width / 2, -height / 2, height / 2, 0, 1600);
  smooth();
  noStroke();
}

function draw() {
  background(255);
  stroke(230);
  noFill();
  rect(-height / 2, -width / 2, width, height)
  noStroke()

  shader(myShader);
  fill(255);


  let distance = dist(mouseX, mouseY, width / 2, height / 2);
  if (distance <= tRadius + tThickness) {
    if (!hovered) {
      gsap.to(hoverDelta, { value: 1, duration: 0.4, ease: "power2.out", overwrite: true });
    }
    hovered = true;
    cursor(HAND);
  } else {
    if (hovered) {
      gsap.to(hoverDelta, { value: 0, duration: 0.4, ease: "power2.out", overwrite: true });
      stopAnimation();
    }
    hovered = false;
    cursor(ARROW);
  }

  myShader.setUniform("clickDelta", clickDelta.value);
  myShader.setUniform("uFrameCount", frameCount);
  myShader.setUniform("hoverDelta", hoverDelta.value);

  rotateX(-hoverDelta.value * 0.5);
  rotateZ(hoverDelta.value * 0.5);
  translate(0, -30, 0);
  scale(2);
  cylinder(120, 220, 100, 100);
}

function mousePressed() {
  if (!pressed && hovered) {
    startAnimation();
    pressed = true;
  }
}

function mouseReleased() {
  if (pressed) {
    stopAnimation();
  }
  pressed = false;
}

function startAnimation() {
  gsap.to(clickDelta, { value: 1, duration: 0.5, ease: Elastic.easeOut.config(1.5, 0.4), overwrite: true });
}

function stopAnimation() {
  gsap.to(clickDelta, { value: 0, duration: 0.2, ease: "power2.out", overwrite: true });
}

// function keyPressed() {
//   save("Miniature-Press-04-" + frameCount + ".jpg")
// };