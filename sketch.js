var s = 0;
var m = 0;
var h = 0;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  setInterval(Second, 1000);
  setInterval(Minute, 60000);
  setInterval(Hour, 3600000);
}

function draw() {

  noFill();
  stroke(26, 15, 78);
  strokeWeight(5);
  background(255);
  translate(width / 2, height / 2);
  circle(0, 0, 450);
  //seconds
  push();
  stroke(	68, 39, 206);
  rotate(s);
  line(0, 0, 0, -200);
  pop();
  //minutes
  push();
  stroke(119, 97, 225);
  rotate(m);
  line(0, 0, 0, -150);
  pop();
  //hours
  push();
  stroke(174, 161, 237);
  rotate(h);
  line(0, 0, 0, -100);
  pop();

  var h12 = createElement('h1', '12')
  h12.position(230, 10)

  var h3 = createElement('h1', '3')
  h3.position(450, 210)

  var h6 = createElement('h1', '6')
  h6.position(240, 410)

  var h9 = createElement('h1', '9')
  h9.position(40, 210)

  var h1 = createElement('h1', '1')
  h1.position(340, 35)

  var h2 = createElement('h1', '2')
  h2.position(420, 110)

  var h4 = createElement('h1', '4')
  h4.position(420, 310)

  var h5 = createElement('h1', '5')
  h5.position(340, 385)

  var h7 = createElement('h1', '7')
  h7.position(140, 385)

  var h8 = createElement('h1', '8')
  h8.position(70, 315)

  var h10 = createElement('h1', '10')
  h10.position(70, 110)

  var h11 = createElement('h1', '11')
  h11.position(140, 35)
}

function Second() {
  s = s + 6;
}

function Minute() {
  m = m + 6;
}

function Hour() {
  h = h + 30;
}