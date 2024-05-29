class Photon{
  constuctor(pos, target, energy, angular_momentum){
    this.pos = pos;
    this.target = target;
    dist = sqrt((this.pos.x-this.target.x)**2+(this.pos.y-this.target.y)**2+(this.pos.z-this.target.z)**2);
    this.vel = target / dist;
    this.acceleration = createVector(0,0,0);
    this.energy = energy;
    this.Lz = angular_momentum;
  }
  
  render{
    pop();
    point(this.pos.x, this.pos.y, this.pos.z);
    push();
  }
  
}
