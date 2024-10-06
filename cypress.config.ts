import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    experimentalRunAllSpecs: true,
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
