const {Given, When, Then} = require('@cucumber/cucumber');

Given(/^I open the url "([^"]*)?"$/, function(url: string) {
  return this.browser.url(url);
});

When(
  /^I set "([^"]*)?" to the inputfield "([^"]*)?"$/, function(value: string, selector: string) {
    return this.browser.setValue(selector, value);
  });

When(
  /^I press "([^"]*)?"$/, async function(key: string) {
    await this.browser.perform(function() {
      const actions = this.actions({async: true});

      return actions
        .keyDown(this.Keys[key])
        .keyUp(this.Keys[key]);
    });
  });

Then(/^I expect that the title is( not)* "([^"]*)?"$/, function(negativeCase: string, expectedTitle: string) {
  if (negativeCase) {
    return this.browser.assert.not.titleEquals(expectedTitle);
  }
  
  return this.browser.assert.titleEquals(expectedTitle);
});

Then(/^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/, async function(elementType: string, selector: string, negativeCase: string, expectedText: string) {
  let command = 'getValue';
  if (['container', 'button'].includes(elementType) || (await this.browser.getElementProperty(selector, 'value')) === null) {
    command = 'getText';
  }
  await this.browser.waitForElementVisible(selector);
      
  if (negativeCase) {
    command ==='getValue' 
      ? await this.browser.assert.not.valueContains(selector, expectedText)
      : await this.browser.assert.not.textContains(selector, expectedText);
  } else {
    command ==='getValue' 
      ? await this.browser.assert.valueContains(selector, expectedText)
      : await this.browser.assert.textContains(selector, expectedText);
  }
});
