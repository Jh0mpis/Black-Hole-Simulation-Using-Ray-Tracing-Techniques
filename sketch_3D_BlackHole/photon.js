class Photon{
  constuctor(pos, energy, angular_momentum, target){
    this.pos = pos;
    this.target = target;
    dist = sqrt(pow((this.pos.x-this.target.x), 2)+pow((this.pos.y-this.target.y), 2)+pow((this.pos.z-this.target.z), 2));
    this.vel = target / dist;
    this.acceleration = createVector(0,0,0);
    this.energy = energy;
    this.Lz = angular_momentum;
    
    this.spherical_vel = createVector(0, 0, 0);
    this.spherical_acc = createVector(0, 0, 0);
  }
  
  render(){
    push();
    point(this.pos.x, this.pos.y, this.pos.z);
    pop();
  }
  
  update(){
    this.vel.add(this.acceleration);
    this.pos.add(this.vel);
  }
  
  /*act_force(object){
    const M = object.mass;
    
    const x = this.pos.x - object.pos.x;
    const y = this.pos.y - object.pos.y;
    const z = this.pos.z - object.pos.z;
    
    const r = sqrt(pow(x,2)+pow(y,2)+pow(z,2));
    
    this.spherical_acc.x = - pow(this.Lz,2)*(3*M-r)/( pow(r,2)*(pow(x,2)+pow(y,2)))-pow(this.Lz,2)*(2*M-r)*(z/(r*pow(pow(x,2)+pow(y,2)),3/2))*this.spherical_vel.y/this.spherical_vel.x-(r-M)*pow(self.spherical_vel.y,2)-(pow(r,2)-2*M*r)*(this.spherical_vel.y/this.spherical_vel.x)*this.spherical_acc.y;
    this.spherical_acc.y = this.Lz*z/( pow(pow(x,2)+pow(y,2), 3/2));
    
    this.spherical_vel.x += this.spherical_acc.x;
    this.spherical_vel.y += this.spherical_acc.y;
    this.spherical_vel.z = this.Lz/( pow(x,2) + pow(y,2));
    
    this.acceleration.x = (x/r)*this.spherical_acc.x + z*x*this.spherical_acc.y/sqrt(pow(x,2)+pow(y,2)) +2*z*(x/(r*sqrt(pow(x,2)+pow(y,2))))*this.spherical_vel.x*this.spherical_vel.y-2*(y/r)*this.spherical_vel.x*this.spherical_vel.z - 2*z*y*this.spherical_vel.z*this.spherical_vel.y/sqrt(pow(x,2)+pow(y,2)) -(pow(this.spherical_vel.y,2)+pow(this.spherical_vel.z,2))*x;
    this.acceleration.y = (y/r)*this.spherical_acc.x + z*y*this.spherical_acc.y/sqrt(pow(x,2)+pow(y,2)) +2*z*(y/(r*sqrt(pow(x,2)+pow(y,2))))*this.spherical_vel.x*this.spherical_vel.y+2*(x/r)*this.spherical_vel.x*this.spherical_vel.z - 2*z*x*this.spherical_vel.z*this.spherical_vel.y/sqrt(pow(x,2)+pow(y,2)) -(pow(this.spherical_vel.y,2)+pow(this.spherical_vel.z,2))*y;
    this.acceleration.z = (z/r)*this.spherical_acc.x - 2*this.spherical_vel.x*this.spherical_vel.y*(sqrt(pow(x,2)+pow(y,2))/r) - z*pow(this.spherical_vel.y, 2)-this.spheri
    
  }*/
  
}
