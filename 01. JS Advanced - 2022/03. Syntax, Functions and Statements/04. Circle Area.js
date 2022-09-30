function circleArea(input) {
  let area = Math.pow(input, 2) * Math.PI;
  if (typeof input == `number`) {
    console.log(area.toFixed(2));
  } else {
    console.log(
      `We can not calculate the circle area, because we receive a ${typeof input}.`
    );
  }
}
circleArea(5);
circleArea("name");
circleArea(true);
circleArea({});
circleArea([]);

