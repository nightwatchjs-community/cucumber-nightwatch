import { Before, After, setWorldConstructor } from '@cucumber/cucumber'
import World from './NightwatchWorld'

setWorldConstructor(World);

// Launch the browser session
Before(async function (this: World) {
  await this.initNightwatch();
})

// Close the browser session
After(async function (this: World) {
  await this.endNightwatch();
})
