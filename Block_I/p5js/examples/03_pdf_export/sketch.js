// PDF exporter, see also https://github.com/zenozeng/p5.js-pdf
// include "p5.pdf.js" and "p5.svg.js" in index.html
let pdf, num;
let exportPDF = false;

//Eingefügt
let file, data;
//

//Eingefügt
function preload(){
  // file = loadJSON("./data/DWD-Augsburg-2009-2019.json");
}
//

// setup
function setup() {

  //Eingefügt
  // data = file.data;
  //
  
  // canvas
  createCanvas(1024, 768,SVG);
  noLoop(); // draw loop is just executed once

  // create and start writing pdf
  pdf = createPDF();
  pdf.beginRecord();

}

// draw
function draw() {

  // clear background
  background(0);

  // draw whatever you like
  for (let i = 0; i < 100; i++) {
    noStroke();
    fill(255);
    rect(random(width), random(height), 10, 10);
  }

  // save PDF
  pdf.save();

}