var stars = [];

var speed;

function setup() {

createCanvas(windowWidth -3 ,windowHeight -3);
fill(255);

for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
}
}

function draw() {
  // put drawing code here
  background(51,51,51);

  speed = 2;
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }

  textAlign(CENTER);
  fill(255);
  textSize(30);
  text('The Office', width /16 - 100, height / 16 - 45);
  text('David A Bacharach',  width /16- 100, height / 16 + 15);
  textSize(18);
  text('of',  width /16- 100, height / 16 - 20);
}
