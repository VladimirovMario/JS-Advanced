function cookingByNumbers(num, ...params) {
  num = Number(num);
  for (let i = 0; i < params.length; i++) {
    if (params[i] == `chop`) {
      num /= 2;
    } else if (params[i] == `dice`) {
      num = Math.sqrt(num);
    } else if (params[i] == `spice`) {
      num++;
    } else if (params[i] == `bake`) {
      num *= 3;
    } else if (params[i] == `fillet`) {
      num = +(num * 0.8).toFixed(1);
    }
    console.log(num);
  }
}
cookingByNumbers("32", "chop", "chop", "chop", "chop", "chop");
console.log(`---`);
cookingByNumbers("9", "dice", "spice", "chop", "bake", "fillet");
