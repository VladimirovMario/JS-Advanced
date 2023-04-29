const { carService } = require(`./03. Car service`);
const { expect } = require(`chai`);

describe("Tests for exam", () => {
  describe("First tests", () => {
    it("Happy path", () => {
      expect(carService.isItExpensive(`Engine`)).equal(
        `The issue with the car is more severe and it will cost more money`
      );
      expect(carService.isItExpensive(`Transmission`)).equal(
        `The issue with the car is more severe and it will cost more money`
      );
    });
    it("Sad path 1", () => {
      expect(carService.isItExpensive(`test`)).equal(
        `The overall price will be a bit cheaper`
      );
    });
  });
  describe("Second test", () => {
    it("Happy path 1", () => {
      // expect(carService.discount(3,10)).equal(8.5)
      // expect(carService.discount(7,10)).equal(8.5)
    });

    it("Happy path 2", () => {
      expect(carService.discount(3, 10)).equal(
        `Discount applied! You saved 1.5$`
      );
      expect(carService.discount(7, 10)).equal(
        `Discount applied! You saved 1.5$`
      );
      expect(carService.discount(6, 10)).equal(
        `Discount applied! You saved 1.5$`
      );
      expect(carService.discount(8, 10)).equal(
        `Discount applied! You saved 3$`
      );
    });
    it("Sad path 2", () => {
      expect(carService.discount(2, 10)).equal(`You cannot apply a discount`);
      expect(carService.discount(1, 10)).equal(`You cannot apply a discount`);
      expect(carService.discount(0, 10)).equal(`You cannot apply a discount`);
      expect(carService.discount(-1, 10)).equal(`You cannot apply a discount`);
    });
    it("Sad path 3", () => {
      expect(() => carService.discount(``, 10)).throw("Invalid input");
      expect(() => carService.discount(``, ``)).throw("Invalid input");
      expect(() => carService.discount([], 10)).throw("Invalid input");
      expect(() => carService.discount(10, ``)).throw("Invalid input");
      expect(() => carService.discount({}, {})).throw("Invalid input");
      expect(() => carService.discount([], [])).throw("Invalid input");
      expect(() => carService.discount(1, undefined)).throw("Invalid input");
    });
  });
  describe("Third test", () => {
    it("Happy path", () => {
      expect(
        carService.partsToBuy(
          [{ part: "blowoff valve", price: 145 }],
          ["blowoff valve"]
        )
      ).equal(145);
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", `coil springs`]
        )
      ).equal(375);
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          []
        )
      ).equal(0);
      expect(
        carService.partsToBuy(
          [
            { part: "blowoff valve", price: 145 },
            { part: "coil springs", price: 230 },
          ],
          ["blowoff valve", `coil springs`, `coil springs`]
        )
      ).equal(605);
      expect(
        carService.partsToBuy(
          [],
          ["blowoff valve", `coil springs`, `coil springs`]
        )
      ).equal(0);
      expect(carService.partsToBuy([], [])).equal(0);
    });
    it("sad", () => {
      expect(() => carService.partsToBuy([], {})).throw("Invalid input");
      expect(() => carService.partsToBuy({}, {})).throw("Invalid input");
      expect(() => carService.partsToBuy(``, ``)).throw("Invalid input");
      expect(() => carService.partsToBuy(1, 1)).throw("Invalid input");
      expect(() => carService.partsToBuy(undefined, 1)).throw("Invalid input");
    });
  });
});

/*
partsToBuy (partsCatalog, neededParts) - A function that accepts two arrays.
The partsCatalog array will store the parts and the price for them ([{ part: "blowoff valve", price: 145 }, { part: "coil springs", price: 230 } ...])
The neededParts array will store the parts that you need to buy (["blowoff valve", "injectors" ...])
You must iterate through both the arrays and calculate the total price of the parts that are equal to the neededParts.
If partsCatalog is empty, return 0
Finally, return the total price of all parts needed.
There is a need for validation for the input, may not always be valid. In case of submitted invalid parameters, throw an error "Invalid input":
If passed partsCatalog or neededParts parameters are not an arrays.

*/
