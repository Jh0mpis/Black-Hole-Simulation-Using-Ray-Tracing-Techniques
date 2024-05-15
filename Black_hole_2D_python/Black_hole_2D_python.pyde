from black_hole import Black_hole
from particle import Photon, Massive_particle

photons = []

windows_width = 640
windows_height = 680
black_hole = Black_hole(5, 1, windows_width/2, windows_height/2)

photon1 = Photon(30, 0.5, windows_width-10, windows_height/2)
photon2 = Photon(30, 0.5, windows_width-10, windows_height/2)

for i in range(20):
    photons.append(Photon(10+i, 0.5, windows_width-10, windows_height/2))
    photons.append(Photon(-i-10, -0.5, windows_width-10, windows_height/2))

def setup():
    size(windows_width, windows_height)

def draw():
    background(0);
    #black_hole.apply_force()
    black_hole.update()
    black_hole.render()
    
    for photon in photons:
        photon.render([255, 255, 255])
        photon.apply_force(black_hole)
        photon.update()
