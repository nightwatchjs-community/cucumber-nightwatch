import {
  Before,
  After,
  setWorldConstructor,
  setDefaultTimeout,
} from '@cucumber/cucumber'
import World from './NightwatchWorld'

setDefaultTimeout(30 * 1000)
setWorldConstructor(World)

// Launch the browser session
Before(async function (this: World) {
  await this.initNightwatch()
})

// Close the browser session
After(async function (this: World) {
  await this.endNightwatch()
})
