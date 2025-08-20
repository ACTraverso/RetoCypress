const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com/login',
    viewportWidth: 950,
    viewportHeight: 650,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
