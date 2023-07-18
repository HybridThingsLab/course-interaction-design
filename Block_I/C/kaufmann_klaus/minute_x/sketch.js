let d, h, m, s;
let s1, s2, m1, m2;

let lineAmount = 500; //500
let strength = 400; // 300
let maxFrequency = 30; //30
let thickness = 4; //6
let curveStrength = 100; //100

let mf = maxFrequency;
let frq1, frq2;
let hue;

function setup() {
  createCanvas(800, 800);
  smooth();
  frameRate(24);
  colorMode(HSL, 100);
  updateTime();
  frq1 = abs(map(s % mf, 0, mf, -mf / 2, mf / 2)) + 1;
  frq2 = abs(map((s + (mf / 2)) % mf, 0, mf, -mf / 2, mf / 2)) + 1;
  hue = s2*10;
}

function draw() {
  updateTime();

  background("white");

  noFill();
  let hueLerpSpd = constrain(1.2 / frameRate(), 0, 1);
  hue = lerp(hue,m2*10,hueLerpSpd);
  let col = color(hue, 50, 55);
  col.setAlpha(25);
  stroke(col);
  strokeWeight(thickness);

  let frqLerpSpd = constrain(2.4 / frameRate(), 0, 1);

  frq1 = lerp(
    frq1,
    abs(
      map(s % mf, 0, mf, -mf / 2, mf / 2)) + 1,
    frqLerpSpd
  );

  frq2 = lerp(
    frq2,
    abs(
      map((s + (mf / 2)) % mf, 0, mf, -mf / 2, mf / 2)) + 1,
    frqLerpSpd
  );

  drawBezier(lineAmount, strength);
}

function drawBezier() {
  let la = lineAmount;
  let str1 = strength / (frq1);
  let str2 = strength / (frq2);

  let csMap = map(curveStrength, 0, 100, 0, width / 2);

  for (let i = 0; i < la; i++) {
    let iMap = map(i, 0, la, -height * 0.2, height * 1.2);


    let offset2 = sin(map(i, 0, la, (TWO_PI * frq2) * 0.25, (TWO_PI * frq2) * 0.75)) * str2;
    let offset1 = sin(map(i, 0, la, (TWO_PI * frq1) * 0.25, (TWO_PI * frq1) * 0.75)) * str1;


    let ax1 = 0;
    let ay1 = iMap;

    let cx1 = 0 + csMap;
    let cy2 = iMap + offset1;

    let ax2 = width;
    let ay2 = iMap;

    let cx2 = width - csMap;
    let cy1 = iMap + offset2;

    bezier(ax1, ay1, cx1, cy1, cx2, cy2, ax2, ay2);
  }
}
function updateTime() {
  d = day();
  h = hour();
  m = minute();
  s = second();

  s1 = floor(s / 10);
  s2 = s % 10;
  m1 = floor(m / 10);
  m2 = m % 10;
}