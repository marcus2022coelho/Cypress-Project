const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qhotgp',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions:{
      charts: true,
      reportTitle: 'Projeto Cypress',
      reportPageTitle: 'Projeto Cypress',
      
    },
    baseUrl: 'https://automationpratice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
