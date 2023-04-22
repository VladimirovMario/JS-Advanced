const { bookSelection } = require(`./03. Book selection`);
const { expect } = require(`chai`);

describe("Test bookSelection", () => {
  describe("Test isGenreSuitable", () => {
    it("Works with Thriller and correct lower age range.", () => {
      expect(bookSelection.isGenreSuitable(`Thriller`, 12)).to.be.equal(
        `Books with Thriller genre are not suitable for kids at 12 age`
      );
    });
    it("Works with Thriller and bellow lower age range.", () => {
      expect(bookSelection.isGenreSuitable(`Thriller`, 10)).to.be.equal(
        `Books with Thriller genre are not suitable for kids at 10 age`
      );
    });
    it("Works with Thriller and correct age range.", () => {
      expect(bookSelection.isGenreSuitable(`Thriller`, 30)).to.be.equal(
        `Those books are suitable`
      );
    });
    it("Works with Horror and correct age range.", () => {
      expect(bookSelection.isGenreSuitable(`Horror`, 30)).to.be.equal(
        `Those books are suitable`
      );
    });
    it("Works with Horror and correct age range.", () => {
      expect(bookSelection.isGenreSuitable(`Horror`, 10)).to.be.equal(
        `Books with Horror genre are not suitable for kids at 10 age`
      );
    });
    it("Works with Horror and correct lower age range.", () => {
      expect(bookSelection.isGenreSuitable(`Horror`, 12)).to.be.equal(
        `Books with Horror genre are not suitable for kids at 12 age`
      );
    });
  });
  describe('Testing isItAffordable', () => {
    it('Works with correct budget', () => {
        expect(bookSelection.isItAffordable(10,30)).to.be.equal(`Book bought. You have 20$ left`)
    });
    it('Works correct with not enough budget', () => {
        expect(bookSelection.isItAffordable(10,0)).to.be.equal("You don't have enough money")
    });
    it('Works correct with budget under zero :)', () => {
        expect(bookSelection.isItAffordable(10,-1)).to.be.equal("You don't have enough money")
    });
    it('Throw an error with first invalid param', () => {
        expect(()=>bookSelection.isItAffordable(`10`,10)).to.throw("Invalid input")
    });
    it('Throw an error with second invalid param', () => {
        expect(()=>bookSelection.isItAffordable(10,`10`)).to.throw("Invalid input")
    });
    it('Throw an error with second null param', () => {
        expect(()=>bookSelection.isItAffordable(10,null)).to.throw("Invalid input")
    });
    it('Throw an error with two invalid params', () => {
        expect(()=>bookSelection.isItAffordable([],[])).to.throw("Invalid input")
    });
  });
  describe('Testing suitableTitles', () => {
    it('Works with suitable input.', () => {
       expect(bookSelection.suitableTitles([{ title: "It", genre: "Horror" }],"Horror"))
       .to.deep.equal(['It'])
    });
    it('Works with suitable input.', () => {
        expect(bookSelection.suitableTitles([{ title: "The Da Vinci Code", genre: "Thriller" }],"Thriller"))
        .to.deep.equal(['The Da Vinci Code'])
     });
    it('Throw an error with incorrect first param.', () => {
        expect(()=>bookSelection.suitableTitles(``,"Thriller")).to.throw("Invalid input")
     });
     it('Throw an error with incorrect first param.', () => {
        expect(()=>bookSelection.suitableTitles(10,"Thriller")).to.throw("Invalid input")
     });
     it('Return an empty array with incorrect genre.', () => {
        expect(bookSelection.suitableTitles([{ title: "It", genre: "Horror" }],"Thriller")).to.deep.equal([])
     });
  });
});


// expected test results
/*
  Test bookSelection
    Test isGenreSuitable
      ✔ Works with Thriller and correct lower age range.
      ✔ Works with Thriller and bellow lower age range.
      ✔ Works with Thriller and correct age range.
      ✔ Works with Horror and correct age range.
      ✔ Works with Horror and correct age range.
      ✔ Works with Horror and correct lower age range.
    Testing isItAffordable
      ✔ Works with correct budget
      ✔ Works correct with not enough budget
      ✔ Works correct with budget under zero :)
      ✔ Throw an error with first invalid param
      ✔ Throw an error with second invalid param
      ✔ Throw an error with second null param
      ✔ Throw an error with two invalid params
    Testing suitableTitles
      ✔ Works with suitable input.
      ✔ Works with suitable input.
      ✔ Throw an error with incorrect first param.
      ✔ Throw an error with incorrect first param.
      ✔ Return an empty array with incorrect genre.


  18 passing (27ms)
*/
