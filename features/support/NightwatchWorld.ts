import { World } from '@cucumber/cucumber';
import { NightwatchBrowser } from 'nightwatch'
const Nightwatch = require('nightwatch')
require('dotenv').config()

// We use Nightwatch-js Programmatic API to create the browser session in the cucumber `context`.
// https://nightwatchjs.org/api/programmatic/
// https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md
console.log(`🦉 Creating Nightwatch instance`)

const nightwatchClient = Nightwatch.createClient({
  headless: process.env.NIGHTWATCH_HEADLESS === 'true',
  output: process.env.NIGHTWATCH_OUTPUT === 'true',
  silent: process.env.NIGHTWATCH_SILENT === 'true', // set to false to enable verbose logging
  browserName: process.env.NIGHTWATCH_BROWSER,// can be either: firefox, chrome, safari, or edge

  // set the global timeout to be used with waitFor commands and when retrying assertions/expects
  timeout: process.env.NIGHTWATCH_TIMEOUT || 10000,

  // set the current test environment from the nightwatch config
  env: null,

  // any additional capabilities needed
  desiredCapabilities: {

  },

  // can define/overwrite test globals here; 
  // when using a third-party test runner only the global hooks onBrowserNavigate/onBrowserQuit are supported
  globals: {},

  // when the test runner used supports running tests in parallel; 
  // set to true if you need the webdriver port to be randomly generated
  parallel: true,

  // All other Nightwatch config settings can be overwritten here, such as:
  disable_colors: false
});


/**
 * Custom Cucumber World for Nightwatch setup
 * 
 * For more details about custom World, see below:
 * https://github.com/cucumber/cucumber-js/blob/main/docs/support_files/world.md#custom-worlds
 */
export default class extends World {
  browser: NightwatchBrowser | null = null

  /*
   * Constructors cannot be asynchronous! To work around this we'll
   * use an init method with the Before hook
   */
  async initNightwatch() {
    console.log(`🚀 Launching browser by Nightwatch.`)
    this.browser = await nightwatchClient.launchBrowser();
  }

  async endNightwatch() {
    if (this.browser) {
      console.log(`❎ Quit browser by Nightwatch.`)
      // @ts-ignore
      await this.browser.quit()
    }
  }
}
