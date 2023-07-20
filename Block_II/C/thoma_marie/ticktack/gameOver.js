let canvas;

function setup() {
  canvas = createCanvas(640, 480);
//canvas.position(0, 0);
  background(115,28,40)

  textFont('Georgia');
  textAlign(CENTER, CENTER);
  textSize(80);
  //fill(207,51,72)
  text("Game Over", width / 2, 200);

  textSize(24);
  text("Wanna try again?", width / 2, 255);

  let button = createButton("Start");
//button.position(width / 2 - 50, 300);
  button.size(100, 50);
  button.style("font-family", 'Georgia');
  button.style("font-size", "23px");
  button.mousePressed(goToSketch);
}

function goToSketch() {
  window.location.href = "index2.html";
}
