const {Given, When, Then} = require('@cucumber/cucumber');

Given(/^I open the (url|site) "([^"]*)?"$/, function(site, url) {
  return this.browser.url(url);
});

When(
  /^I (add|set) "([^"]*)?" to the inputfield "([^"]*)?"$/, function(method, value, selector) {
    return this.browser.setValue(selector, value);
  });

When(
  /^I press "([^"]*)?"$/, async function(key) {
    await this.browser.perform(function() {
      const actions = this.actions({async: true});

      return actions
        .keyDown(this.Keys[key])
        .keyUp(this.Keys[key]);
    });
  });

Then(/^I expect that the title is( not)* "([^"]*)?"$/, function(negativeCase, expectedTitle) {
  if (negativeCase) {
    return this.browser.assert.not.title(expectedTitle);
  }
  
  return this.browser.assert.title(expectedTitle);
});

Then(/^I expect that (button|element|container) "([^"]*)?"( not)* contains the text "([^"]*)?"$/, async function(elementType, selector, negativeCase, expectedText) {
  let command = 'getValue';
  if (['container', 'button'].includes(elementType) || (await this.browser.getElementProperty(selector, 'value')) === null) {
    command = 'getText';
  }
  await this.browser.waitForElementVisible(selector);
      
  if (negativeCase) {
    command ==='getValue' 
      ? await this.browser.assert.not.valueContains(selector, expectedText)
      : await this.browser.assert.not.containsText(selector, expectedText);
  } else {
    command ==='getValue' 
      ? await this.browser.assert.valueContains(selector, expectedText)
      : await this.browser.assert.containsText(selector, expectedText);
  }
});
