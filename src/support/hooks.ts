import {
  Before,
  After,
  setWorldConstructor,
  setDefaultTimeout,
} from '@cucumber/cucumber'
import NightwatchWorld from 'cucumber-nightwatch'
import dotenv from 'dotenv'

dotenv.config()

setDefaultTimeout(30 * 1000)
setWorldConstructor(NightwatchWorld)

// Launch the browser session
Before(async function (this: NightwatchWorld) {
  await this.initNightwatch()
})

// Close the browser session
After(async function (this: NightwatchWorld) {
  await this.endNightwatch()
})
