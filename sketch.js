let whateverIWant = 20;
let myText = 'hello';

let myCounter = 0;

let anotherVariable = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200, 120, 40);
}

function draw() {
  whateverIWant = mouseX * mouseY / windowWidth;
  
  // x, y, w, h
  fill(whateverIWant, 20, anotherVariable);
  noStroke();

  if (mouseY > windowHeight / 2) {
    ellipse(mouseX, mouseY, 120, 120);
  } else {
    rect(mouseX - 60, mouseY - 60, 120, 120);
  }

  fill(255);
  if (mouseX > 200) {
    myText = 'yes';
  } else {
    myText = 'no';
  }

  anotherVariable++;

  if (anotherVariable >= 255) {
    anotherVariable = 0;
  }

  textSize(30)
  
  text(myCounter + ' clicks', mouseX - 40, mouseY);
}

function mousePressed() {
  myCounter++;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(2, 120, 40);
}