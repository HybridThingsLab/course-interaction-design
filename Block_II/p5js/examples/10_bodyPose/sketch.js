let customFont;
let video;
let bodyPose;
let poses = [];

async function setup() {
  customFont = await loadFont('assets/Inter.ttf');
  bodyPose = await ml5.bodyPose();
  createCanvas(640, 480); // to match the video size
  textFont(customFont);

  video = createCapture(VIDEO);
  video.size(640, 480); // to match the video size
  video.hide();

  bodyPose.detectStart(video, gotPoses);
}

function draw() {
  image(video, 0, 0, width, height);

  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        circle(keypoint.x, keypoint.y, 10);
      }
    }
  }
}

function gotPoses(results) {
  poses = results;
}
