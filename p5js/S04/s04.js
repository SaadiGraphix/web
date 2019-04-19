
var triAuto = {
  a: 250,
  b: 200,
  c: 200,
  d: 300,
  e: 300,
  f: 300
  }

var triAuto1 = {
  a: 250 - 150,
  b: 200 - 150,
  c: 200 - 150,
  d: 300 - 150,
  e: 300 - 150,
  f: 300 - 150
  }

var triAuto2 = {
  a: 250 + 150,
  b: 200 + 150,
  c: 200 + 150,
  d: 300 + 150,
  e: 300 + 150,
  f: 300 + 150
  }

var triAuto3 = {
  a: 250 + 150,
  b: 200 - 150,
  c: 200 + 150,
  d: 300 - 150,
  e: 300 + 150,
  f: 300 - 150
  }

var triAuto4 = {
  a: 250 - 150,
  b: 200 + 150,
  c: 200 - 150,
  d: 300 + 150,
  e: 300 - 150,
  f: 300 + 150
  }

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);
  noStroke();
  fill(random(50,255),random(100,255),random(150,255));
  triangle(triAuto1.a, triAuto1.b, triAuto1.c, triAuto1.d, triAuto1.e, triAuto1.f);
  triangle(triAuto2.a, triAuto2.b, triAuto2.c, triAuto2.d, triAuto2.e, triAuto2.f);
  triangle(triAuto3.a, triAuto3.b, triAuto3.c, triAuto3.d, triAuto3.e, triAuto3.f);
  triangle(triAuto4.a, triAuto4.b, triAuto4.c, triAuto4.d, triAuto4.e, triAuto4.f);
  triangle(triAuto.a, triAuto.b, triAuto.c, triAuto.d, triAuto.e, triAuto.f);

  //triAuto.b--;
  //triAuto.c--;
  //triAuto.d++;
  //triAuto.e++;
  //triAuto.f++;
}
