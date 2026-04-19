// p5play physics example
// same behavior as 07_physics, but using p5play instead of Matter.js

// globals
let boxes = [];
let num_boxes = 2;
let size_square = 64;
let bounciness = 0.99;
let drag = 0.5;           // slows boxes down over time (linear damping)
let density = 0.1;
let gravity_x = 0;
let gravity_y = 1;
let max_throw_speed = 25;

// drag state
let dragBox = null;
let lastMouse;
let prevMouse;

// setup — runs once at the start
function setup() {

  // create the p5.js canvas
  createCanvas(600, 600);

  // set gravity
  world.gravity.x = gravity_x;
  world.gravity.y = gravity_y;

  // create 4 invisible walls around the canvas edges
  let wall_thickness = 40;

  let topWall = new Sprite(width / 2, -wall_thickness / 2, width, wall_thickness, 'static');
  topWall.color = color(0);
  topWall.stroke = color(0);
  topWall.bounciness = 1;
  topWall.friction = 0;

  let bottomWall = new Sprite(width / 2, height + wall_thickness / 2, width, wall_thickness, 'static');
  bottomWall.color = color(0);
  bottomWall.stroke = color(0);
  bottomWall.bounciness = 1;
  bottomWall.friction = 0;

  let leftWall = new Sprite(-wall_thickness / 2, height / 2, wall_thickness, height, 'static');
  leftWall.color = color(0);
  leftWall.stroke = color(0);
  leftWall.bounciness = 1;
  leftWall.friction = 0;

  let rightWall = new Sprite(width + wall_thickness / 2, height / 2, wall_thickness, height, 'static');
  rightWall.color = color(0);
  rightWall.stroke = color(0);
  rightWall.bounciness = 1;
  rightWall.friction = 0;

  // create the starting boxes, spread evenly across the canvas
  for (let i = 0; i < num_boxes; i++) {
    let x = map(i + 0.5, 0, num_boxes, 0, width);
    let box = new Sprite(x, height / 2, size_square, size_square);
    box.bounciness = bounciness;
    box.drag = drag;
    box.density = density;
    box.color = color(255);
    box.stroke = color(0, 0);
    box.rotationLock = false;
    boxes.push(box);
  }

  // vectors to track mouse movement speed
  lastMouse = createVector(0, 0);
  prevMouse = createVector(0, 0);
}

// draw — runs every frame
function draw() {

  // remember mouse position from last frame and this frame
  prevMouse.set(lastMouse.x, lastMouse.y);
  lastMouse.set(mouseX, mouseY);

  // if we are dragging a box, move it towards the mouse
  if (dragBox) {
    let half = size_square / 2;
    let tx = constrain(mouseX, half, width - half);
    let ty = constrain(mouseY, half, height - half);
    dragBox.moveTowards(tx, ty, 0.2);
  }

  // clear the screen
  background(0);

  // draw all boxes with custom appearance
  for (let i = 0; i < boxes.length; i++) {
    let b = boxes[i];

    // green when dragged, white otherwise
    if (b === dragBox) {
      b.color = color(0, 255, 0);
    } else {
      b.color = color(255);
    }
  }
}

// mousePressed — when you click on a box, start dragging it
function mousePressed() {

  // check if the mouse is inside any box
  let hit = null;
  for (let i = boxes.length - 1; i >= 0; i--) {
    let b = boxes[i];
    if (mouseX > b.x - size_square / 2 && mouseX < b.x + size_square / 2 &&
        mouseY > b.y - size_square / 2 && mouseY < b.y + size_square / 2) {
      hit = b;
      break;
    }
  }

  // if no box was clicked, do nothing
  if (!hit) return;

  dragBox = hit;
}

// mouseReleased — let go of the box and throw it
function mouseReleased() {

  // if we are not dragging anything, do nothing
  if (!dragBox) return;

  // calculate throw velocity from mouse movement
  let vx = lastMouse.x - prevMouse.x;
  let vy = lastMouse.y - prevMouse.y;

  // limit the speed so boxes don't fly through walls
  let speed = Math.hypot(vx, vy);
  if (speed > max_throw_speed) {
    vx = (vx / speed) * max_throw_speed;
    vy = (vy / speed) * max_throw_speed;
  }

  // apply the throw velocity to the box
  dragBox.vel.x = vx;
  dragBox.vel.y = vy;

  // clear drag state
  dragBox = null;
}
