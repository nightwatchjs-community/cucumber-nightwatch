const { Before, After, AfterAll } = require('@cucumber/cucumber')
const { client } = require('../../nightwatch');

let browser: Object

// Launch the browser session
Before(async function () {
  browser = await client.launchBrowser();
  this.browser = browser
})

// Close the browser session
After(async function () {
  if (browser) {
    await browser.quit();
  }
})
