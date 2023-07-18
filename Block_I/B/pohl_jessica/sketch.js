
function preload(){
  song = loadSound("songs/song2.mp3")
  playing = false;
  song.onended(() => {playing = false; document.getElementById("audio").innerText = "Play"; a = 0})
  fr = 60;
}

function setup() {
  createCanvas(800, 800);
  layer = createGraphics(width, height)
  
  background(0)
  
  fft = new p5.FFT(0, 256);
  frameRate(60)
  a = 360/((song.duration()) * 49)
  b = a
  
  frameRate(fr)
}

function draw() {
  
  background(0);
    
  layer.noFill()
  layer.colorMode(RGB)
  
  var spectrumA = fft.analyze()
  var spectrumB = spectrumA.reverse()
  spectrumB.splice(0, 60)
  
  push()
  noFill()
  
  
  pop()
  
  
  push()
    
    translate(width/2, height/2)
    rotate(radians(a))
  
    layer.push()
      layer.translate(width/2, height/2)
      layer.rotate(radians(-a))
      
      for(let i = 0; i < spectrumB.length; i++){
      
      layer.strokeWeight(0.012 * spectrumB[i])
      layer.stroke(200, 70)
      layer.line(0, i*1.6, 0, i*1.6)
    }
  
    layer.pop()
    
    image(layer, -width/2, -height/2)
  pop()
  
  if(playing)a += b
  fill(0);
  //circle(width/2, height/2,120);
}

function toggleAudio(){
  if(!playing){
    song.play()
    console.log("playing")
    document.getElementById("audio").innerText = "Pause"   
  }
  else{
    song.pause()
    console.log("pasued")
    document.getElementById("audio").innerText = "Play"
  }
  
  playing = !playing
}
