@imdb @ci
Feature: IMDB movie search

Scenario: I can search for a movie
  Given I am on the IMDB homepage
  When I search for "The Man from Earth"
  Then I should be able to access the movie page below from the search result
  | title | The Man from Earth |
  | year  | 2007               |

@fail
Scenario: should fail
  Given I am on the IMDB homepage
  When I looking for a not existing element
