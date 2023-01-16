//Write a JS class that represents a Point
class Point {
  // It has x and y coordinates as properties, that are set through the constructor,
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  //and a static method for finding the distance between two points, called distance().

  //The distance() method should receive two Point objects as parameters.
  //The distance() method should return a number, the distance between the two-point parameters.
  static distance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));
