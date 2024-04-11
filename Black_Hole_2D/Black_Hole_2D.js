let photons = new Array();
function setup() {
  createCanvas(720, 720);
  black_hole = new Black_hole(5);
  
  for(let i = 0; i<50; i++){    
    photons.push(new Photon(random(1, 3)*black_hole.mass/2, random(0, 20)*black_hole.mass, random(width/2-200, width/2), random(0, 2*PI), black_hole.pos.x, black_hole.pos.y));
  }
  
}


function draw() {
  background(0, 0, 0, 100);
  //black_hole.draw_horizon();
  photons.forEach( (photon) =>{
      photon.render();
      photon.update(black_hole.force_massless(photon), black_hole.mass);
      if(!photon.visible){
        photon.E = random(0.5, 1.5)*black_hole.mass;
        photon.Lz = random(20, 50)*black_hole.mass; 
        photon.r = random(width/2-300, width/2);
        photon.phi = random(0, 2*PI);
        photon.visible = true;
      }
    }
   );
  
}

class Black_hole{
  constructor(mass){
    this.mass = mass;
    this.pos = createVector(width/2, height/2);
  }
  
  draw_horizon(){
    noStroke(10);
    ellipse(this.pos.x, this.pos.y, 2*2*this.mass, 2*2*this.mass);
  }
  
  force_massless(photon){
     return -(photon.Lz**2)/(photon.r**3)+3*(photon.Lz**2 * this.mass)/(photon.r**4);
  }
}

class Photon{
  constructor(E, Lz, r, phi, black_hole_x, black_hole_y){
    this.E = E;
    this.Lz = Lz;
    this.pos = createVector(black_hole_x+r*cos(phi), black_hole_y+r*sin(phi));
    this.size = 5;
    this.r_vel = -this.E/Math.sqrt(2);
    this.r = r;
    this.phi = phi;
    this.visible = true;
    this.center = createVector(black_hole_x, black_hole_y);
  }
  
  update(force, black_hole_mass){
    if(this.r>2*black_hole_mass){
      this.apply_force(force);
    
      this.r_vel += this.r_acceleration;
      this.r += this.r_vel;
      this.phi += this.phi_vel;
      
      this.pos.x = this.center.x + this.r*cos(this.phi);
      this.pos.y = this.center.y + this.r*sin(this.phi);
    }else{
      this.visible = false;
    }
    
    if(-10>this.pos.x || this.pos.x>width+10){
      this.visible = false;
    }
    if(-10>this.pos.y || this.pos.y>height+10){
      this.visible = false;
    }
    
  }
  
  render(){
    if(this.visible){
      push()
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
      pop()
    }
  }
  
  apply_force(force){
    this.r_acceleration = force;
    this.phi_vel = this.Lz/this.r**2;
  }
}
