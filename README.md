# Cucumber-js Nightwatch.js Integration Example

[![Test](https://github.com/nightwatchjs-community/cucumber-nightwatch/actions/workflows/test.yml/badge.svg)](https://github.com/nightwatchjs-community/cucumber-nightwatch/actions/workflows/test.yml)

This example is for using [Nightwatch.js(V2)](https://nightwatchjs.org/) with [Cucumber-js](https://github.com/cucumber/cucumber-js).

## Motivation

**It uses the Cucumber-js CLI runner itself, instead of nightwatch CLI.** See [Github discussion](https://github.com/nightwatchjs/nightwatch/discussions/2973).

It is different with [nightwatchjs/cucumberjs-boilerplate](https://github.com/nightwatchjs/cucumberjs-boilerplate), which uses Nightwatch.js CLI and build-in Cucumber test runner.

## Getting Started

You can fork this example as a start point.

This example uses TypeScript, but the cucumber & nightwatch configuration can be same if you are only using JavaScript.

## Usage

```shell
npm run test
```

Chose a browser

```
NIGHTWATCH_BROWSER=chrome npm run test
```

Pass [cucumber-js Options](https://github.com/cucumber/cucumber-js/blob/main/docs/configuration.md#options)

```shell
npm run test -- --tags "@google" --retry 2 --parallel 4
```

## Dependencies

### Cucumber-js

- @cucumber/cucumber
- @cucumber/pretty-formatter
- dotenv

### Nightwatch.js

- nightwatch
- chromedriver
- geckodriver

### TypeScript (Optional for non TS setup)

- typescript
- ts-node
- @types/node
- @tsconfig/node16
- @types/nightwatch

### Linter and formatter (Optional)

- eslint
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser"
- prettier
- eslint-config-prettier
