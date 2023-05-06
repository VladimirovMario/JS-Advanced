const { lookupChar } = require(`./03. Char Lookup`);
const { expect } = require(`chai`);

describe("Testing function lookupChar", () => {
  it("returns undefined with different type of the first param, number", () => {
    expect(lookupChar(0, 1)).to.be.undefined;
  });
  it("returns undefined with different type of the first param, array", () => {
    expect(lookupChar([], 1)).to.be.undefined;
  });
  it("returns undefined with different type of the first param, object", () => {
    expect(lookupChar({}, 1)).to.be.undefined;
  });
  it("returns undefined with different type of the second param", () => {
    expect(lookupChar(`0`, `1`)).to.be.undefined;
  });
  it("returns incorrect index with invalid lower bound", () => {
    expect(lookupChar(`hello`, -1)).to.be.equal(`Incorrect index`);
  });
  it("returns incorrect index with invalid upper bound", () => {
    expect(lookupChar(`hello`, 5)).to.be.equal(`Incorrect index`);
  });
  it("returns undefined with floating point number", () => {
    expect(lookupChar(`hello`, 3.14)).to.be.undefined;
  });
  it("works with correct length", () => {
    expect(lookupChar(`hello`, 4)).to.be.equal(`o`);
    expect(lookupChar(`hello`, 0)).to.be.equal(`h`);
  });
});

/*
  Testing function lookupChar
    ✔ returns undefined with different type of the first param, number
    ✔ returns undefined with different type of the first param, array
    ✔ returns undefined with different type of the first param, object
    ✔ returns undefined with different type of the second param
    ✔ returns incorrect index with invalid lower bound
    ✔ returns incorrect index with invalid upper bound
    ✔ returns undefined with floating point number
    ✔ works with correct length


  13 passing (42ms)
*/