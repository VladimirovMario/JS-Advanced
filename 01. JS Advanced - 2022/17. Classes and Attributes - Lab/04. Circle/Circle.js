//Write a class that represents a Circle.
class Circle {
  // It has only one data property - its radius, and it is set through the constructor.
  constructor(radius) {
    this.radius = radius;
  }
  // The class needs to have getter and setter methods for its diameter

  // getter needs to use the radius to calculate the diameter and return it
  get diameter() {
    return 2 * this.radius;
  }

  //the setter needs to calculate the radius and change it
  set diameter(value) {
    return (this.radius = value / 2);
  }

  //The circle also has a getter area(), which calculates and returns its area.
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
/*
Expected output:
Radius: 2
Diameter: 4
Area: 12.566370614359172
Radius: 0.8
Diameter: 1.6
Area: 2.0106192982974678
 */
