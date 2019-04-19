var a = 0;
var b = 2;

function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  noStroke();
  rect(a, 0, 25, 400);
  if (a>width) {
    b = -5;
  } 
  a = a + b;
  fill(random(0,255),random(50,255),random(100,255));
  stroke(0);
  strokeWeight(15);
  line(100, 100, 200, 100); // S
  line(100, 100, 100, 200);
  line(100, 200, 200, 200);
  line(200, 200, 200, 300);
  line(200, 300, 100, 300);
  line(250, 300, 250, 100); // A
  line(250, 100, 350, 100);
  line(350, 100, 350, 300);
  line(250, 200, 350, 200);
  line(400, 300, 400, 100); // A
  line(400, 100, 500, 100);
  line(500, 100, 500, 300);
  line(400, 200, 500, 200);
  line(550, 100, 550, 300); // D
  line(550, 300, 625, 300);
  line(625, 300, 650, 275);
  line(650, 275, 650, 125);
  line(650, 125, 625, 100);
  line(625, 100, 550, 100);
  line(700, 100, 700, 300); // I
}
