

let farbe1;
let farbe2;
let farbe3;
let bpm=0;
let firstClick, secondClick;
let first=true;
let milliseconds;
let w, h, size, colorSelector, currentColor, rhythm;
let circleWidth, r, g, b, tap;
let song, song2, song3, song4;

function preload(){
  song=loadSound("rickroll.mp3");
  song2=loadSound("neighborhood.mp3");
  song3=loadSound("amogus.mp3");
  song4=loadSound("pac.mp3");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textAlign(CENTER);
}


function draw() {
  rectMode(CENTER);
  stroke(0);
  if(windowWidth>=780){
    w=windowWidth*0.2;
    size=w*0.3;
  } else {
    w=150;
    size=50;
  }
  h=w*1.2;
  milliseconds = int(millis() % 60000);
  colorSelector=map(milliseconds,0,60000,0,bpm*100);
  rhythm=int(colorSelector%300);
  let easing=int(rhythm%100);
  noStroke();
  /*if(rhythm<100){
    fill(255,0,0);
  } else if (rhythm>=100 && rhythm<200){
    fill(0,255,0);
  } else if (rhythm>=200){
    fill(0,0,255);
  }*/
  if(rhythm==0 || rhythm==100 || rhythm==200){
    r=int(random(0, 255));
    g=int(random(0, 255));
    b=int(random(0, 255));
  }
  if(rhythm<100){
    fill(255,g,0);
  } else if (rhythm>=100 && rhythm<200){
    fill(0,255,b);
  } else if (rhythm>=200){
    fill(r,0,255);
  }
  //if (rhythm%100<=50){
    if(circleWidth>=windowWidth){
      circleWidth=windowWidth*0.7;
    }
    //circleWidth=rhythm%100*3*(easing/15);
    circleWidth=easing*easing/10*easing/25;
    circle(windowWidth/2,windowHeight/2,circleWidth);
    //circle(circleWidth,windowHeight/2,50);
  //}
  //currentColor=map(rhythm,0,300,0,765);
  /*if (currentColor<=255){
    farbe1=map(currentColor,0,255,255,0);
    farbe2=map(currentColor,0,255,0,255);
    farbe3=0;
  } else if (currentColor>255 && currentColor<=510){
    farbe2=map(currentColor,255,510,255,0);
    farbe3=map(currentColor,255,510,0,255);
    farbe1=0;
  } else if (currentColor>510){
    farbe3=map(currentColor,510,765,255,0);
    farbe1=map(currentColor,510,765,0,255);
    farbe2=0;
  }*/
  
  //background(farbe1,farbe2,farbe3,255);
  //background(255,0,0);
  fill(0);
  stroke(0);
  //rect(width/2,height/2+0.08*h,w*1.2,h*1.2,25);
  fill(50);
  rect(width/2,height/2,w,h,20);
  fill(0);
  stroke(0);
  //rect(width/2,height/2-0.05*h,w*0.7,h*0.7,15);
  fill(255,150,0);
  if(/*rhythm%100<=10 ||*/ rhythm%100>=40 && rhythm%100<=60){
    fill(255,255,0,255);
  }
  if(mouseIsPressed && mouseX<=windowWidth/2+w/2 && mouseX>=windowWidth/2-w/2 && mouseY<=windowHeight/2+h/2 && mouseY>=windowHeight/2-h/2){
    fill(255,255,0,255);
  }
  //rect(width/2,height/2-0.05*h,w*0.75,h*0.75,12);
  rect(width/2,height/2-0.06*h,w*0.65,h*0.65,12);
  stroke(255,0,0);
  fill(30);
  textSize(height*0.04);
  textSize(size);
  if (first){
    bpm=int(60000/(secondClick-firstClick));
    //tap=(millis()-firstClick)%60000;
    tap=60000/(millis()-secondClick);
  } else {
    bpm=int(60000/(firstClick-secondClick));
    //tap=(millis()-secondClick)%60000;
    tap=60000/(millis()-firstClick);
    /*timer=int(millis()%(60000+secondClick));
    tap=map(timer,0,60000+secondClick,0,bpm);*/
  }
  text(bpm,width/2,height/2-0.05*h);
  fill(150,0,0);
  textSize(size*0.5);
  text("BPM",width/2,height/2+0.2*h);

  let tapLength=map(tap,0,bpm,0,1);
  if(tap>bpm){
    tapLength=1;
  }

  rectMode(CORNER);
  fill(0);
  stroke(0);
  rect(width/2-w*0.325,height/2+0.35*h,w*0.65,h*0.03,12);

  fill(255,255,0,255);
  rect(width/2-w*0.32,height/2+0.354*h,tapLength*w*0.64,h*0.02,12);

  if(bpm>=110 && bpm <=115 && song.isPlaying()==false){
    song.play();
    song2.stop();
    song3.stop();
    song4.stop();
  } else if (bpm>=102 && bpm<108 && song2.isPlaying()==false){
    song.stop();
    song2.play();
    song3.stop();
    song4.stop();
  } else if (bpm>=91 && bpm<98 && song3.isPlaying()==false){
    song3.play();
    song.stop();
    song2.stop();
    song4.stop();
  } /*else if (bpm>=82 && bpm<88 && song4.isPlaying()==false){
    song4.play();
    song1.stop();
    song2.stop();
    song3.stop();
  }*/else if (bpm<91 || bpm>115){
    song.stop();
    song2.stop();
    song3.stop();
    song4.stop();
  }

  if (mouseX<=windowWidth/2+w/2 && mouseX>=windowWidth/2-w/2 && mouseY<=windowHeight/2+h/2 && mouseY>=windowHeight/2-h/2){
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

}

function mousePressed(){
  if (mouseX<=windowWidth/2+w/2 && mouseX>=windowWidth/2-w/2 && mouseY<=windowHeight/2+h/2 && mouseY>=windowHeight/2-h/2){
    if (first){
      firstClick=millis();
      first=false;
    }else{
      secondClick=millis();
      first=true;
    }
  }
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}
