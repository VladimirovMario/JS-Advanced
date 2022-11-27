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

  if (validFace.includes(face) == false) {
    throw new Error(`Error`);
  }
  return result;
}
console.log(playingCards("A", "S") + ``);
// A♠
console.log(playingCards('10', 'H').toString());
// 10♥
console.log(playingCards("1", "C").toString());
// throw new Error(`Error`)