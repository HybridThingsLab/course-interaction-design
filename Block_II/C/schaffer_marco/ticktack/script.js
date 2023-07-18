const video = document.getElementById('video')
const text = document.getElementById('text')
const emoteImg = document.getElementById('emoteImg')

const neutral = new Audio("./songs/neutral.mp3")
const happy = new Audio("./songs/happy.mp3")
const disgusted = new Audio("./songs/disgusted.mp3")
const sad = new Audio("./songs/sad.mp3")
const surprised = new Audio("./songs/surprised.mp3")
const fearful = new Audio("./songs/fearful.mp3")
const angry = new Audio("./songs/angry.mp3")

const neutralPic = "./emotions/neutral.png"
const happyPic = "./emotions/happy.png"
const disgustedPic = "./emotions/disgusted.png"
const sadPic = "./emotions/sad.png"
const surprisedPic = "./emotions/surprised.png"
const fearfulPic = "./emotions/fearful.png"
const angryPic = "./emotions/angry.png"

const currentEmotion = ""

function setEmotion(emotion) {
  if (emotion != currentEmotion) {
    if (emotion == "neutral") {
      pauseAll();
      neutral.play();
      emoteImg.setAttribute("src", neutralPic);
      document.body.className = "neutral-bg"; // Ändere die Klasse des Body-Elements
    } else if (emotion == "happy") {
      pauseAll();
      happy.play();
      emoteImg.setAttribute("src", happyPic);
      document.body.className = "happy-bg";
    } else if (emotion == "angry") {
      pauseAll();
      angry.play();
      emoteImg.setAttribute("src", angryPic);
      document.body.className = "angry-bg";
    } else if (emotion == "surprised") {
      pauseAll();
      surprised.play();
      emoteImg.setAttribute("src", surprisedPic);
      document.body.className = "surprised-bg";
    } else if (emotion == "fearful") {
      pauseAll();
      fearful.play();
      emoteImg.setAttribute("src", fearfulPic);
      document.body.className = "fearful-bg";
    } else if (emotion == "sad") {
      pauseAll();
      sad.play();
      emoteImg.setAttribute("src", sadPic);
      document.body.className = "sad-bg";
    } else if (emotion == "disgusted") {
      pauseAll();
      disgusted.play();
      emoteImg.setAttribute("src", disgustedPic);
      document.body.className = "disgusted-bg";
    }
    text.innerHTML = emotion;
  }
}

function pauseAll() {
  happy.pause();
  neutral.pause();
  fearful.pause();
  angry.pause();
  surprised.pause();
  disgusted.pause();
  sad.pause();
}

let expressions = []
for (let i = 0; i < 3; i++) {
  expressions.push("");
}

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('./models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('./models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('./models'),
  faceapi.nets.faceExpressionNet.loadFromUri('./models')
]).then(startVideo)

function startVideo() {
  navigator.getUserMedia(
    { video: {} },
    stream => video.srcObject = stream,
    err => console.error(err)
  )
}

function say(expression,stringOutput) {
  if (expression > 0.7) { 
  newExpression(stringOutput)
  }
}

function sayAll(detec) {
  say(detec.expressions.angry,"angry") //The only thing they fear
  say(detec.expressions.happy,"happy") //Gozilla vs Biolante
  say(detec.expressions.neutral,"neutral") //minecraft
  say(detec.expressions.sad,"sad") //sad violin
  say(detec.expressions.fearful,"fearful") //Surgion attack
  say(detec.expressions.disgusted,"disgusted") //Cbat
  say(detec.expressions.surprised,"surprised") //Noosphere
}   

video.addEventListener('play', () => {
setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    try {
      sayAll(detections[0]);
    } catch {}
  }, 100)
})

function newExpression(expression) {
  expressions[0] = expressions[1]
  expressions[1] = expressions[2]
  expressions[2] = expression
  let count = 0;
  console.log(expressions[0]+"  "+expressions[1]+"  "+expressions[2])
  if (expressions[0] == expressions[1] && expressions[2] == expressions[1]) {
    setEmotion(expression);
    currentEmotion = emotion;
  }
}
