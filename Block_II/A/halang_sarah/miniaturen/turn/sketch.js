let targetAngle = 0.0;
let currentAngle = 0.0;
let x = 0.0;
let y = 0.0;
let smoothSpeed = 0.05;
let scl = 25.0;
const count = 3;
let iToTheta;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = width * 0.5;
	y = height * 0.5;
	iToTheta = TWO_PI / count;
}

function draw() {
	targetAngle = atan2(mouseY - y, mouseX - x);
	currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
	
	background(0);
	
	noStroke();
    fill(255);
	beginShape();
	for (let i = 0; i < count; ++i) {
		const theta = currentAngle + i * iToTheta;
		vertex(x + cos(theta) * scl, y + sin(theta) * scl);
	}
	endShape(CLOSE);
	
	fill(255, 0, 0);
	noStroke();
	ellipse(x + cos(currentAngle) * scl, y + sin(currentAngle) * scl, 5); //Punkt
	
	strokeWeight(2);
	stroke(color(255, 0, 0)); //direction facing the mouse
	line(x, y, x + cos(targetAngle) * scl,
		y + sin(targetAngle) * scl);

	noStroke();//direction where it left off
	line(x, y, x + cos(currentAngle) * scl,
		y + sin(currentAngle) * scl);
}

// Linear interpolation of an angle.
function lerpAngle(a, b, step) {
	// Prefer shortest distance,
	const delta = b - a;
	if (delta == 0.0) {
		return a;
	} else if (delta < -PI) {
		b += TWO_PI;
	} else if (delta > PI) {
		a += TWO_PI;
	}
	return (1.0 - step) * a + step * b;
}

function windowResized() {
	resizeCanvas(width, height);
}