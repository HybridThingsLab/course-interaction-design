function setup() {
  createCanvas(480,480);
}
  
function draw() {

  background(0);
    
  strokeWeight(5);

  var sec = second();
  var min = minute();
  var hrs = hour();
    
  sec = formatting(sec);
  min = formatting(min);
  hrs = formatting(hrs % 12);

  fill(255);
  textSize(80);
  textAlign(CENTER, CENTER);
    
  text(hrs + "  " + min + "  " + sec , width/2, height/2);
}

function formatting(num){
  if(int(num) < 10) {
    return "0" + num;
  }
  return num;
}