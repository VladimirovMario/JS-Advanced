function area() {
  return Math.abs(this.x * this.y);
}
function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
  let arr = JSON.parse(input);

  const result = [];

  for (const iterator of arr) {
    result.push({ area: area.call(iterator), volume: vol.call(iterator) });
  }
  return result;
}
const resultView = solve(
  area,
  vol,
  `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
);

console.log(resultView);
/*
 [
  { area: 2, volume: 20 },
  { area: 49, volume: 490 },
  { area: 10, volume: 100 }
]
 */