import { PageObjectModel, EnhancedPageObject } from 'nightwatch'

const imdb: PageObjectModel = {
  url: 'https://www.imdb.com/',
  elements: {
    header: '#imdbHeader',
  },
}

export default imdb
export type IMDBPage = EnhancedPageObject<typeof imdb.elements>
