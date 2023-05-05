const { isOddOrEven } = require(`./02. Even Or Odd`);
const { expect } = require(`chai`);

describe("Testing function isOddOrEven", () => {
  it("works with even length", () => {
    expect(isOddOrEven(`test`)).to.equal(`even`);
  });
  it("works with odd length", () => {
    expect(isOddOrEven(`str`)).to.equal(`odd`);
  });
  it("returns undefine with numbers", () => {
    expect(isOddOrEven(9)).to.be.undefined;
  });
  it("returns undefine with array", () => {
    expect(isOddOrEven([])).to.be.undefined;
  });
  it("returns undefine with obj", () => {
    expect(isOddOrEven({})).to.be.undefined;
  });
});

/*
  Testing function isOddOrEven
    ✔ works with even length
    ✔ works with odd length
    ✔ returns undefine with numbers
    ✔ returns undefine with array
    ✔ returns undefine with obj


  5 passing (18ms)
*/
