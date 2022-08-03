# jacob_cherian_teledoc_challenge

A. Initial Setup 

1. Install node.js from https://nodejs.org/en/ and verify node 
2. This will auto install npm  
3. Install cypress - npm install cypress --save-dev
4. Install Cucumber - # npm install --save-dev @cucumber/cucumber
5. From the project folder run npm init -y to create a package json
5. Add this to the Package.json
     "devDependencies": {
    "cypress": "^10.4.0",
    "cypress-cucumber-preprocessor": "^4.3.1"
  },
  "cypress-cucumber-preprocessor": {
    "nonGlobalStepDefinitions": true,
    "stepDefinitions": "cypress/e2e/BDD/Teledoc/StepDefinitions.js"
  }

5. Add this to config.js 

specPattern:'cypress/e2e/BDD/*.feature'
      //specPattern:'cypress/e2e/*.js'
  },
 

B. Clone the repo and go to the project and run npx cypress to open the Cypress Test Runner