let targetAngle = 0.0;
let currentAngle = 0.0;
let x = 0.0;
let y = 0.0;
let smoothSpeed = 0.05;
let scl = 250.0;
const count = 2;
let iToTheta;
let farbe;
let speed;

function setup() {
	createCanvas(windowWidth, windowHeight);
	x = width * 0.5;
	y = height * 0.5;
	iToTheta = TWO_PI / count;
	background(0);
	farbe = 255;
	speed = 2;
	
}

function draw() {
	targetAngle = atan2(mouseY - y, mouseX - x);
	currentAngle = lerpAngle(currentAngle, targetAngle, smoothSpeed);
	
	//background(0);
	
	noStroke();
	beginShape();
	for (let i = 0; i < count; ++i) {
		const theta = currentAngle + i * iToTheta;
		vertex(x + cos(theta) * scl, y + sin(theta) * scl);
	}
	endShape(CLOSE);
	
	farbe -= speed;
	if (farbe < 0 || farbe > 255) {
		speed = -speed;
	}

	strokeWeight(5);
	noStroke(); //direction facing the mouse
	line(x, y, x + cos(targetAngle) * scl,
		y + sin(targetAngle) * scl);
	//noStroke();
	stroke(farbe);//direction where it left off
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
    resizeCanvas(windowWidth, windowHeight);
    x = width * 0.5;
    y = height * 0.5;
	background(0);
}
