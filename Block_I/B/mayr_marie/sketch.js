var Node = function(x, y, minX, maxX, minY, maxY) {
  p5.Vector.call(this, x, y, 0);
  this.minX = Number.MIN_VALUE || minX;
  this.maxX = Number.MAX_VALUE || maxX;
  this.minY = Number.MIN_VALUE || minY;
  this.maxY = Number.MAX_VALUE || maxY;
  this.radius = 100; // Radius of impact
  this.ramp = 1; // Influences the shape of the function
  this.strength = -1; // Strength: positive value attracts, negative value repels
  this.damping = 0.5;
  this.velocity = myp5.createVector();
  this.pVelocity = myp5.createVector();
  this.maxVelocity = 10;
};

Node.prototype = Object.create(p5.Vector.prototype);

Node.prototype.attractNodes = function(nodeArray) {
  for (var i = 0; i < nodeArray.length; i++) {
    var otherNode = nodeArray[i];
    // Stop when empty
    if (otherNode === undefined) break;
    // Continue from the top when node is itself
    if (otherNode === this) continue;

    this.attract(otherNode);
  }
};

Node.prototype.attract = function(otherNode) {
  var thisNodeVector = myp5.createVector(this.x, this.y);
  var otherNodeVector = myp5.createVector(otherNode.x, otherNode.y);
  var d = thisNodeVector.dist(otherNodeVector);

  if (d > 0 && d < this.radius) {
    var s = myp5.pow(d / this.radius, 1 / this.ramp);
    var f = s * 10 * this.strength * (1 / (s + 1) + ((s - 3) / 4)) / d;
    var df = thisNodeVector.sub(otherNodeVector);
    df.mult(f);

    otherNode.velocity.x += df.x;
    otherNode.velocity.y += df.y;
  }
};

Node.prototype.update = function() {
  this.velocity.limit(this.maxVelocity);

  this.x += this.velocity.x;
  this.y += this.velocity.y;

  if (this.x < this.minX) {
    this.x = this.minX - (this.x - this.minX);
    this.velocity.x = -this.velocity.x;
  }
  if (this.x > this.maxX) {
    this.x = this.maxX - (this.x - this.maxX);
    this.velocity.x = -this.velocity.x;
  }

  if (this.y < this.minY) {
    this.y = this.minY - (this.y - this.minY);
    this.velocity.y = -this.velocity.y;
  }
  if (this.y > this.maxY) {
    this.y = this.maxY - (this.y - this.maxY);
    this.velocity.y = -this.velocity.y;
  }

  this.velocity.mult(1 - this.damping);
};

Node.prototype.constructor = Node;


var sketch = function(p) {

  // An array with nodes
  var nodes = [];
  var nodes1 = [];
  var nodes2 = [];
  var nodes3 = [];
  var nodes4 = [];
  var nodes5 = [];
  var nodes6 = [];
  var start=false;

  var nodeCount = 200;
  var myFont;
  var f;
  p.preload = function(){
   myFont=p.loadFont("CrimsonText-Semibold.ttf")
     f=p.loadFont("AvenirNextLTPro-Regular.otf");
    }
  p.setup = function() {
    p.background(0);
    p.createCanvas(800, 800);
    p.noStroke();

    // Create nodes
    createNodes();
  };

  p.draw = function() {
    if(p.frameCount/60>=5){
      start=true;
    }
if(start){
    p.fill(0, 20);
    p.rect(0, 0, 800, 800);
    p.textSize(15);
    p.fill(0);
   
    for (var i = 0; i < nodes.length; i++) {
    if(p.frameCount/60>=2){
      nodes[i].attractNodes(nodes);
      nodes[i].update();
      p.fill(254, 1, 154) ;
      p.ellipse(nodes[i].x, nodes[i].y, 10, 10);

    }
      if(p.frameCount/60>=10){
         nodes1[i].attractNodes(nodes1);
      nodes1[i].update();
        p.fill(78, 253, 84)  ;
      p.ellipse(nodes1[i].x+220, nodes1[i].y+200, 10, 10);

      }
       if(p.frameCount/60>=20){
         nodes2[i].attractNodes(nodes2);
      nodes2[i].update();
         p.fill(207, 255, 4) ;
      p.ellipse(nodes2[i].x-200, nodes2[i].y-200, 10, 10);
     
      }
       if(p.frameCount/60>=30){
         nodes3[i].attractNodes(nodes3);
      nodes3[i].update();
         p.fill(65, 253, 254) ;
      p.ellipse(nodes3[i].x+200, nodes3[i].y-200, 10, 10);
      }
       if(p.frameCount/60>=40){
         nodes4[i].attractNodes(nodes4);
      nodes4[i].update();
         p.fill(255, 91, 0);
      p.ellipse(nodes4[i].x, nodes4[i].y, 10, 10);
        
      }
       if(p.frameCount/60>=50){
         nodes1[i].attractNodes(nodes5);
      nodes5[i].update();
         p.fill(255, 95, 31);
      p.ellipse(nodes5[i].x-200, nodes5[i].y-200, 10, 10);
            /*p.text("8% aller Deutschen geben nichts für  Feuerweke aus ",200,750 );*/
      }
       if(p.frameCount/60>=60){
         nodes6[i].attractNodes(nodes6);
      nodes6[i].update();
         p.fill(188, 19, 254) ;
      p.ellipse(nodes6[i].x-200, nodes6[i].y+100, 10, 10);
   
      }
   p.fill(0);
      p.rect(10,620,225,150,30);
  
  p.textFont(f);
       if(p.frameCount/60>=2){
    
      p.fill(254, 1, 154) ;
      p.ellipse(30,645,5,5);
      p.fill(255);
      p.text("2017: 550µg/m³ Feinstaub ",40,650 );
    }
      if(p.frameCount/60>=10){
      
       p.fill(78, 253, 84)  ;
       p.ellipse(30,665,5,5);
       p.fill(255);

         p.text("2018: 160µg/m³ Feinstaub",40,670 );
      }
       if(p.frameCount/60>=20){
    
        p.fill(207, 255, 4) ;
        p.ellipse(30,685,5,5);
       p.fill(255);

          p.text("2019: 110µg/m³ Feinstaub",40,690 );
      }
       if(p.frameCount/60>=30){

         p.fill(65, 253, 254) ;
        p.ellipse(30,705,5,5);
       p.fill(255);

            p.text("2020: 190µg/m³ Feinstaub",40,710 );
      }
       if(p.frameCount/60>=40){
  
         p.fill(255, 91, 0);
         p.ellipse(30,725,5,5);
       p.fill(255);

            p.text("2021: 60µg/m³ Feinstaub",40,730 );
      }

       if(p.frameCount/60>=60){

        p.fill(188, 19, 254) ;
        p.ellipse(30,745,5,5);
       p.fill(255);

            p.text("2022: 40µg/m³ Feinstaub",40,750 );
      }
      
    }
 
}
    else{
      p.background(0);
     // p.textAlign(p.CENTER);
      p.fill(255);
      p.textSize(30);
      p.textFont(myFont);
      p.text("Vom 31. Dezember 2022 bis zum 1. Januar 2023 wurden", 55,370)
      // p.text("wurden 2022 in Deutschland pro Minute 6 Feuerwerke geschossen", 80,410)
      //p.text("wurden im Jahr 2022 in Deutschland", 170,410)
      p.text("in Deutschland pro Minute 6 Feuerwerke geschossen", 70,430)
      
    }
    
  };

  

  function createNodes() {
    nodes = [];
    nodes1 = [];
    nodes2 = [];
    nodes3 = [];
    nodes4 = [];
    nodes5 = [];
    nodes6 = [];
    for (var i = 0; i < nodeCount; i++) {
      nodes.push(new Node(
        p.width / 2 + p.random(-0.5, 0.5),
        p.height / 2 + p.random(-0.5, 0.5),
        5,
        p.width - 5,
        5,
        p.height - 5
      ));
       nodes1.push(new Node(
        p.width / 2 + p.random(-0.5, 0.5),
        p.height / 2 + p.random(-0.5, 0.5),
        5,
        p.width - 5,
        5,
        p.height - 5
      ));
       nodes2.push(new Node(
        p.width / 2 + p.random(-0.5, 0.5),
        p.height / 2 + p.random(-0.5, 0.5),
        5,
        p.width - 5,
        5,
        p.height - 5
      ));
       nodes3.push(new Node(
        p.width / 2 + p.random(-0.5, 0.5),
        p.height / 2 + p.random(-0.5, 0.5),
        5,
        p.width - 5,
        5,
        p.height - 5
      ));
       nodes4.push(new Node(
        p.width / 2 + p.random(-0.5, 0.5),
        p.height / 2 + p.random(-0.5, 0.5),
        5,
        p.width - 5,
        5,
        p.height - 5
      )); 
       nodes5.push(new Node(
        p.width / 2 + p.random(-0.5, 0.5),
        p.height / 2 + p.random(-0.5, 0.5),
        5,
        p.width - 5,
        5,
        p.height - 5
      ));
       nodes6.push(new Node(
        p.width / 2 + p.random(-0.5, 0.5),
        p.height / 2 + p.random(-0.5, 0.5),
        5,
        p.width - 5,
        5,
        p.height - 5
      ));
    }
  }

};

var myp5 = new p5(sketch);
