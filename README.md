# Cucumber-js Nightwatch.js Integration Example

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
BROWSER=chrome npm run test
```

Pass cucumber-js Options

```shell
npm run test -- --tags "@google" --retry 2 --parallel 4
```
