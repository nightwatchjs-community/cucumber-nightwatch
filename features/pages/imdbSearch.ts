import { PageObjectModel, EnhancedPageObject, NightwatchAPI } from 'nightwatch'

const imdbSearch: PageObjectModel = {
  elements: {
    searchCategorySelectLabel:
      '#nav-search-form label[for=navbar-search-category-select]',
    searchCategorySelectOptions: '#navbar-search-category-select-contents',
    searchCategoryOptionForTitles: {
      selector:
        '//*[@id="navbar-search-category-select-contents"]//*[text()="Titles"]',
      locateStrategy: 'xpath',
    },
    searchInput: '#suggestion-search',
    searchButton: '#suggestion-search-button',
  },
  commands: [
    {
      findMovieInTitleSection(this: NightwatchAPI, title: string) {
        return this.waitForElementVisible(
          'xpath',
          `//section[@data-testid="find-results-section-title"]//a[text()="${title}"]`
        )
      },
      clickMovieInTitleSection(this: NightwatchAPI, title: string) {
        return this.click(
          'xpath',
          `//section[@data-testid="find-results-section-title"]//a[text()="${title}"]`
        )
      },
    },
  ],
}

export default imdbSearch
export type IMDBSearchPage = EnhancedPageObject<
  typeof imdbSearch.elements,
  typeof imdbSearch.commands
>
