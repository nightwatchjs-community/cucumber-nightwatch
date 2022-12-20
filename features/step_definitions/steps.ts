import { Given, When, Then } from '@cucumber/cucumber'
import World from './../support/NightwatchWorld'

Given(/^I open the url "([^"]*)?"$/, function (this: World, url: string) {
  return this.browser!.url(url)
})

When(
  /^I set "([^"]*)?" to the inputfield "([^"]*)?"$/,
  function (this: World, value: string, selector: string) {
    return this.browser!.setValue(selector, value)
  }
)

When(/^I press "([^"]*)?"$/, async function (this: World, key: string) {
  /* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */
  await this.browser!.perform(function (this: any) {
    const actions = this.actions({ async: true })

    return actions.keyDown(this.Keys[key]).keyUp(this.Keys[key])
  })
  /* eslint-enable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-return */
})

When(/^I looking for a not existing element$/, async function (this: World) {
  try {
    // These won't throw an error
    await this.browser!.waitForElementVisible(
      '#not-existing-element',
      1000,
      0,
      true,
      function (result) {
        console.log('result', result)
      }
    )
    await this.browser!.waitForElementPresent(
      'css selector',
      '#not-existing-element'
    )
    // await this.browser!.click('#not-existing-element')
    // await this.browser!.ensure.elementIsVisible('#not-existing-element')

    // Below works fine
    // await this.browser!.expect.element('#not-existing-element').to.be.present;
    // await this.browser!.expect.element('#not-existing-element').to.be.visible;
    // await this.browser!.assert.visible('#not-existing-element')
    console.log('No error has been caught')
  } catch (error) {
    console.log('We expect error from failed command: ', error)
    throw new Error('Expected error has been caught')
  }
})

Then(
  /^I expect that the title is( not)* "([^"]*)?"$/,
  function (this: World, negativeCase: string, expectedTitle: string) {
    if (negativeCase) {
      return this.browser!.assert.not.titleEquals(expectedTitle)
    }

    return this.browser!.assert.titleEquals(expectedTitle)
  }
)

Then(
  /^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/,
  async function (
    this: World,
    elementType: string,
    selector: string,
    negativeCase: string,
    expectedText: string
  ) {
    let command = 'getValue'
    if (
      ['container', 'button'].includes(elementType) ||
      (await this.browser!.getElementProperty(selector, 'value')) === null
    ) {
      command = 'getText'
    }
    await this.browser!.waitForElementVisible(selector)

    if (negativeCase) {
      command === 'getValue'
        ? await this.browser!.assert.not.valueContains(selector, expectedText)
        : await this.browser!.assert.not.textContains(selector, expectedText)
    } else {
      command === 'getValue'
        ? await this.browser!.assert.valueContains(selector, expectedText)
        : await this.browser!.assert.textContains(selector, expectedText)
    }
  }
)
