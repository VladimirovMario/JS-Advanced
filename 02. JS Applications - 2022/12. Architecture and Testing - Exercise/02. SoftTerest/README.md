# Project Setup and Testing Guide

## Installation

### 1. Initialize Project:

```bash
npm init
```

### 2. Install Playwright (Chromium) - First Time Only:

```bash
npm i --save-dev playwright-chromium
```

### 3. Install Chai for Each New Project:

```bash
npm install --save-dev chai
```

## Running Tests

# Local Development

### 1. Start everything in one folder.

### 2. Launch the educational server:

```bash
node server
```

### 3. Load index.html using Live Server.

```bash
live-server
```

## Running Tests

### 1. Open new terminal and execute the tests using Mocha:

```bash
mocha
```

### The test address from Live Server: http://127.0.0.1:5502

## Example Test Script (test.js)

```javascript
const { chromium } = require('playwright-chromium');
const { expect } = require('chai');

const host = 'http://127.0.0.1:5502';

describe('End-to-End Tests', async function () {
  this.timeout(6000);

  let browser, page; // Reusable variables

  before(async () => {
    browser = await chromium.launch();
  });

  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
  });

  afterEach(async () => {
    await page.close();
  });

  it('Sample Test - Verify Setup', async () => {
    await page.goto(host);
    await page.screenshot({ path: `index.png` });

    // Adding a delay for demonstration purposes
    await new Promise((r) => setTimeout(r, 2000));

    expect(1).to.be.equal(1);
  });
});
```

## Important Note:

Ensure that you follow these steps for every new project:

### 1. Run npm init -y.

### 2. Install Playwright (Chromium):

```bash
npm i --save-dev playwright-chromium
```

### 3. Install Chai:

```bash
npm i chai
```

This setup assumes you have Node.js and npm installed on your system. Adjust the paths and configurations as needed for your specific project structure.
![Screenshot](https://github.com/VladimirovMario/JS-Advanced/assets/103949296/a103b16a-845c-428f-a478-db15546c94b0)

