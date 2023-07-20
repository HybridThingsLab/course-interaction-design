var angle = 0;
var canvAngle = 0;
let year = 1991;
let table;
let slot = 0;
let sun;
let earth;

function preload() {
  //source for data: https://www.statista.com/chart/24604/number-of-people-launched-into-space-by-year/
  table = loadStrings('Data.csv', 'csv', 'header');

}

function setup() {
  canvas = createCanvas(1050, 1050).parent('canvas');

  frameRate(60);
  angleMode(DEGREES);
  
  noStroke();

  //textFont(DarkmodeOff Regular);
  
}

function draw() {
  background('#010326');
  //console.log(table[0]);
  //Jahreszahl anzeigen
  push();
  translate(width/2,height/2);
  fill(255, 60);
  /*
  textSize(38);
  textStyle(BOLD);
  textAlign(CENTER)
  text(year, 0, 0);
  */
  pop();

  

  translate(width/2, height/2);
  rotate(canvAngle);

  /*Leitkreis
  stroke(255, 80);
  strokeWeight(2);
  angleMode(RADIANS);
  for (let a = 0; a < TWO_PI; a+=PI/100) {
    let x = 300 * cos(a);
    let y = 300 * sin(a);
    point(x, y);
  }
  angleMode(DEGREES);
  noStroke();
  */

  
  //push(); //Zentrum Kreis

  //push();
  //console.log(table[slot]);

  

  //Menschen
  for(var i = 0; i < int(table[slot]); i++) {
    let counter = table[slot].substring(0, table[slot].indexOf(";"));
    rotate(360/int(counter));
    push();
    
    translate(0, -400);
    
    let distr = int(int(counter)/int(table[slot].substring(table[slot].indexOf(";")+1, table[slot].length)))
    
    fill("#6BCCF2");
    drawingContext.shadowBlur = 22;
    drawingContext.shadowColor = color("#6BCCF2");
    for (var j =  0; j<int(table[slot].substring(table[slot].indexOf(";")+1, table[slot].length)); j++)  {
      if (i == distr*j) {
        fill("#C076D7");
        drawingContext.shadowColor = color("#C076D7");
      }
    }

    if ((i+1)*(360/int(counter)) <= angle) {
      let d;
      if ((i+1)*(360/int(counter)) >= angle-30)  d = (20/30) * ((i+1)*(360/int(counter))-angle);
      else d  = 20;
      ellipse(0, 0, d, d);
    }

    pop();
  }

  //Menschen-Previous
  let prev;
  if  (slot >=10) prev = 10;
  else prev = slot;
  for(var y = 0 ; y < prev; y++) {
    for(var i = 0; i < int(table[slot-y-1]); i++) {
      let counter = table[slot-y-1].substring(0, table[slot-y-1].indexOf(";"));
      let prev;


      rotate(360/int(table[slot-y-1]));
      push();

      //Position      
      let u = -400 + (y+1) * 36 - 36+(frameCount%120*(36/120));
      translate(0, u);
      
  
      //Transparenz+Farbe
      let t = 90 - y*10 -(frameCount%120*(10/120));
      let  c ;

      let distr = int(int(counter)/int(table[slot-y-1].substring(table[slot-y-1].indexOf(";")+1, table[slot-y-1].length)))
    
      c = color("#6BCCF2");
      //drawingContext.shadowBlur = 22;
      //drawingContext.shadowColor = color("#6BCCF2");
      for (var j =  0; j<int(table[slot-y-1].substring(table[slot-y-1].indexOf(";")+1, table[slot-y-1].length)); j++)  {
        if (i == distr*j) {
          c = color("#C076D7");
          //drawingContext.shadowColor = color("#C076D7");
        }
      }
      c.setAlpha(t);
      fill(c);

      //Größe
      let s = 18 - y*1.5 -(frameCount%120*(1.5/120));
      ellipse(0, 0, s, s);
      
      pop();
    }
  }

  angle+=3;
  canvAngle+=0.05;


  //Jahreszahl anzeigen
  document.getElementById('year').innerText = year;


  if(angle>=360) changeYear();
}

function changeYear() {
  if (year>=2020) {
    year = 1991;
    slot =  0;
  }
  else  {
    year++;
    slot++;
  }
 
  angle=0;
  
}
