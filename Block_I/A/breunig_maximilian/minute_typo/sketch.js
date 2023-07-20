let customFont;
let seconds = 0;
let now = Math.floor(Date.now()/1000);
var punkte = new Array(60);
var abstand = 0;
var count =0;



function preload() {

  customFont1 = loadFont('IBMPlexMono-Regular.ttf');
  customFont2 = loadFont('IBMPlexMono-Italic.ttf');
}

function setup() {
  canvas = createCanvas(800, 800).parent('canvas');
  textFont(customFont1);

  for (let i = 0; i < 60; i++) {

    var spalte = i%10;
    var x = (height / 2 - 64) + (spalte*14.5);
    var y = (height / 2 - 30) - (abstand*25);
    punkte[i] = new Punkt(x,y);
    count+=1;
    if(count==10){
      count=0;
      abstand+=1;
    }
  }
 
}

setInterval(() => {
  seconds++;
  now = Math.floor(Date.now()/1000);
  background(0);
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(24);
  if(seconds == 59){
    textFont(customFont2);
    text(now, height / 2, width / 2);
    text("THE",height / 2, width / 2+50);
    text("EPOCH",height / 2, width / 2+75);
    seconds=0;
    }else{
    textFont(customFont1);
    text(now, height / 2, width / 2);
    text("THE",height / 2, width / 2+50);
    text("EPOCH",height / 2, width / 2+75);
    }


  for (let i = 0; i < 60; i++) {

    if (i <= seconds) {
      punkte[i].zeichne();
    } else {
      punkte[i].zeichne2();
    }
  }

},1000);

class Punkt {

  constructor(x, y) {
    this.cordx = x;
    this.cordy = y;


  }
  zeichne() {
    noStroke();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);
    text(".", this.cordx, this.cordy);
    

  }
  zeichne2() {
    noStroke();
    fill(75);
    textAlign(CENTER, CENTER);
    textSize(30);
    text(".", this.cordx, this.cordy);
    

  }

}
