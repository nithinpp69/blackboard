const rows = 12;
const cols = 12;
var board;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  setupBoard();
}

function setupBoard() {
  redraw();
}

function draw() {
  background(0);
}

function mouseDragged() {
  fill(255);
  ellipse(mouseX, mouseY, 60, 60);
}