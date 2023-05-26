/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Given, When, Then, DataTable } from '@cucumber/cucumber'
import World from 'cucumber-nightwatch'
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

When('I looking for a not existing element', async function (this: World) {
  try {
    // These won't throw an error in v2 without patch
    // See: patches/nightwatch+2.6.14.patch
    // And issue demo https://github.com/nightwatchjs-community/cucumber-nightwatch/pull/9
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
    // These won't throw an error, no patch
    // await this.browser!.click('#not-existing-element')
    // await this.browser!.ensure.elementIsVisible('#not-existing-element')

    // Below works fine in v2
    // await this.browser!.expect.element('#not-existing-element').to.be.present;
    // await this.browser!.expect.element('#not-existing-element').to.be.visible;
    // await this.browser!.assert.visible('#not-existing-element')
    console.log('No error has been caught')
  } catch (error) {
    console.log('We expect error from failed command: ', error)
    throw new Error('Expected error has been caught')
  }
})
