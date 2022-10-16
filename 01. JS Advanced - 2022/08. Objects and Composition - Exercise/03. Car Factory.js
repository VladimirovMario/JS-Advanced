function carFactory(order) {
  let result = {
    model: order.model,
    engine: {},
    carriage: {},
    wheels: [null, null, null, null],
  };

  let currPower = 0;
  let currVol = 0;
  if (order.power <= 90) {
    currPower = 90;
    currVol = 1800;
  } else if (order.power <= 120) {
    currPower = 120;
    currVol = 2400;
  } else if (order.power <= 200) {
    currPower = 200;
    currVol = 3500;
  }

  result.engine = { power: currPower, volume: currVol };

  result.carriage = { type: order.carriage, color: order.color };

  if (order.wheelSize % 2 == 0) {
    order.wheelSize--;
  }
  result.wheels.fill(order.wheelSize, 0, 4);

  return result;
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);

console.log(
  carFactory({
    model: "Ferrari",
    power: 200,
    color: "red",
    carriage: "coupe",
    wheelsize: 21,
  })
);
