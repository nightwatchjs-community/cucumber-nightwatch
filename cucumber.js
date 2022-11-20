const { DEFAULT_THEME } = require('@cucumber/pretty-formatter')

module.exports = {
  default: {
    format: ['@cucumber/pretty-formatter', 'html:report.html'],
    formatOptions: {
      colorsEnabled: true,
      theme: {
        ...DEFAULT_THEME,
        'feature keyword': ['magenta', 'bold'],
        'scenario keyword': ['green'],
        'step text': ['green'],
      },
    },
    requireModule: ['ts-node/register'],
    require: ['features/**/*.ts'],
  },
}
