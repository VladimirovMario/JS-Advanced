const { chromium, request } = require('playwright-chromium');
const { expect } = require('chai');

const host = "http://127.0.0.1:5500"

const mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0":{"author":"J.K.Rowling","title":"Harry Potter and the Philosopher's Stone"},
    "d953e5fb-a585-4d6b-92d3-ee90697398a1":{"title":"C# Fundamentals","author":"Svetlin Nakov"}
}

describe('E2E tests', async function() {
    this.timeout(6000)
    let browser, page; // Declare reusable variables
    
  // If we are in headless mode. We need more time to do the tests. this.timeout(8000)
//   before(async () => { browser = await chromium.launch({headless: false, slowMo: 2000}); });
  before(async () => { browser = await chromium.launch(); });
  after(async () => { await browser.close(); });

  beforeEach(async () => { page = await browser.newPage(); });
  afterEach(async () => { await page.close(); }); 


  1;
  it("Load all books", async () => {

   await page.route('**/jsonstore/collections/books', (route,request) => {
        route.fulfill({
            body: JSON.stringify(mockData),
            status : 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        })
    })
    // navigate to page
    await page.goto(host);
    // find and click Load books button
    await page.click('text=load all books')

    await page.waitForSelector('text=Harry Potter and the Philosopher\'s Stone')

    const rowData = await page.$$eval('tbody tr', rows => rows.map(r => r.textContent))

    expect(rowData[0]).to.contain("Harry Potter and the Philosopher's Stone");
    expect(rowData[0]).to.contain("J.K.Rowling");
    expect(rowData[1]).to.contain("C# Fundamentals");
    expect(rowData[1]).to.contain("Svetlin Nakov");  
  });


2; it('Creates book', async () => {

    await page.goto(host);
    await page.fill('input[name=title]', 'Title')
    await page.fill('input[name=author]', 'Author')

    const [request] = await Promise.all([
        page.waitForRequest((request) => request.method() == 'POST'),
        page.click('text=Submit')
    ])
    
    const data = JSON.parse(request.postData());
    expect(data.title).to.equal('Title')
    expect(data.author).to.equal('Author')

});
});