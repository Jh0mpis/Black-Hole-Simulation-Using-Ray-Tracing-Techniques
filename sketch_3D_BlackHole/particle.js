class Particle{
  constructor(pos, energy, angular_momentum, k){
    this.pos = pos;
    this.vel = createVector(random(-1,1), random(-1,1), random(-1,1), random(-1,1));
    this.vel.normalize();
    this.acceleration = createVector(0,0,0);
    this.energy = energy;
    this.Lz = angular_momentum;
    this.k = k;
    
    this.spherical_vel = createVector(-1,0,0);
    this.spherical_acc = createVector(0, 0, 0);
  }
  
  render(){
    push();
    if(this.k){
      fill(255, 0, 255);
    }else{
      fill(255, 255, 255);
    }
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(2);
    pop();
  }
  
  update(){
    this.vel.add(this.acceleration);
    this.pos.add(this.vel);
  }
  
  reset(){
    this.pos = createVector(random(-200,200), random(-200,200), random(-200,200), random(-200,200))
    this.vel = createVector(random(-1,1), random(-1,1), random(-1,1), random(-1,1));
    this.vel.normalize();
    this.acceleration = createVector(0,0,0);
    this.Lz = random(-1, 1);
    
    this.spherical_vel = createVector(-1,0,0);
    this.spherical_acc = createVector(0, 0, 0);
  }
  
  act_force(object){
    const M = object.mass;
    
    const x = this.pos.x - object.pos.x;
    const y = this.pos.y - object.pos.y;
    const z = this.pos.z - object.pos.z;
    
    const r = sqrt(pow(x,2)+pow(y,2)+pow(z,2));
    
    if(r<2*M || r> width+height){this.reset()}
    
    this.spherical_acc.x = this.k * M / pow(r,2) - pow(this.Lz,2)*(3*M-r)/( pow(r,2)*(pow(x,2)+pow(y,2)))-pow(this.Lz,2)*(2*M-r)*(z/(r*pow(pow(x,2)+pow(y,2)),3/2))*this.spherical_vel.y/this.spherical_vel.x-(r-M)*pow(this.spherical_vel.y,2)-(pow(r,2)-2*M*r)*(this.spherical_vel.y/this.spherical_vel.x)*this.spherical_acc.y;
    this.spherical_acc.y = this.Lz*z/( pow(pow(x,2)+pow(y,2), 3/2));
    
    this.spherical_vel.x += this.spherical_acc.x;
    this.spherical_vel.y += this.spherical_acc.y;
    this.spherical_vel.z = this.Lz/( pow(x,2) + pow(y,2));
    
    this.acceleration.x = (x/r)*this.spherical_acc.x + z*x*this.spherical_acc.y/sqrt(pow(x,2)+pow(y,2)) +2*z*(x/(r*sqrt(pow(x,2)+pow(y,2))))*this.spherical_vel.x*this.spherical_vel.y-2*(y/r)*this.spherical_vel.x*this.spherical_vel.z - 2*z*y*this.spherical_vel.z*this.spherical_vel.y/sqrt(pow(x,2)+pow(y,2)) -(pow(this.spherical_vel.y,2)+pow(this.spherical_vel.z,2))*x;
    this.acceleration.y = (y/r)*this.spherical_acc.x + z*y*this.spherical_acc.y/sqrt(pow(x,2)+pow(y,2)) +2*z*(y/(r*sqrt(pow(x,2)+pow(y,2))))*this.spherical_vel.x*this.spherical_vel.y+2*(x/r)*this.spherical_vel.x*this.spherical_vel.z - 2*z*x*this.spherical_vel.z*this.spherical_vel.y/sqrt(pow(x,2)+pow(y,2)) -(pow(this.spherical_vel.y,2)+pow(this.spherical_vel.z,2))*y;
    this.acceleration.z = (z/r)*this.spherical_acc.x - 2*this.spherical_vel.x*this.spherical_vel.y*(sqrt(pow(x,2)+pow(y,2))/r) - z*pow(this.spherical_vel.y, 2)-this.spherical_acc.y*sqrt(pow(x,2)+pow(y,2));
  }
  
}
