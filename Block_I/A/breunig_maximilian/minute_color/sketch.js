let w = 600
let h = 600;

let seconds= 0;
farbe=0;

function setup() {

  createCanvas(w, h);
  background(farbe);
  
  
  setInterval(() =>{
    if(seconds<60){
      seconds++;
      farbe +=4;
      background(farbe);
    }else{
      seconds=1;
      farbe =0;
      background(farbe);
    }
    
  },1000);

}