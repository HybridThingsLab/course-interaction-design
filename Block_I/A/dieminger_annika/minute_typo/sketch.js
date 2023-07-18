let pg;
let font;
let i = 0;
let zahl = 0;

function preload() {
  //font = loadFont(data/SpaceMono-BoldItalic.ttf)
  
}

function setup() {
  createCanvas(displayWidth, displayHeight, P2D);
  pg = createGraphics(displayWidth, displayHeight, P2D);
  //textFont(font);
  pg.textFont('Space Mono');
  //textSize(600); 
  frameRate(3);
}

function draw() {
  i++;
  
  if (i % 3 == 0){
    zahl = zahl + 1;
  }

  if (zahl == 59){
    zahl = 0;
  }
  
  pg.background(0);
  pg.fill(255);
  
  let textSize = windowHeight / 1.5;
  let tileSize = windowHeight / 50;
  
  pg.textSize(textSize); 
  pg.push();
  pg.translate(width/2, height/2);
  pg.textAlign(CENTER,CENTER);
  pg.text(zahl, 0, 0 );
  pg.pop();
 
  let tilesX = 8;
  let tilesY = 8;

  let tileW = int(width/tilesX);
  let tileH = int(height/tilesY);

  for (let y = 0; y < tilesY; y++) {
    for (let x = 0; x < tilesX; x++) {
    
      let wave = int(sin(frameCount * 0.05 + ( x * y )) * 15);
      let glitch = int(random(-8,8));
      
      // SOURCE
      let sx = x * tileW + glitch;
      let sy = y * tileH + glitch;
      let sw = tileW;
      let sh = tileH;


      // DESTINATION
      let dx = x * tileW;
      let dy = y * tileH;
      let dw = tileW;
      let dh = tileH;
      
      copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

    }
  }
}

// Resize canvas when window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
