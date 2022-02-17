# Cucumber-js Nightwatch.js integreation example

This example is for using Nightwatch.js(V2) with Cucumber.js.

It uses the Cucumber-js CLI runner itself.

Motivation: https://github.com/nightwatchjs/nightwatch/discussions/2973

It is different with [nightwatchjs/cucumberjs-boilerplate](https://github.com/nightwatchjs/cucumberjs-boilerplate), which uses Nightwatch.js CLI and build-in Cucumber test runner.

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
