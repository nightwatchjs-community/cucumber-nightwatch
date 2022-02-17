const Nightwatch = require('nightwatch');

const nightwatchClient = Nightwatch.createClient({
  headless: true,
  output: true,
  silent: true, // set to false to enable verbose logging
  browserName: process.env.BROWSER || 'chrome', // can be either: firefox, chrome, safari, or edge

  // set the global timeout to be used with waitFor commands and when retrying assertions/expects
  timeout: 10000,

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

// module.exports.client = nightwatchClient
export default nightwatchClient
