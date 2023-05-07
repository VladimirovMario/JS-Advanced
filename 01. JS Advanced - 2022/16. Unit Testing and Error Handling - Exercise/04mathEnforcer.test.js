const { mathEnforcer } = require(`./04. Math Enforcer`);
const { expect } = require(`chai`);

describe("Testing object mathEnforcer", () => {
  describe("testing method addFive", () => {
    it("If the parameter is NOT a number, the function should return undefined.", () => {
      expect(mathEnforcer.addFive(`5`)).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
    });
    it("It works correct when the input is integer.", () => {
      expect(mathEnforcer.addFive(5)).to.be.equal(10);
    });
    it("It works correct when the input is negative integer.", () => {
      expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
    });
    it("It works correct when the input is floating point number.", () => {
      expect(mathEnforcer.addFive(3.14)).to.be.closeTo(8.14, 0.01);
    });
  });
  describe("testing method subtractTen", () => {
    it("If the parameter is NOT a number, the function should return undefined.", () => {
      expect(mathEnforcer.subtractTen(`5`)).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
    });
    it("It works correct when the input is integer.", () => {
      expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
    });
    it("It works correct when the input is negative integer.", () => {
      expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
    });
    it("It works correct when the input is floating point number.", () => {
      expect(mathEnforcer.subtractTen(3.14)).to.be.closeTo(-6.86, 0.01);
    });
  });
  describe("testing method sum", () => {
    it("It returns undefined with different type for the first param.", () => {
      expect(mathEnforcer.sum(`5`, 5)).to.equal(undefined);
    });
    it("It returns undefined with different type for the second param.", () => {
      expect(mathEnforcer.sum(5, `5`)).to.equal(undefined);
    });
    it("Works with correct input params.", () => {
      expect(mathEnforcer.sum(5, 5)).to.be.equal(10);
    });
    it("It works correct when the inputs are floating point numbers.", () => {
      expect(mathEnforcer.sum(3.14, 3.14)).to.be.closeTo(6.28, 0.01);
    });
  });
});

/*
  Testing object mathEnforcer
    testing method addFive
      ✔ If the parameter is NOT a number, the function should return undefined.
      ✔ It works correct when the input is integer.
      ✔ It works correct when the input is negative integer.
      ✔ It works correct when the input is floating point number.
    testing method subtractTen
      ✔ If the parameter is NOT a number, the function should return undefined.
      ✔ It works correct when the input is integer.
      ✔ It works correct when the input is negative integer.
      ✔ It works correct when the input is floating point number.
    testing method sum
      ✔ It returns undefined with different type for the first param.
      ✔ It returns undefined with different type for the second param.
      ✔ Works with correct input params.
      ✔ It works correct when the inputs are floating point numbers.


  12 passing (45ms)
*/