function setup() {
  createCanvas(600, 600);
  background(50);
}


function draw() {
  // i removed the stroke because for this particular drawing, i don't want that to be used...
  noStroke();
  // this is the left side of the graphic
  fill(225); // top left side square
  quad(100, 200, 200, 100, 300, 200, 200, 300);
  fill(175); // most left side square
  quad(100, 200, 100, 300, 200, 400, 200, 300);
  fill(200); // left side middle square
  quad(200, 300, 200, 400, 300, 300, 300, 200);
  fill(150); // bottom left triangle
  quad(200, 400, 300, 500, 300, 400, 300, 300);

  // this is the right side of the graphic
  fill(215); // top right side square
  quad(300, 200, 400, 100, 500, 200, 400, 300);
  fill(165); // most right square
  quad(500, 200, 500, 300, 400, 400, 400, 300);
  fill(190); // right side middle square
  quad(300, 200, 300, 300, 400, 400, 400, 300);
  fill(140); // bottom right triangle
  quad(300, 300, 300, 400, 300, 500, 400, 400);
  
  // my signature xD
  strokeWeight(5);
  stroke(75);
  line(595,595,595,570);
  line(595,595,580,595);
  line(580,595,580,570);
  line(580,595,565,595);
  line(565,595,565,570);
  line(565,595,550,595);
  line(550,595,550,570);
  line(550,570,540,570);
  line(540,570,540,595);
  line(550,595,530,595);
  line(525,595,525,570);
  line(525,595,515,595);
  line(525,570,515,570);
  line(495,570,505,570);
  line(495,570,495,580);
  line(495,580,505,580);
  line(505,580,505,595);
  line(505,595,485,595);
  line(480,595,480,570);
}
