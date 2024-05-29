class Eye{
  constructor(x, y, z, center, dist, width, height){
    this.coords = createVector(x, y, z);
    this.dist = dist;
    this.center = this.center;
    this.width = width;
    this.height = height;
    this.photons = [];
    init_photons()
  }
}
