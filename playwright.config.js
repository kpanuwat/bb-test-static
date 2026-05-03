const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  use: { baseURL: process.env.PLAYWRIGHT_BASE_URL || 'http://localhost:8788' },
  testDir: './e2e',
  projects: [{ name: 'chromium', use: { browserName: 'chromium' } }],
});
