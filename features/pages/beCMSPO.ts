import { PageObjectModel, EnhancedPageObject } from 'nightwatch'

const cms: PageObjectModel = {
  elements: {
    loginForm: '#user-login-form',
    pageTitle: 'h1.page-title',
  },
}

export default cms
export type CMSPage = EnhancedPageObject<typeof cms>
