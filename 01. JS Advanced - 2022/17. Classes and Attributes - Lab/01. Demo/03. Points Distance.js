// https://en.wikipedia.org/wiki/Euclidean_distance
class PointsDistance {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(p1,p2){
    const dx = p1.x - p2.x
    const dy = p1.y - p2.y
    return Math.sqrt(Math.pow(dx,2) + Math.pow(dy,2))
  }
}
let p1 = new PointsDistance(5, 5);
let p2 = new PointsDistance(9, 8);
console.log(PointsDistance.distance(p1, p2));



