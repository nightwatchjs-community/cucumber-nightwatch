/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Given, When, Then, DataTable } from '@cucumber/cucumber'
import World from '../../src/support/NightwatchWorld'
import { IMDBPage } from '../pages/imdb'
import { IMDBSearchPage } from '../pages/imdbSearch'

Given('I am on the IMDB homepage', async function (this: World) {
  const imdb = this.browser!.page.imdb() as IMDBPage
  await imdb.navigate().waitForElementPresent('@header')
})

When('I search for {string}', async function (this: World, search: string) {
  const imdbSearch = this.browser!.page.imdbSearch() as IMDBSearchPage
  await imdbSearch
    .click('@searchCategorySelectLabel')
    .waitForElementVisible('@searchCategorySelectOptions')
    .click('@searchCategoryOptionForTitles')
    .assert.textEquals('@searchCategorySelectLabel', 'Titles')
  await imdbSearch
    .setValue('@searchInput', search)
    .assert.valueEquals('@searchInput', search)
  await imdbSearch
    .click('@searchButton')
    .expect.title()
    .to.equals('Find - IMDb')
})

Then(
  'I should be able to access the movie page below from the search result',
  async function (this: World, movieDetails: DataTable) {
    const imdbSearch = this.browser!.page.imdbSearch() as IMDBSearchPage
    const movie = movieDetails.rowsHash()
    await imdbSearch
      .findMovieInTitleSection(movie.title)
      .clickMovieInTitleSection(movie.title)
      .expect.title()
      .to.equals(`${movie.title} (${movie.year}) - IMDb`)
  }
)
