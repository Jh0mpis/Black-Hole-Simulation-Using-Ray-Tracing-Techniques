class Black_hole{
  constructor(mass, pos, vel){
    this.mass = mass;
    this.pos = pos;
    this.vel = vel;
    this.acc = createVector(0,0,0);
  }
  
  render(){
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    fill(255,0,0);
    sphere(2*this.mass);
    pop();
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  act_force(){
    this.acc.x = -this.pos.x*0.00005;
    this.acc.y = -this.pos.y*0.00005;
  }
}
