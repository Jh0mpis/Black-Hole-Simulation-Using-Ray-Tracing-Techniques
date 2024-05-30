let black_hole;
let black_hole1;
let particles = [];

function setup() {
  createCanvas(720, 720, WEBGL);
  noStroke();
  black_hole = new Black_hole(3, createVector(-100, 0, 0), createVector(1 , 1, 0));
  black_hole1 = new Black_hole(5, createVector(100, 0, 0), createVector(-1, -1, 0));
  for(let i =0; i<100; i++){
    particles.push(new Particle(createVector(random(-500,500), random(-500,500), random(-500,500), random(-500,500)), 1, random(-1,1), 0));
  }
  for(let i =0; i<10; i++){
    particles.push(new Particle(createVector(random(-500,500), random(-500,500), random(-500,500), random(-500,500)), 1, random(-1,1), 1));
  }
}


function draw() {
  background(0, 0, 0, 100);
  orbitControl();
  black_hole.render();
  black_hole1.render();
  black_hole.act_force();
  black_hole1.act_force();
  black_hole.update();
  black_hole1.update();
  
  particles.forEach((particle) => {
    particle.render();
    particle.act_force(black_hole);
    particle.update();
    particle.act_force(black_hole1);
    particle.update();
  });
  
}
