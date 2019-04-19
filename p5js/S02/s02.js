var bg = false;

function setup() {
  createCanvas(750, 500);
}

function draw() {
  if (bg) {
    background(255);
  } else {
    background(0);
  }
  stroke(0, 255, 0);
  noFill();
  strokeWeight(10);
  if (mouseX > 275 && mouseX < 475 && mouseY > 200 && mouseY < 300) {
    fill(255, 0, 0);
  }
  if (mouseIsPressed) {
    fill(0, 255, 0);
  }
  rectMode(CENTER);
  rect(375, 250, 200, 100);
}

function mousePressed() {
  if (mouseX > 275 && mouseX < 475 && mouseY > 200 && mouseY < 300) {
    bg = !bg;
  }
}

//SaadiGFX
