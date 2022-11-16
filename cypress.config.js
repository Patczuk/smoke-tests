const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    "numTestsKeptInMemory": 0,
    "pageLoadTimeout": 150000
  }
})


