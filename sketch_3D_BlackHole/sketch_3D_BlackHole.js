var black_hole;

function setup() {
  createCanvas(480, 480, WEBGL);
  noStroke();
  black_hole = new Black_hole(3, createVector(0, 0, 0));
}


function draw() {
  background(0);
  orbitControl();
  black_hole.render();
  black_hole.act_force(createVector(0,0,0));
  black_hole.update();
}
