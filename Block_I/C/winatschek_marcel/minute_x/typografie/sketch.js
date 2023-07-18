function setup() {
  createCanvas(800, 800);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();
  let n = 0;
  textSize(10);
  background(255);
  for(let i = 0; i <= h; i++){
    if(n != 0){
      text(n, 10, 10 + (n * 10));
    }
    n++;
  }
  n = 0;
  for(let i = 0; i <= m; i++){
    if(n != 0){
      text(n, 20, 10 + (n * 10));
    }
    n++;
  }
  n = 0;
  for(let i = 0; i <= s; i++){
    if(n != 0){
      text(n, 30, 10 + (n * 10));
    }
    n++;
  }

}