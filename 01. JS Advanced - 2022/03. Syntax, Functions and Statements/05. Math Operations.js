function mathOperations(num1, num2, operator) {
  let result = 0;

  if (operator == `+`) {
    result = num1 + num2;
  } else if (operator == `-`) {
    result = num1 - num2;
  } else if (operator == `*`) {
    result = num1 * num2;
  } else if (operator == `/`) {
    result = num1 / num2;
  } else if (operator == `%`) {
    result = num1 % num2;
  } else if (operator == `**`) {
    result = num1 ** num2;
  }
  console.log(result);
}
mathOperations(5, 6, "+");
mathOperations(3, 5.5, "*");
mathOperations(3, 5.5, "**");

// console.log(Math.pow(3, 5.5)); this is the same like: **
