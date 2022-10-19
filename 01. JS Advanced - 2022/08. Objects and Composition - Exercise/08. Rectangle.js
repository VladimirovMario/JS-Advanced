function rectangle(width, height, color) {
  let firstPart = color[0].toUpperCase();
  let secondPart = color.slice(1);

  return {
    width,
    height,
    color: firstPart + secondPart,
    calcArea() {
      return this.width * this.height;
    },
  };
}
let rect = rectangle(4, 5, "red");

console.log(rect.width);
console.log(rect.height);
console.log(rect.color);

console.log(rect.calcArea());

/*
4
5
Red
20
*/
