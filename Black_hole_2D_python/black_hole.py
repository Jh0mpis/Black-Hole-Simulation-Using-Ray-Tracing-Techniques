from math import sqrt

class Black_hole:
    def __init__(self, mass, Lz, x, y):
        self.mass = mass
        self.Lz = Lz
        self.pos = PVector(x, y)
        self.vel = PVector(0, 0)
        self.acc = PVector(0, 0)
    
    def render(self):
        push()
        noFill()
        stroke(255)
        ellipse(self.pos.x, self.pos.y, 2*2*self.mass, 2*2*self.mass)
        pop()
    
    def update(self):
        self.vel.add(self.acc)
        self.pos.add(self.vel)
        
    def apply_force(origin):
        r = sqrt((self.pos.x-origin.pos.x)**2 + (self.pos.y-origin.pos.y)**2)
        magnitude_r =  -origin.mass/r**3+self.Lz**2/r**4-3*Lz**2*origin.mass/r**5
        
        
        
        self.acc.x = self.pos.x * magnitude_r
        self.acc.y = self.pos.y * magnitude_r
