//globals
let milliseconds, hundreds;
//let millisecondsPerSecond ,seconds;
 

// called once on load
//function preload() {

  // ++ load data here ++ //
//}

// called once when loaded
function setup() {

  // init canvas
    // init canvas
    //colorMode(RGB,255,255,255,1)
    canvas = createCanvas(800, 800).parent('canvas');
    frameRate(100);
    background(201,245,255);
  
    tierArray = new Array(14);
  
    tierArray[0] = new Tier("blauwahl", 10,12,"rgba(171, 219, 248, 0.7)",
                                              "rgba(156, 199, 224, 0.7)",
                                              "rgba(156, 199, 224, 1)",
                                              "rgba(156, 199, 224, 1)",14000, 450, 0.06);
    print(tierArray[0]);
  
    tierArray[1] = new Tier("elefant", 30, 40,"rgba(152, 158, 169, 0.7)",
                                              "rgba(99, 103, 109, 0.7)",
                                              "rgba(152, 158, 169, 0.3)",
                                              "rgba(152, 158, 169, 0.0)", 6000, 300, 0.18);
    print(tierArray[1]);
  
    tierArray[2] = new Tier("giraffe", 150, 60,"rgba(240, 185, 55,0.7)",
                                               "rgba(184, 143, 46, 0.7)",
                                               "rgba(98, 56, 20, 0.9)",
                                               "rgba(142, 110, 36, 0)", 1900, 250, 0.7);
    print(tierArray[2]);
  
    tierArray[3] = new Tier("pferd", 34, 45,"rgba(111, 55, 6, 0.7)",
                                            "rgba(61, 32, 6, 0.7)",
                                            "rgba(44, 22, 4, 0.7)",
                                            "rgba(110, 57, 11, 0)",800,210,0.13);
    print(tierArray[3]);
  
    tierArray[4] = new Tier("kuh", 66, 25,"rgba(248, 248, 233, 0.9)",
                                          "rgba(248, 248, 220, 0.9)",
                                          "rgba(36, 36, 34, 0.7)",
                                          "rgba(55, 55, 52, 0)",650,190, 0.35);
    print(tierArray[4]);
  
    tierArray[5] = new Tier("schwein", 80,16,"rgba(245, 204, 220, 0.8)",
                                              "rgba(242, 177, 203, 0.7)",
                                              "rgba(219, 151, 178, 0.5)",
                                              "rgba(242, 177, 203, 0.7)",100,150,0.4);
    print(tierArray[5]);
  
    tierArray[6] = new Tier("schaf",75,40,"rgba(252, 242, 222, 0.9)",
                                          "rgba(245, 235, 201, 0.9)",
                                          "rgba(231, 215, 185, 0.9)",
                                          "rgba(245, 231, 204, 0)",75,140,0.35);
    print(tierArray[6]);
    
    tierArray[7] = new Tier("mensch", 70, 13,
                                              "rgba(255, 106, 203, 0.7)",
                                              "rgba(187, 0, 255, 0.7)",
                                              "rgba(106, 0, 255, 0.7)",
                                              "rgba(76, 0, 255, 0.7)",
                                               70, 120, 0.4 );
    print(tierArray[7]);

    tierArray[8] = new Tier("gepart", 185,105,"rgba(255, 251, 25, 0.7)",
                                              "rgba(251, 194, 63, 0.7)",
                                              "rgba(41, 20, 1, 0.8)",
                                              "rgba(212, 165, 55, 0.7)",50,100,0.8);
    print(tierArray[8]);

    tierArray[9] = new Tier("hund", 90,60,"rgba(248, 195, 91, 0.7)",
                                          "rgba(192, 98, 17, 0.7)",
                                          "rgba(96, 82, 33, 0.7)",
                                          "rgba(77, 65, 26, 0.7)",30,80,0.5);
    print(tierArray[9]);

    tierArray[10] = new Tier("katze", 190,48, "rgba(77, 72, 63, 0.7)",
                                              "rgba(50, 46, 39, 0.7)",
                                              "rgba(32, 32, 32, 0)",
                                              "rgba(16, 116, 0, 0.7)",5,60,1);
    print(tierArray[10]);

    tierArray[11] = new Tier("hase", 135,50,"rgba(255, 234, 180, 0.7)",
                                            "rgba(180, 146, 63, 0.7)",
                                            "rgba(145, 139, 124,0.7)",
                                            "rgba(255, 234, 180, 0)",4,55,0.6);
    print(tierArray[11]);

    tierArray[12] = new Tier("maus", 1300,13,"rgba(96, 91, 86, 0.7)",
                                             "rgba(96, 82, 33, 0.7)",
                                             "rgba(55, 55, 52, 0)",
                                             "rgba(32, 32, 32, 0.7)",0.017,40,6);
    print(tierArray[12]);

    tierArray[13] = new Tier("kolibri", 1000, 98, "rgba(0, 255, 208, 1)",
                                                  "rgb(153, 255, 0)",
                                                  "rgba(192, 53, 242, 1)",
                                                  "rgba(192, 53, 242, 1)",0.002,30,6);
    print(tierArray[13]);
    

}

//KLASSE der Herzenstiere
class Tier {
  constructor(name, hz, v, color1, color2, color3, color4, weight, appSize, indPulsFaktor) {
    this.indPulsFaktor = 1.3*indPulsFaktor;
    this.name = name;
    this.hz = hz; //schlaege pro minute
    this.mills = 60000/hz;
    this.weight = weight;
    this.color1 = color(color1);
    this.color2 = color(color2);
    this.color3 = color(color3);
    this.color4 = color(color4);
    this.x = random(800); //noch skalieren bzw nicht so wichtig
    this.y = random(800);
    this.v = v/25
    this.v2 = random(1);
    this.v3 = 1-this.v2;
    this.appSize = 1.5*appSize;
    this.checkSize = appSize;
  }
  zeichne(){
    fill(this.color1);
    ellipse(this.x, this.y, this.appSize, this.appSize);
    fill(this.color2);
    ellipse(this.x, this.y, this.checkSize-3 ,this.checkSize-3);   //-this.checkSize/10 //this.appSize-this.appSize*2/10 ,this.appSize-this.appSize*2/10);//this.checkSize-3 ,this.checkSize-3);   //-this.checkSize/10
    fill(this.color3);
    ellipse(this.x, this.y, this.checkSize-this.checkSize*5/10 ,this.checkSize-this.checkSize*5/10); //this.appSize-this.appSize*7/10 ,this.appSize-this.appSize*7/10);
    fill(this.color4);
    ellipse(this.x, this.y, this.checkSize-this.checkSize*8/10 ,this.checkSize-this.checkSize*8/10);
  }

}

// called every frame
function draw() {

  //print(tierArray[1].appsize); CHECKE APPSIZE
  //print("checksize: " + tierArray[0].checkSize);
  //print("appSize: " + tierArray[0].appSize);

  colorMode(RGB,255,255,255,1);
  background(193,255,166); //hell mintgrün
  noStroke();

  const faktor = 0.01; //rumspielen mit Radius

  //set values
  
  milliseconds = int(millis()%60000); // counts milliseconds per minute before reset
  hundreds = int(milliseconds%100); //count to 100 milliseconds before restart
  //millisecondsPerSecond = int(milliseconds%1000); //counts milliseconds per second before reset
  //seconds = int(milliseconds/1000); //counts seconds per minute

  ///////////////////////ZEICHNE////////////////////////////
  for (let i = 0; i < 14; i++) {  //große Tiere zeichnen
    tierArray[i].zeichne();


    ////////BOUNCE///////////////////////////////////////////////
    
    if(tierArray[i].x <0 || tierArray[i].x >800) {
      tierArray[i].v2 = -tierArray[i].v2; 
    }
    if(tierArray[i].y <0 || tierArray[i].y >800 ) {
      tierArray[i].v3 = -tierArray[i].v3; 
    }


    ///////Bewegen///////////////////////////////////////////////

    tierArray[i].x = tierArray[i].x + tierArray[i].v2 * tierArray[i].v;           //geschwindigkeit x y
    tierArray[i].y = tierArray[i].y + tierArray[i].v3 * tierArray[i].v;


    ////////Herzschlag animieren/////////////////////////////////

    //print("benoetigte ms fuer einen herzschlag: "+ int(60000/tierArray[i].hz));                                     //millisekunden, die pro herzschlag vergehen
    
    if((milliseconds%int((60000/tierArray[i].hz))) > 0 && (milliseconds%int((60000/tierArray[i].hz))) <= int(60000/tierArray[i].hz/2)) {                         //die erste haelfte eines herzschlags
      //print(milliseconds);
      //print("modulor:"+ milliseconds%(60000/tierArray[i].hz));
      tierArray[i].appSize = (tierArray[i].appSize)  + (faktor * tierArray[i].checkSize * tierArray[i].indPulsFaktor) ;   //size vergroeßern
      //print("hz vergroeßert auf: " + tierArray[i].hz);   
    } else {
      tierArray[i].appSize = (tierArray[i].appSize) - (faktor * tierArray[i].checkSize * tierArray[i].indPulsFaktor) ;   // * tierArray[i].hz/10000  size  verkleinern
      //print("hz verkleinert auf: " +tierArray[i].hz);
    }


    ////////Checkt ab und zu Size, um Frame Intoleranzen zu vermeiden///////

    //print("(milliseconds%int((60000/tierArray[i].hz))) = " + (milliseconds%int((60000/tierArray[0].hz))) + "  int(60000/tierArray[i].hz) = " + int(60000/tierArray[0].hz));
    if(  (milliseconds%int((60000/tierArray[i].hz)))  >  (int(60000/tierArray[i].hz))-10 &&  (milliseconds%int((60000/tierArray[i].hz)))  <  (int(60000/tierArray[i].hz))  )  {
      //print("(milliseconds%int((60000/tierArray[i].hz))) = " + (milliseconds%int((60000/tierArray[0].hz))) + "  int(60000/tierArray[i].hz) = " + int(60000/tierArray[0].hz));
      tierArray[i].appSize = tierArray[i].checkSize;
      //print("check for tierArray "+ tierArray[i].name + " happend " + millis());
    }
  }
}




