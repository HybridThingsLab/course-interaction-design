let canvas;
let img; 
let img2;


function preload() {
  img = loadImage('images/erdbeere.png'); 
  img2 = loadImage('images/erdbeerenkorb.png'); 
}



function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(0, 0);
  background(245,175,185);
  
  
  image(img, -190, -200, img.width *2 , img.height *2 );

  textAlign(CENTER, CENTER);
  textSize(70);
  textFont('Georgia');
  text("STRAWBERRY", width / 2, 160);
  text("CATCH", width / 2, 213);
  textSize(20);
  text("THE GAME", width / 2, 250);
  textSize(12);
  text("© 2023 Marie Thoma", width / 2, 460);

  let button = createButton("START");
  button.position(width / 2 - 30, height / 2 + 100);
  button.position(width / 2 - 50, height / 2 + 100);
  button.size(100, 50);
  button.style("font-family", 'Georgia');
  button.style("font-size", "23px");
  button.mousePressed(goToSketch);

}

function goToSketch() {
  window.location.href = "index2.html";
}
