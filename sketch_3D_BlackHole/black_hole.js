class Black_hole{
  constructor(mass, pos){
    this.mass = mass;
    this.pos = pos;
    this.vel = createVector(0,0,0);
    this.acc = createVector(0,0,0);
  }
  
  render(){
    push();
    translate(this.pos.x, this.pos.y, this.pos.z);
    sphere(2*this.mass);
    pop();
  }
  
  update(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }
  
  act_force(force){
    this.acc = force;
  }
}
