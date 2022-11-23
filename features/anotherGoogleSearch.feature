Feature: Another Google Search
  I want to search for nightwatch on google and check if the results contain Nightwatch.js

Background: Background name
  Given I open the url "https://google.com"
  Then I expect that the title is "Google"

@google @debug
Scenario: Searching Google for R2-D2
  When I set "R2-D2" to the inputfield "input[name=q]"
  And I press "ENTER"
  Then I expect that container "#main" contains the text "Star Wars"

@google
Scenario: Searching Google for Yoda
  When I set "Yoda" to the inputfield "input[name=q]"
  And I press "ENTER"
  Then I expect that container "#main" contains the text "Star Wars"

@test2
Scenario: waitForElementVisible
  Then I expect that element ".lnXdpd2" is visible
