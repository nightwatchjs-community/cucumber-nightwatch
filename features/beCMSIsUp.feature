@backend @core @smoke
Feature: Smoke testing the CMS application
Check if the CMS application is up and running

Scenario: Homepage loads correctly
  Given I am on the backend page "/"
  Then I verify the CMS homepage is loaded

Scenario: Demo content module is enabled
  Given I log into the CMS as "admin"
  Then I verify the CMS page title is "Dashboard"

# @login
# Scenario: Demo content module is enabled
#   Given I log into the CMS as "admin"
#   Then I verify the CMS page title is "Dashboard"
# @login
# Scenario: Demo content module is enabled
#   Given I log into the CMS as "admin"
#   Then I verify the CMS page title is "Dashboard"
# @login
# Scenario: Demo content module is enabled
#   Given I log into the CMS as "admin"
#   Then I verify the CMS page title is "Dashboard"