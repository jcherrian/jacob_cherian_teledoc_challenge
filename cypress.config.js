const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {

   baseUrl: 'https://www.way2automation.com/angularjs-protractor/webtables/',
    env: {

    commandDelay: 300, 
    },
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
      specPattern:'cypress/e2e/BDD/*.feature'
      //specPattern:'cypress/e2e/*.js'
  },
});
