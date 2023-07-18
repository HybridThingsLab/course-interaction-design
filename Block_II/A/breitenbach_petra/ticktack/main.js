// globals
let kreisLinks, kreisRechts, links, rechts;
let wechsel;
let secondsLeft = 0;
let secondsRight = 0;
let countDown;
let tooLate, congrats, play, start;
let count;


// setup
function setup() {
  frameRate = 60;
  // init canvas
  createCanvas(windowWidth, windowHeight);
  kreisLinks = 0;
  kreisRechts = 255;
  links = 255;
  rechts = 0;
  wechsel = false;
  countDown = 10;
  textAlign(CENTER);
  tooLate = false;
  congrats = false;
  play = false;
  start = true;
  count = 0;
}

// draw
function draw() {

  // background
  background(links);
  noStroke();

  //seconds as two digits
  let secondsTwoDigitsLeft = String(secondsLeft).padStart(2, "0");
  //let secondsTwoDigitsRight = String(secondsRight).padStart(2, "0");


  if(wechsel) {
    kreisLinks = 255;
    kreisRechts = 255;
    links = 0;
    rechts = 255;
  } else {
    kreisLinks = 255;
    kreisRechts = 255;
    links = 255;
    rechts = 0;
  }

  //Hälfe rechts
  fill(rechts);
  rect(width / 2, 0, width / 2, height);

  //Kreis links
  fill(kreisLinks);
  ellipse(width * 0.25, height / 2, width * 0.35);

  //Kreis rechts
  fill(kreisRechts);
  ellipse(width * 0.75, height / 2, width * 0.35);

  fill(links);
  textAlign(CENTER, CENTER);

  //Text Größe anpassen
  if (width < 700) {
    textSize(135);
  } else if ( width < 900) {
    textSize(200);
  } else if (width < 1200) {
    textSize(270);
  } else {
    textSize(350);
  }

  //textSize(350);
  textFont('Impact');
  text(secondsTwoDigitsLeft, width * 0.25, height / 2 + 15);

  fill(rechts);
  text(secondsTwoDigitsLeft, width * 0.75, height / 2 + 15);

  //Rhythm
  if (frameCount % 60 == 0) {
    wechsel = !wechsel;
  }

  if (frameCount < 600) {
    start = true;
    play = false;
    tooLate = false;
    congrats = false;
  } else {
    start = false;
    play = true;
    toolbar = false;
    congrats = false;
  }

  //Anfangs Screen
  if (start) {
    fill(255, 150);
    rect(0, 0, width, height);
    fill(0);
    //Textgröße anpassen
    if (width < 600) {
      textSize(30);
    } else if (width < 800) {
      textSize(40);
    } else {
      textSize(50);
    }
    text("30 Clicks", width / 2, (height / 2) - 200);
    text("Click To Match The", width / 2, (height / 2) - 100);
    text("Rhythm Of The Background", width / 2, (height / 2) - 50);
    text("Starting In", width / 2, (height / 2) + 25);

    //Countdowm
    if (frameCount % 60 == 0) {
      countDown--;
    }
    if (width < 600) {
      textSize(40);
    } else if (width < 800) {
      textSize(50);
    } else {
      textSize(60);
    }
    text(countDown, width / 2, (height / 2) + 100);
  }

  //Endscreen
  if (secondsLeft != 30) {
    if (frameCount >= 3660) {
      tooLate = true;
      congrats = false;
      play = false;
      start = false;
    }
  }

  if (secondsLeft >= 30) {
    cursor('default');
    play = false;
    congrats = true;
    fill(255, 150);
    rect(0, 0, width , height);
    fill(0);
    if (width < 800) {
      textSize(120);
    } else {
      textSize(200);
    }
    text("Nice!", width / 2, (height / 2) - 50);
    if (width < 800) {
      textSize(30);
    } else {
      textSize(50);
    }
    text("REFRESH TO TRY AGAIN", width / 2, (height / 2) + 120);
  }

  if (tooLate) {
    cursor('default');
    fill(255, 150);
    rect(0, 0, width, height);
    fill(0);
    //textSize(200);
    if (width < 800) {
      textSize(120);
    } else {
      textSize(200);
    }
    text("Too Late", width / 2, (height / 2) - 50);
    if (width < 800) {
      textSize(30);
    } else {
      textSize(50);
    }
    text("REFRESH TO TRY AGAIN", width / 2, (height / 2) + 120);
  }

  if (frameCount % 60 == 0) {
    count = 0;
  }

  //Zurücksetzen bei zu schnellem Drücken
  if (play) {
    if(count > 3) {
      fill(255, 0, 0, 100);
      rect(0, 0, width, height);
      secondsLeft = 0;
    }
    //Congrats
    if (secondsLeft == 30) {
      play = false;
      congrats = true;
      tooLate = false;
      start = false;
    }
    cursor('pointer');
  }
}
function mousePressed() {
  /*if(frameCount >= 55 && frameCount <= 65) {
    secondsLeft++;
  }

  if(frameCount >= 115 && frameCount <= 125) {
    secondsLeft++;
  }
  if (frameCount >= 175 && frameCount <= 185) {
    secondsLeft++;
  }
  if (frameCount >= 235 && frameCount <= 245) {
    secondsLeft++;
  }
  if (frameCount >= 295 && frameCount <= 305) {
    secondsLeft++;
  }
  if (frameCount >= 355 && frameCount <= 365) {
    secondsLeft++;
  }
  if (frameCount >= 415 && frameCount <= 425) {
    secondsLeft++;
  }
  if (frameCount >= 475 && frameCount <= 485) {
    secondsLeft++;
  }
  if (frameCount >= 535 && frameCount <= 545) {
    secondsLeft++;
  }
  if (frameCount >= 595 && frameCount <= 605) {
    secondsLeft++;
  } */


  if (play) {
    count++;

    if (frameCount >= 655 && frameCount <= 665) {
      secondsLeft++;
    }
    if (frameCount >= 715 && frameCount <= 725) {
      secondsLeft++;
    }
    if (frameCount >= 775 && frameCount <= 785) {
      secondsLeft++;
    }
    if (frameCount >= 835 && frameCount <= 845) {
      secondsLeft++;
    }
    if (frameCount >= 895 && frameCount <= 905) {
      secondsLeft++;
    }
    if (frameCount >= 955 && frameCount <= 965) {
      secondsLeft++;
    }
    if (frameCount >= 1015 && frameCount <= 1025) {
      secondsLeft++;
    }
    if (frameCount >= 1075 && frameCount <= 1085) {
      secondsLeft++;
    }
    if (frameCount >= 1135 && frameCount <= 1145) {
      secondsLeft++;
    }
    if (frameCount >= 1195 && frameCount <= 1125) {
      secondsLeft++;
    }
    if (frameCount >= 1255 && frameCount <= 1265) {
      secondsLeft++;
    }
    if (frameCount >= 1315 && frameCount <= 1325) {
      secondsLeft++;
    }
    if (frameCount >= 1375 && frameCount <= 1385) {
      secondsLeft++;
    }
    if (frameCount >= 1435 && frameCount <= 1445) {
      secondsLeft++;
    }
    if (frameCount >= 1495 && frameCount <= 1505) {
      secondsLeft++;
    }
    if (frameCount >= 1555 && frameCount <= 1565) {
      secondsLeft++;
    }
    if (frameCount >= 1615 && frameCount <= 1625) {
      secondsLeft++;
    }
    if (frameCount >= 1675 && frameCount <= 1685) {
      secondsLeft++;
    }
    if (frameCount >= 1735 && frameCount <= 1745) {
      secondsLeft++;
    }
    if (frameCount >= 1795 && frameCount <= 1805) {
      secondsLeft++;
    }
    if (frameCount >= 1855 && frameCount <= 1865) {
      secondsLeft++;
    }
    if (frameCount >= 1915 && frameCount <= 1925) {
      secondsLeft++;
    }
    if (frameCount >= 1975 && frameCount <= 1985) {
      secondsLeft++;
    }
    if (frameCount >= 2035 && frameCount <= 2045) {
      secondsLeft++;
    }
    if (frameCount >= 2095 && frameCount <= 2105) {
      secondsLeft++;
    }
    if (frameCount >= 2155 && frameCount <= 2165) {
      secondsLeft++;
    }
    if (frameCount >= 2215 && frameCount <= 2225) {
      secondsLeft++;
    }
    if (frameCount >= 2275 && frameCount <= 2285) {
      secondsLeft++;
    }
    if (frameCount >= 2335 && frameCount <= 2345) {
      secondsLeft++;
    }
    if (frameCount >= 2395 && frameCount <= 2405) {
      secondsLeft++;
    }
    if (frameCount >= 2455 && frameCount <= 2465) {
      secondsLeft++;
    }
    if (frameCount >= 2515 && frameCount <= 2525) {
      secondsLeft++;
    }
    if (frameCount >= 2575 && frameCount <= 2585) {
      secondsLeft++;
    }
    if (frameCount >= 2635 && frameCount <= 2645) {
      secondsLeft++;
    }
    if (frameCount >= 2695 && frameCount <= 2705) {
      secondsLeft++;
    }
    if (frameCount >= 2755 && frameCount <= 2765) {
      secondsLeft++;
    }
    if (frameCount >= 2815 && frameCount <= 2825) {
      secondsLeft++;
    }
    if (frameCount >= 2875 && frameCount <= 2885) {
      secondsLeft++;
    }
    if (frameCount >= 2935 && frameCount <= 2945) {
      secondsLeft++;
    }
    if (frameCount >= 2995 && frameCount <= 3005) {
      secondsLeft++;
    }
    if (frameCount >= 3055 && frameCount <= 3065) {
      secondsLeft++;
    }
    if (frameCount >= 3115 && frameCount <= 3125) {
      secondsLeft++;
    }
    if (frameCount >= 3175 && frameCount <= 3185) {
      secondsLeft++;
    }
    if (frameCount >= 3235 && frameCount <= 3245) {
      secondsLeft++;
    }
    if (frameCount >= 3295 && frameCount <= 3305) {
      secondsLeft++;
    }
    if (frameCount >= 3355 && frameCount <= 3365) {
      secondsLeft++;
    }
    if (frameCount >= 3415 && frameCount <= 3425) {
      secondsLeft++;
    }
    if (frameCount >= 3475 && frameCount <= 3485) {
      secondsLeft++;
    }
    if (frameCount >= 3535 && frameCount <= 3545) {
      secondsLeft++;
    }
    if (frameCount >= 3595 && frameCount <= 3605) {
      secondsLeft++;
    }
  }
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}