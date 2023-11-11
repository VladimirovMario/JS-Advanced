// Those tests works with code from Soft Uni
// My code don't work with the third test!
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');


let browser, page; // Declare reusable variables

describe('E2E tests', async function() {

  this.timeout(6000)
  // If we are in headless mode. We need more time to do the tests. this.timeout(8000)
  // before(async () => { browser = await chromium.launch({headless: false, slowMo: 2000}); });
  before(async () => { browser = await chromium.launch(); });

  after(async () => { await browser.close(); });
  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 


1;
  it("It contains article titles", async () => {
    await page.goto("http://127.0.0.1:5502");

    // We declare what we want, the page to wait!
    await page.waitForSelector('.accordion')
    // In this CASE: before(async () => { browser = await chromium.launch(); });
    
    const content = await page.textContent("#main");

    expect(content).to.contain("Scalable Vector Graphics");
    expect(content).to.contain("Open standard");
    expect(content).to.contain("Unix");
    expect(content).to.contain("ALGOL");
    await page.screenshot({ path: `index.png` });
  });


 2;
  it("Testing: button functionality", async () => {
    await page.goto("http://127.0.0.1:5502");
   
    await page.click('text=More')
    await page.waitForSelector('.accordion p')
    
    const visible = await page.isVisible('.accordion p')
    expect(visible).to.be.true
  });

  3; // Checking only one test with: it.only 
  it("Testing: button functionality", async () => {
    await page.goto("http://127.0.0.1:5502");

    await page.click('text=More')
    await page.waitForSelector('.accordion p')

    let visible = await page.isVisible('.accordion p')
    expect(visible).to.be.true

    await page.click('text=Less')
       
    visible = await page.isVisible('.accordion p')
    expect(visible).to.be.false
  });
});

