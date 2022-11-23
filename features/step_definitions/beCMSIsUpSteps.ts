import { Given, Then } from '@cucumber/cucumber'
import World from './../support/NightwatchWorld'
import { CMSPage } from '../pages/beCMSPO'
import assert from 'assert'

Given(
  'I am on the backend page {string}',
  { timeout: 3 * 60000 },
  function (this: World, url: string) {
    return this.browser!.beRelativeURL(url)
  }
)

Then('I verify the CMS homepage is loaded', async function (this: World) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const cms: CMSPage = this.browser!.page.beCMSPO()
  // await cms.waitForElementVisible('@loginForm'); won't work need to check with nightwatch team
  await cms.assert.visible('@loginForm')
})

Given(
  'I log into the CMS as {string}',
  { timeout: 40 * 1000 },
  async function (this: World, role: string) {
    interface Credentials {
      name: string
      password: string
    }
    let credentials: Credentials
    switch (role) {
      case 'admin':
        credentials = {
          name: process.env.BE_ADMIN_USER || '',
          password: process.env.BE_ADMIN_PASS || '',
        }
        break
      case 'editor':
        credentials = {
          name: process.env.BE_EDITOR_USER || '',
          password: process.env.BE_EDITOR_PASS || '',
        }
        break
      default:
        assert.fail(`Role ${role} is not a valid role.`)
        return
    }

    this.loggedRole = role

    // eslint-disable-next-line @typescript-eslint/await-thenable
    await this.browser!.beLogin(credentials)
  }
)

Then(
  'I verify the CMS page title is {string}',
  async function (this: World, title: string) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const cms: CMSPage = this.browser!.page.beCMSPO()
    // await cms.waitForElementPresent('@pageTitle');
    console.log('role', this.loggedRole)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return cms.getText('@pageTitle', function (result: any) {
      assert.equal(result.value, title)
    })
  }
)
