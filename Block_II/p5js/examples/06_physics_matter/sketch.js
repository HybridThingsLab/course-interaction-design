// Matter.js is a 2D physics engine.
// We import the modules we need from it:
// - Engine:     runs the physics simulation
// - Bodies:     creates physical shapes (rectangles, circles, etc.)
// - Body:       controls a single body (set position, velocity, etc.)
// - Composite:  adds or removes objects from the physics world
// - Constraint: connects two bodies with an invisible "rope" or "spring"
const { Engine, Bodies, Body, Composite, Constraint } = Matter;

// --- globals (tweak these to change the behavior) ---

let engine;                  // the physics engine
let boxes = [];              // array that stores all spawned boxes
let num_boxes = 2;           // how many boxes to create at start
let size_square = 64;        // width and height of each box in pixels
let restitution = 0.99;      // bounciness (0 = no bounce, 1 = full bounce)
let friction = 0.001;        // surface friction when boxes slide against each other
let density = 0.1;           // mass per area — heavier boxes are harder to throw
let gravity_x = 0;           // horizontal gravity (0 = none)
let gravity_y = 1;           // vertical gravity (1 = downward)
let gravity_scale = 0.000001; // overall gravity strength
let max_throw_speed = 25;    // speed limit when throwing a box

// --- drag state ---

let dragConstraint = null;   // the invisible spring connecting mouse to box
let dragBox = null;          // which box is currently being dragged
let lastMouse;               // mouse position this frame
let prevMouse;               // mouse position previous frame

// setup — runs once at the start
async function setup() {

  // create the p5.js canvas
  createCanvas(600, 600);
  rectMode(CENTER);

  // create the physics engine and set gravity
  engine = Engine.create();
  engine.gravity.x = gravity_x;
  engine.gravity.y = gravity_y;
  engine.gravity.scale = gravity_scale;

  // create 4 invisible walls around the canvas edges
  // so boxes cannot escape the screen
  let wall_thickness = 40;
  let wallOpts = { isStatic: true, restitution: 1, friction: 0 };
  Composite.add(engine.world, [
    Bodies.rectangle(width / 2, -wall_thickness / 2, width, wall_thickness, wallOpts),                // top wall
    Bodies.rectangle(width / 2, height + wall_thickness / 2, width, wall_thickness, wallOpts),         // bottom wall
    Bodies.rectangle(-wall_thickness / 2, height / 2, wall_thickness, height, wallOpts),               // left wall
    Bodies.rectangle(width + wall_thickness / 2, height / 2, wall_thickness, height, wallOpts),        // right wall
  ]);

  // create the starting boxes, spread evenly across the canvas
  for (let i = 0; i < num_boxes; i++) {
    let x = map(i + 0.5, 0, num_boxes, 0, width);
    let box = Bodies.rectangle(x, height / 2, size_square, size_square, {
      restitution: restitution,
      friction: friction,
      density: density,
    });
    boxes.push(box);
    Composite.add(engine.world, box);
  }

  // vectors to track mouse movement speed
  lastMouse = createVector(0, 0);
  prevMouse = createVector(0, 0);
}

// draw — runs every frame
function draw() {

  // advance the physics simulation by one step
  Engine.update(engine, Math.min(deltaTime, 1000 / 60));

  // remember mouse position from last frame and this frame
  // (we need both to calculate throw speed later)
  prevMouse.set(lastMouse.x, lastMouse.y);
  lastMouse.set(mouseX, mouseY);

  // if we are dragging a box, move the spring anchor to the mouse
  // constrain keeps it inside the canvas so the box doesn't escape
  if (dragConstraint) {
    let half = size_square / 2;
    dragConstraint.pointA.x = constrain(mouseX, half, width - half);
    dragConstraint.pointA.y = constrain(mouseY, half, height - half);
  }

  // clear the screen
  background(0);

  // draw all boxes
  noStroke();
  for (let i = 0; i < boxes.length; i++) {
    let b = boxes[i];

    // green when dragged, white otherwise
    if (b === dragBox) {
      fill(0, 255, 0);
    } else {
      fill(255);
    }

    // move to the box position, rotate, draw, then reset
    push();
    translate(b.position.x, b.position.y);
    rotate(b.angle);
    rect(0, 0, size_square, size_square);
    pop();
  }
}

// mousePressed — when you click on a box, attach an invisible spring to it
function mousePressed() {

  // check if the mouse is inside any box (check top to bottom)
  let hit = null;
  for (let i = boxes.length - 1; i >= 0; i--) {
    if (Matter.Bounds.contains(boxes[i].bounds, { x: mouseX, y: mouseY })) {
      hit = boxes[i];
      break;
    }
  }

  // if no box was clicked, do nothing
  if (!hit) return;

  // figure out where exactly on the box we clicked
  // (this makes dragging feel natural — the box doesn't snap to center)
  let dx = mouseX - hit.position.x;
  let dy = mouseY - hit.position.y;
  let c = Math.cos(-hit.angle);
  let s = Math.sin(-hit.angle);
  let localX = dx * c - dy * s;
  let localY = dx * s + dy * c;

  // create an invisible spring between the mouse and the grab point on the box
  dragBox = hit;
  dragConstraint = Constraint.create({
    pointA: { x: mouseX, y: mouseY },   // one end follows the mouse
    bodyB: hit,                           // the other end is attached to the box
    pointB: { x: localX, y: localY },    // at the exact spot we clicked
    stiffness: 0.2,                       // how tightly the box follows the mouse
    damping: 0.1,                         // how much the spring movement is slowed
    length: 0,                            // spring wants to have zero length (= stay at mouse)
  });
  Composite.add(engine.world, dragConstraint);
}

// mouseReleased — let go of the box and throw it
function mouseReleased() {

  // if we are not dragging anything, do nothing
  if (!dragConstraint) return;

  // remove the invisible spring
  Composite.remove(engine.world, dragConstraint);

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
  Body.setVelocity(dragBox, { x: vx, y: vy });

  // clear drag state
  dragConstraint = null;
  dragBox = null;
}
