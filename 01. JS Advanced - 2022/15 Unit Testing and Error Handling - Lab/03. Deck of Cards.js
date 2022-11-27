function deckOfCards(arr) {
  let print = []; 
  let currCard = ``;
  let allValid = true;

  for (const iterator of arr) {
    let face = iterator.slice(0, -1);
    let suit = iterator.slice(-1);
    currCard = iterator;

    playingCards(face, suit);
  }

  function playingCards(face, suit) {
    let validFace = [
      `2`,
      `3`,
      `4`,
      `5`,
      `6`,
      `7`,
      `8`,
      `9`,
      `10`,
      `J`,
      `Q`,
      `K`,
      `A`,
    ];

    let suits = {
      S: `\u2660`,
      H: `\u2665`,
      D: `\u2666`,
      C: `\u2663`,
    };

    let result = {
      face,
      suit: suits[suit],
      toString() {
        return this.face + this.suit;
      },
    };

    print.push(result.face + result.suit);

    if (
      validFace.includes(face) == false ||
      suits.hasOwnProperty(suit) == false
    ) {
      console.log(`Invalid card: ${currCard}`);
      allValid = false;
    }
    return result;
  }

  if (allValid) {
    console.log(print.join(` `));
  }
}
deckOfCards(["AS", "10D", "KH", "2C"]);
// A♠ 10♦ K♥ 2♣
deckOfCards(["5S", "3D", "QD", "1C"]);
// Invalid card: 1C