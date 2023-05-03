const { rgbToHexColor } = require(`./06. RGB to Hex`);
const { expect } = require(`chai`);

describe(`Test RGB to Hex`, () => {
  it(`converts black`, () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal(`#000000`);
  });
  it(`converts white`, () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal(`#FFFFFF`);
  });
  it(`converts red`, () => {
    expect(rgbToHexColor(255, 0, 0)).to.equal(`#FF0000`);
  });
  it(`converts green`, () => {
    expect(rgbToHexColor(0, 255, 0)).to.equal(`#00FF00`);
  });
  it(`converts blue`, () => {
    expect(rgbToHexColor(0, 0, 255)).to.equal(`#0000FF`);
  });
  it(`returns undefined with missing params`, () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });
  it(`returns undefined with params out of range`, () => {
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
  });
  it(`returns undefined with params out of lower range`, () => {
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
  });
  it(`returns undefined with incorrect params`, () => {
    expect(rgbToHexColor(`0`, 0, 300)).to.be.undefined;
  });
});

/*
  Test RGB to Hex
    ✔ converts black
    ✔ converts white
    ✔ converts red
    ✔ converts green
    ✔ converts blue
    ✔ returns undefined with missing params
    ✔ returns undefined with params out of range
    ✔ returns undefined with params out of lower range
    ✔ returns undefined with incorrect params


  9 passing (25ms)
 */
