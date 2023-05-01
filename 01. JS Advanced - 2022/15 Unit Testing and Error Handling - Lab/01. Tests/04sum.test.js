let { sum } = require(`./04. Sum of Numbers`);
const { expect } = require(`chai`);

describe(`Test Sum of Numbers`, () => {
  it(`works with numbers`, () => {
    expect(sum([2, 3])).to.be.equal(5);
  });
  it(`works with empty array`, () => {
    expect(sum([])).to.be.equal(0);
  });
  it(`works with numbers with floating point`, () => {
    expect(sum([1, 1.1, 1])).to.be.equal(3.1);
  });
  it(`works with negative numbers`, () => {
    expect(sum([-10, -10])).to.be.equal(-20);
  });

  it(`returns false with incorrect input`, () => {
    expect(sum([1, "str", 3])).not.to.be.equal(NaN);
  });
});

/*
Test Sum of Numbers
✔ works with numbers
✔ works with empty array
✔ works with numbers with floating point
✔ works with negative numbers
✔ returns false with incorrect input


5 passing (12ms)
*/