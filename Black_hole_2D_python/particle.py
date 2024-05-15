from math import sqrt

class Particle:
    def __init__(self, angle, Lz, x, y):
        self.pos = PVector(x,y)
        self.vel = PVector(-cos(angle*PI/180), -sin(angle*PI/180))
        self.acc = PVector(0, 0)
        self.Lz = Lz
        
        self.vel_r = -0.01
        
        self.size = 5
    
    def render(self, colors):
        push()
        fill(colors[0], colors[1], colors[2])
        ellipse(self.pos.x, self.pos.y, self.size, self.size)
        pop()
    
    def update(self):    
        self.vel.add(self.acc)
        self.pos.add(self.vel)
        
class Photon(Particle):
    def apply_force(self, origin):
        r = sqrt((self.pos.x-origin.pos.x)**2 + (self.pos.y-origin.pos.y)**2)/10
        magnitude_r =  self.Lz**2/r**3-(3*(self.Lz**2)*origin.mass)/r**3
        
        self.vel_r += magnitude_r
        
        magnitude_phi = self.Lz/r**2
        
        x = self.pos.x-origin.pos.x
        y = self.pos.y-origin.pos.y
        
        self.acc.x = x * magnitude_r/r - 2 * y * self.vel_r*magnitude_phi/r - x * magnitude_phi**2 
        self.acc.y = y * magnitude_r/r + 2 * x * self.vel_r*magnitude_phi/r - y * magnitude_phi**2
 
        #self.acc.x = - x * magnitude_phi**2 
        #self.acc.y = - y * magnitude_phi**2
        
 
class Massive_particle(Particle):   
    def apply_force(self, origin):
        r = sqrt((self.pos.x-origin.pos.x)**2 + (self.pos.y-origin.pos.y)**2)
        magnitude =  - origin.mass/r**2+self.Lz**2/r**3-3*self.Lz**2*origin.mass/r**4
        
        x = self.pos.x-origin.pos.x
        y = self.pos.y-origin.pos.y
        
        self.acc.x = x * magnitude/r - 2 * y * sqrt(self.vel.x**2+self.vel.y**2)*magnitude_phi/r - x * magnitude_phi**2 
        self.acc.y = y * magnitude/r + 2*x * sqrt(self.vel.x**2+self.vel.y**2)*magnitude_phi/r - y * magnitude_phi**2
