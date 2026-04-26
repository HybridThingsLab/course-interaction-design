const MODEL_URL = 'models/';
let customFont;
let canvas;
let vid;
let results;
let loaded = false;

const smoothing = 0.1; // high values will make the expression results more jumpy, low values will make them smoother but less responsive
let smoothedExpressions = {};

async function setup() {
  customFont = await loadFont('assets/Inter.ttf');

  canvas = createCanvas(640, 480); // to match the video size

  textFont(customFont);

  vid = createCapture(VIDEO, async () => {
    await faceapi.loadSsdMobilenetv1Model(MODEL_URL);
    await faceapi.loadFaceLandmarkModel(MODEL_URL);
    await faceapi.loadFaceRecognitionModel(MODEL_URL);
    await faceapi.loadFaceExpressionModel(MODEL_URL);
    loaded = true;
    getResults();
  });
  vid.size(640, 480); // to match the video size
  vid.hide();
}

async function getResults() {
  results = await faceapi.detectSingleFace(vid.elt).withFaceExpressions();
  getResults();
}

function draw() {
  background(0);
  image(vid, 0, 0);

  // draw overlay to see text better
  fill(0, 150);
  noStroke();
  rect(0, 0, width, 152);

  // results
  if (loaded) {

    if (results) {

      let x = results.detection.box.x;
      let y = results.detection.box.y;
      let w = results.detection.box.width;
      let h = results.detection.box.height;
      noFill();
      stroke(255);
      strokeWeight(2);
      rect(x, y, w, h);

      let expressions = [];
      for (var expr in results.expressions) {
        if (!(expr in smoothedExpressions)) smoothedExpressions[expr] = 0;
        smoothedExpressions[expr] = lerp(smoothedExpressions[expr], results.expressions[expr], smoothing);
        expressions.push([expr, smoothedExpressions[expr]]);
      }

      for (let i = 0; i < expressions.length - 1; i++) {
        let label = expressions[i][0];
        let confidence = expressions[i][1];
        noStroke();
        fill(255);
        textAlign(RIGHT, TOP);
        textSize(12);
        text(label + ":", 70, i * 20 + 10);
        const val = map(confidence, 0, 1, 0, width / 2);
        noStroke();
        fill(255);
        rect(80, i * 20 + 8, val, 15);
        fill(0, 255, 0);
        textAlign(LEFT, TOP);
        text(confidence.toFixed(3), 80, i * 20 + 10);
        textAlign(CENTER, CENTER);
        textSize(24);
        if (confidence > 0.8) {
          text(label, x + w / 2, y + h / 2);
        }
      }
    }
  }
}
