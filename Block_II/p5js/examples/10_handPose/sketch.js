let customFont;
let video;
let handPose;
let hands = [];

async function setup() {
  customFont = await loadFont('assets/Inter.ttf');
  createCanvas(640, 480); // to match the video size
  textFont(customFont);

  // load handPose model
  handPose = await ml5.handPose();

  // create webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480); // to match the video size
  video.hide();

  // start detecting hands
  handPose.detectStart(video, gotHands);
}

function draw() {
  image(video, 0, 0, width, height);

  // draw all tracked hand keypoints
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    for (let j = 0; j < hand.keypoints.length; j++) {
      let keypoint = hand.keypoints[j];
      fill(0, 255, 0);
      noStroke();
      circle(keypoint.x, keypoint.y, 10);
    }
  }
}

function gotHands(results) {
  hands = results;
}
