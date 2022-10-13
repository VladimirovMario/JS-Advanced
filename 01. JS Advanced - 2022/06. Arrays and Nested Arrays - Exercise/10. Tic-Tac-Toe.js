function ticTacToe(array) {  // 90 points of 100
  let dashboard = [
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ];
  let first = `X`;
  let second = `O`;
  let player = first;

  for (let i = 0; i < array.length; i++) {
    let tokens = array[i].split(` `);
    let row = Number(tokens[0]);
    let col = Number(tokens[1]);

    let noWinnerCheck = dashboard.reduce((a, b) => a.concat(b)).every(el => el !== false);
    
    if (noWinnerCheck) {
      console.log(`The game ended! Nobody wins :(`);
      break;
    }

    if (player == `X` && dashboard[row][col] == false) {
      dashboard[row][col] = player;
      player = second;
    } else if (player == `X` && dashboard[row][col] != false) {
      player = first;
      console.log("This place is already taken. Please choose another!");
    } else if (player == `O` && dashboard[row][col] == false) {
      dashboard[row][col] = player;
      player = first;
    } else if (player == `O` && dashboard[row][col] != false) {
      player = second;
      console.log("This place is already taken. Please choose another!");
    }

    let mainDiagonal = [];
    let secondDiagonal = [];
    let index = dashboard[0].length - 1;
    let colWins = false;
    for (let j = 0; j < dashboard.length; j++) {
      mainDiagonal.push(dashboard[j][j]);
      secondDiagonal.push(dashboard[index--][j]);

      let currCol = [];
      for (let k = 0; k < dashboard.length; k++) {
        currCol.push(dashboard[k][j]);
      }
      checkCol = currCol.every((el) => el == currCol[0] && el !== false);
      if (checkCol) {
        colWins = true;
        break;
      }
    }

    let rowWin = dashboard[row].every((el) => el == dashboard[row][0]);
    let checkMainDiagonal = mainDiagonal.every(
      (el) => el == mainDiagonal[0] && el !== false
    );
    let checkSecondDiagonal = secondDiagonal.every(
      (el) => el == secondDiagonal[0] && el !== false
    );

    if (checkMainDiagonal || checkSecondDiagonal || rowWin || colWins) {
      console.log(`Player ${dashboard[row][col]} wins!`);
      break;
    }
  }
  for (const iterator of dashboard) {
    console.log(iterator.join(`\t`));
  }
}
ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 1",
  "1 2",
  "2 2",
  "2 1",
  "0 0",
]);
console.log(`---`);
ticTacToe([
  "0 0",
  "0 0",
  "1 1",
  "0 1",
  "1 2",
  "0 2",
  "2 2",
  "1 2",
  "2 2",
  "2 1",
]);
console.log(`---`);

ticTacToe([
  "0 1",
  "0 0",
  "0 2",
  "2 0",
  "1 0",
  "1 2",
  "1 1",
  "2 1",
  "2 2",
  "0 0",
]);
