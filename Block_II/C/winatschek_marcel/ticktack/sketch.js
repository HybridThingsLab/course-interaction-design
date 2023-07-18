var textwait = 0;
var tracker;
var pos;
var font;
var mood = 5;
var moodword;
var moodprompt = "happy";

let capture;
let maxB = 0;
let counter = 1;
let txt = " ";
let moodrand = 0;
let japanese = 0;

function preload() {
   font = loadFont('arialblack.ttf');
}

function setup() {
   createCanvas(1100, 840);
   pixelDensity(1);
   frameRate(24);
   noStroke();

   capture = createCapture({
      audio: false,
      video: {
         width: 1100,
         height: 840
      }
   });

   capture.elt.setAttribute('playsinline', '');
   capture.size(1100, 840);
   capture.hide();

   tracker = new clm.tracker();
   tracker.init();
   tracker.start(capture.elt);

}

function draw() {
   capture.loadPixels();

   maxB = 0;

   let xpos = map(int(random(1100)) + 10, 0, 1100, 0, 1100);
   let ypos = map(int(random(840)) + 10, 0, 840, 0, 840);

   pos = tracker.getCurrentPosition();
   if (pos.length > 0 || textwait < 37) {
      background(255);
   }

   if (textwait > 30) {
      fill(0);
      text(txt, int(random(1100)), int(random(840)));
   }

   for (let y = 0; y < 840; y += 13) {

      for (let x = 0; x < 1100; x += 13) {
         let i = (y * 1100 + x) * 4;

         let r = capture.pixels[i];
         let g = capture.pixels[i + 1];
         let b = capture.pixels[i + 2];

         let pColor = color(r, g, b);
         let pBright = brightness(pColor);

         if (pBright > maxB) {
            maxB = pBright;
         }

         let bright = int(map(pBright, 0, maxB, 0, 3));

         txt = " ";
         switch (bright) {
            case 0:
            
               if (pos.length > 0) { // smile meter

                  var mouthLeft = createVector(pos[44][0], pos[44][1]);
                  var mouthRight = createVector(pos[50][0], pos[50][1]);
                  var smile = mouthLeft.dist(mouthRight);
                  // console.log(smile);   

                  var browDistance = pos[18][0] - pos[22][0];
                  // console.log(browDistance);

                  var mouthOpen = pos[57][1] - pos[60][1];
                  // console.log(mouthOpen);

                  // console.log("TEST");

                  japanese = int(random(50));

                  // console.log(japanese);

                  // Change filter/ tint based on mood
                  if (smile < 150 && browDistance >= 90 && mouthOpen < 10) {
                     if (japanese == 1) {
                        txt = 'むねやけ';
                     } else {
                        txt = 'disgusted';
                     }

                     moodprompt = "disgusted";

                  } else if (smile > 150 && browDistance >= 90) {
                     if (japanese == 1) {
                        txt = '嬉しい';
                     } else {
                        txt = 'happy';
                     }

                     moodprompt = "happy";

                  } else if (smile < 150 && browDistance < 90 && mouthOpen < 10) {
                     if (japanese == 1) {
                        txt = 'アングリー';
                     } else {
                        txt = 'angry';
                     }

                     moodprompt = "angry";

                  } else if (mouthOpen > 10 && smile < 150) {
                     if (japanese == 1) {
                        txt = 'はっと';
                     } else {
                        txt = 'surprised';
                     }

                     moodprompt = "surprised";

                  } else {

                     if (japanese == 1) {
                        txt = '悲しい';
                     } else {
                        txt = 'sad';
                     }

                     moodprompt = "sad";

                  }

               }

         }

         xpos = map(x, 0, 1100, 0, 1100);
         ypos = map(y, 0, 840, 0, 840);

         // textSize(6.5 - 5);

         let txtsize = 6.5 + int(random(30));

         textSize(txtsize);

         let rnum = int(random(30000));

         textStyle(ITALIC);


         if (rnum == 19) {
            fill('#ff0000');

            text("error", xpos, ypos + 6.5);
         } else {

            fill(0, (pBright - (maxB / 9) * bright) * 20);
            text(txt, xpos, ypos + 6.5);

         }

      }

   }

   textAlign(CENTER);

   fill('#ff0000');
   stroke('#ff0000');
   strokeWeight(10);
   textFont(font);
   textStyle(BOLD);

   // console.log(moodprompt);
   // console.log(moodword);
   // console.log("-----");

   if (textwait < 20) {
      textSize(150);
      text("STAY", 550, 330);

      if (textwait > 5) {
         text("FUCKING", 550, 480);
      }
      if (textwait == 6) {
         mood = int(random(4));
      }

      if (textwait > 10) {

         if (mood == 0) {
            moodword = "disgusted";

            text("DISGUSTED!", 550, 620);

         } else if (mood == 1) {

            moodword = "happy";

            text("HAPPY!", 550, 620);

         } else if (mood == 2) {

            moodword = "angry";

            text("ANGRY!", 550, 620);

         } else if (mood == 3) {

            moodword = "surprised";

            text("SURPRISED!", 550, 620);

         } else if (mood == 4) {

            moodword = "sad";

            text("SAD!", 550, 620);

         }

      }

   }

   textSize(500);
   if (textwait >= 25 && textwait < 35) {

      text("GO!", 550, 600);

   }

   if (textwait < 36) {
      textwait++;
   }

   if (textwait == 36) {
      if (counter != 0) {
         text(counter, 550, 600);

      }
      moodrand = int(random(30, 150));

      counter++;
   }

   if (counter > moodrand && moodprompt != moodword && textwait >= 36) {
      textSize(360);
      if (textwait < 55) {
         text("FAIL!", 550, 550);
         textwait++;
      } else {
         counter = 0;
         textwait = 0;
         moodprompt = "empty";
      }

   }

   textFont('Arial');
   fill('#ff0000');
   noStroke();

}