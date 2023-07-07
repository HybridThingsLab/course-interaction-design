let sec = 5
let score=0
let screen = 0
let count
let input
let wort = ["I", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them", "mine", "yours", "his", "hers", "its","ours", "theirs", "myself", "yourself", "himself", "herself", "itself", "ourselves", "themselves", "who", "whom", "whose", "what","which", "whatever", "whoever", "whichever", "anybody", "anyone", "anything", "each", "either", "everybody", "everyone", "everything", "neither", "nobody","nothing", "one", "other", "somebody", "someone", "something", "both", "few", "many", "several", "all", "any", "most", "none","some", "such", "that", "these", "those", "this", "it", "their", "our", "your", "my", "his", "her", "its", "whose", "awesome", "brave", "cheerful", "daring", "elegant", "fierce", "gentle", "handsome", "intelligent","jolly", "kind","lovely", "magnificent", "neat", "optimistic", "peaceful", "quiet", "radiant", "silly", "tough", "upbeat", "vibrant","witty", "xenodochial", "youthful", "zany", "angry", "beautiful", "careful", "delightful", "energetic", "fantastic", "grateful","happy", "incredible", "joyful", "keen", "lively", "merry", "nice", "optimistic", "proud", "quick", "reliable","smart", "talented", "uplifting", "valiant", "wonderful", "eager", "faithful", "generous", "helpful", "inspiring", "jovial","keen", "lovable", "mellow", "noble", "outstanding", "polite", "quick-witted", "reassuring", "sensitive", "tasteful", "unselfish","vigorous", "wise", "excellent", "yummy", "zealous", "amazing", "brilliant", "charming", "dazzling", "eloquent", "fascinating","graceful", "honest", "imaginative", "jubilant", "keen-eyed", "lucky", "marvelous", "nice-looking", "optimistic", "punctual", "reliable","sincere", "tender", "unforgettable", "vivacious", "warm-hearted", "xenial", "yielding", "zealot", "able", "beautiful", "cute","delicious", "eager", "famous", "good", "happy", "interesting", "jazzy", "knowledgeable", "lively", "modern","accept", "admire", "bake", "calculate", "dance", "earn", "frown", "gather", "hug", "improve", "jump", "kick","laugh", "melt", "notice", "open", "paint", "question", "reach", "sing", "travel", "use", "visit","wait", "x-ray", "yell", "zip", "ask", "buy", "clean", "drive", "eat", "find", "give","have", "imagine", "jog", "know", "learn", "make", 
"need", "organize", "play", "quit", "run","say", "talk", "understand", "value", "work", "x-ray", "yawn", "zoom", "add", "begin", "change","delete", "enjoy", "finish", "grow", "help", "invite", "juggle", "keep", "love", "manage", "need","open", "participate", "qualify", "read", "solve", "teach", "update", "vacuum", "wish", "xerox", "yield","zoom", "abide", "believe", "collaborate", "develop", "empower", "forgive", "guide", "harvest", "ignore", "joke","keep", "listen", "motivate", "negotiate", "offer", "participate", "question", "relax", "smile", "talk", "unite","apple", "book", "chair", "desk", "door", "eye", "flower", "guitar", "hat", "ice", "jacket", "key","lamp", "moon", "notebook", "orange", "pencil", "queen", "radio", "socks", "table", "umbrella", "violin","watch", "xylophone", "yacht", "zebra", "bag", "car", "dog", "fish", "goose", "house", "ink","jungle", "kite", "lion", "mouse", "nest", "ocean", "pear", "quilt", "rain", "sun", "tree","unicorn", "vase", "water", "xylophone", "yak", "zoo", "camera", "diamond", "elephant", "fountain", "garden","honey", "island", "jellyfish", "kangaroo", "laptop", "mountain", "necklace", "octopus", "pizza", "quicksand","robot", "snow", "telephone", "umbrella", "volcano", "whale", "xylophone", "yacht", "zebra", "angel", "ball","candle", "dragon", "egg", "fire", "ghost", "heart", "ice cream", "jewel", "knight", "ladybug", "mirror"];

let interval

function setup(){
  createCanvas(windowWidth,windowHeight);
  input = createInput()
  count=int(random(370))
  
  
}


function draw(){
  if(screen==0){

    fill(200)
  rectMode(CENTER)
  rect(windowWidth/2,windowWidth/2,windowWidth/7,windowHeight/7)
  
  background(50,50,60) 

  rectMode(CENTER)
  fill(90,90,100)
  noStroke()
  rect(windowWidth/2,0+windowHeight/12,windowWidth,windowHeight/6)
  rect(windowWidth/2,(windowHeight/5)*4,windowWidth/3,windowHeight/4)

  textSize(windowWidth/24)
  textAlign(CENTER,CENTER)
  noStroke()
  fill(255)
  text("Type-Tack",windowWidth/2,0+windowHeight/12)

  textAlign(CENTER,CENTER)
  textSize(windowWidth/16)
  fill(255)
  text(wort[count],windowWidth/2,windowHeight/2-windowHeight/8)

  textSize(windowWidth/64)
  textAlign(CENTER,CENTER)
  fill(255)
  text("Time left: " + sec + " sec",windowWidth/2,windowHeight/2+windowHeight/10)
  text("Score: " + score, windowWidth/2,windowHeight/2+windowHeight/7)

  text("Type the word befor the        runs out:", windowWidth/2,windowHeight/2-windowHeight/4)
  fill(0,255,0)
  text("time", windowWidth/2+windowWidth/19.5,windowHeight/2-windowHeight/4)
  fill(255)
  text("To start playing press the Textbox.",windowWidth/2,(windowHeight/5)*4-windowHeight/40)
  text("Have fun!",windowWidth/2,(windowHeight/5)*4+windowHeight/40)

 
  

  
  input.position(windowWidth/2,windowHeight/2)
  input.size(windowWidth/5.2)
  input.input(myInputEvent)
  input.center()
  input.style('font-size', windowHeight/30 + 'px')
  input.style('padding' , '10px')
  input.style('border' , '3px solid black')

  function myInputEvent() {
    if(wort[count]==this.value()){
      input.value("")
      sec+=2
      score++
      count=int(random(370))
      
    }
  }
 
    
  }else if(screen==1){

  

  fill(200)
  rectMode(CENTER)
  rect(windowWidth/2,windowWidth/2,windowWidth/7,windowHeight/7)

  background(50,50,60) 

  rectMode(CENTER)
  fill(90,90,100)
  noStroke()
  rect(windowWidth/2,0+windowHeight/12,windowWidth,windowHeight/6)
  rect(windowWidth/2,(windowHeight/5)*4,windowWidth/3,windowHeight/4)

  textSize(windowWidth/24)
  textAlign(CENTER,CENTER)
  noStroke()
  fill(255)
  text("Type-Tack",windowWidth/2,0+windowHeight/12)

  textAlign(CENTER,CENTER)
  textSize(windowWidth/16)
  fill(255)
  text(wort[count],windowWidth/2,windowHeight/2-windowHeight/8)

  textSize(windowWidth/64)
  textAlign(CENTER,CENTER)
  fill(255)
  text("Time left: " + sec + " sec",windowWidth/2,windowHeight/2+windowHeight/10)
  text("Score: " + score, windowWidth/2,windowHeight/2+windowHeight/7)

  text("Type the word befor the        runs out:", windowWidth/2,windowHeight/2-windowHeight/4)
  fill(0,255,0)
  text("time", windowWidth/2+windowWidth/19.5,windowHeight/2-windowHeight/4)
  fill(255)
  text("To start playing press the Textbox.",windowWidth/2,(windowHeight/5)*4-windowHeight/40)
  text("Have fun!",windowWidth/2,(windowHeight/5)*4+windowHeight/40)
  
  
  input.position(windowWidth/2,windowHeight/2)
  input.size(windowWidth/5.2)
  input.input(myInputEvent)
  input.center()
  input.style('font-size', windowHeight/30 + 'px')
  input.style('padding' , '10px')
  input.style('border' , '3px solid black')

  function myInputEvent() {
    if(wort[count]==this.value()){
      input.value("")
      sec+=2
      score++
      count=int(random(370))
      
    }

    
    
  }

  if(sec<=0){
    screen=2
    clearInterval(interval)
  }

}else if(screen==2){

  

  fill(200)
  rectMode(CENTER)
  rect(windowWidth/2,windowWidth/2,windowWidth/7,windowHeight/7)

  background(50,50,60) 

  rectMode(CENTER)
  fill(90,90,100)
  noStroke()
  rect(windowWidth/2,0+windowHeight/12,windowWidth,windowHeight/6)
  rect(windowWidth/2,(windowHeight/5)*4,windowWidth/3,windowHeight/4)
  fill(50,50,60)
  stroke(0)
  strokeWeight(windowWidth/600)
  rect(windowWidth/2,(windowHeight/5)*4+windowHeight/30,windowWidth/6,windowHeight/15)


  textSize(windowWidth/24)
  textAlign(CENTER,CENTER)
  noStroke()
  fill(255)
  text("Type-Tack",windowWidth/2,0+windowHeight/12)

  textAlign(CENTER,CENTER)
  textSize(windowWidth/16)
  fill(255)
  text(wort[count],windowWidth/2,windowHeight/2-windowHeight/8)

  textSize(windowWidth/64)
  textAlign(CENTER,CENTER)
  fill(255)
  text("Time left: " + sec + " sec",windowWidth/2,windowHeight/2+windowHeight/10)
  text("Score: " + score, windowWidth/2,windowHeight/2+windowHeight/7)

  text("Type the word befor the        runs out:", windowWidth/2,windowHeight/2-windowHeight/4)
  fill(0,255,0)
  text("time", windowWidth/2+windowWidth/19.5,windowHeight/2-windowHeight/4)
  fill(255)
  text("Sorry you lost.",windowWidth/2,(windowHeight/5)*4-windowHeight/30)
  textSize(windowWidth/30)
  text("Try again?",windowWidth/2,(windowHeight/5)*4+windowHeight/30)
  
  
  input.position(windowWidth/2,windowHeight/2)
  input.size(windowWidth/5.2)
  input.input(myInputEvent)
  input.center()
  input.style('font-size', windowHeight/30 + 'px')
  input.style('padding' , '10px')
  input.style('border' , '3px solid black')

  function myInputEvent() {
    
  }

  if(mouseX > windowWidth/2-windowWidth/12  && mouseX < windowWidth / 2+windowWidth/12  && mouseY > (windowHeight/5)*4 && mouseY < (windowHeight/5)*4+windowHeight/15){
    cursor(HAND);
    
  }else{
    cursor(ARROW);
  }
  
}

}

function mouseClicked(){
  if(screen == 0 && mouseX > windowWidth / 2-windowWidth/10  && mouseX < windowWidth / 2+windowWidth/10  && mouseY > windowHeight /2-windowHeight/30 && mouseY < windowHeight / 2+windowHeight/30){
    screen = 1;
    interval= setInterval(Timer, 1000);
}else if(screen==2 && mouseX > windowWidth/2-windowWidth/12  && mouseX < windowWidth / 2+windowWidth/12  && mouseY > (windowHeight/5)*4 && mouseY < (windowHeight/5)*4+windowHeight/15){
  screen = 0;
  sec=5
  input.value("")
  score=0
  count=int(random(370))
}
}

function Timer(){
  sec--
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}