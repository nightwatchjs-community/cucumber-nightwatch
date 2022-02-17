import { Before, After } from '@cucumber/cucumber'
import client from '../../nightwatch'

let browser: any

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
