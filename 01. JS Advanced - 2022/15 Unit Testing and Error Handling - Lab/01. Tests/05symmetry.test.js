const { isSymmetric } = require(`./05. Check for Symmetry`);
const expect = require(`chai`).expect;

describe(`Test isSymmetric`, () => {
  it(`works with symmetric array`, () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true; //
  });
  it(`works with odd length array`, () => {
    expect(isSymmetric([1, 2, 1])).to.be.true; //
  });
  it(`works with strings in odd length array`, () => {
    expect(isSymmetric([`a`, `c`, `a`])).to.be.true; //
  });
  it(`returns false for different types in array`, () => {
    expect(isSymmetric([`c`, 4, `4`, `c`])).to.be.false; //
  });
  it(`returns false for not symmetric strings`, () => {
    expect(isSymmetric([`a`, `c`, `c`])).to.be.false;
  });
  it(`returns false for string`, () => {
    expect(isSymmetric(`sos`)).to.be.false; //
  });
  it(`returns false for different types`, () => {
    expect(isSymmetric(1)).to.be.false; //
  });
  it(`works with strings in even length array`, () => {
    expect(isSymmetric([`a`, `c`, `c`, `a`])).to.be.true;
  });
  it(`returns false with non symmetric array`, () => {
    expect(isSymmetric([1, 2, 7])).to.be.false; //
  });
});

/*
Take an array as an argument
Return false for any input that isn’t of the correct type
Return true if the input array is symmetric
Otherwise, return false
*/
/*
  Test isSymmetric
    ✔ works with symmetric array
    ✔ works with odd length array
    ✔ works with strings in odd length array
    ✔ returns false for different types in array
    ✔ returns false for not symmetric strings
    ✔ returns false for string
    ✔ returns false for different types
    ✔ works with strings in even length array
    ✔ returns false with non symmetric array


  9 passing (13ms)
*/
