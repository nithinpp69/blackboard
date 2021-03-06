var board;
var socket;
// var port = process.env.PORT || 3000;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(windowWidth, windowHeight);
  socket = io.connect(window.location.origin);
  socket.on('draw', (data) => {
    noStroke();
    fill(0, 0, 255);
    ellipse(data.x, data.y, 5, 5);
  });
  background(0);
  centerCanvas();
}

function setupBoard() {
  redraw();
}

function wnidowResized() {
  centerCanvas();
}

function mouseDragged() {
  noStroke();
  fill(255);
  socket.emit('draw', { x: mouseX, y: mouseY });
  ellipse(mouseX, mouseY, 5, 5);
}