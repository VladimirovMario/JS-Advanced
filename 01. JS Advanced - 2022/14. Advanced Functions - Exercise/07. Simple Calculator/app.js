function calculator() {
  let firstInput = null;
  let secondInput = null;
  let result = null;

  function init(selector1, selector2, resultSelector) {
    firstInput = document.querySelector(selector1);
    secondInput = document.querySelector(selector2);
    result = document.querySelector(resultSelector);
  }

  function add() {
    result.value = Number(firstInput.value) + Number(secondInput.value);
  }
  function subtract() {
    result.value = Number(firstInput.value) - Number(secondInput.value);
  }
  function multiply() {
    result.value = Number(firstInput.value) * Number(secondInput.value);
  }
  function divide() {
    result.value = Number(firstInput.value) / Number(secondInput.value);
  }

  return {
    init,
    add,
    subtract,
    multiply,
    divide,
  };
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
