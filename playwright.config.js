// Import necessary modules and functions
const { defineConfig, devices } = require('@playwright/test');
const dotenv = require('dotenv');
const path = require('path');

// Load environment variables from .env file
dotenv.config();

// Define the configuration object for the Playwright test runner
module.exports = defineConfig({
  testDir: path.join(__dirname, './tests'),
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',

  // Define shared settings for all projects
  use: {
    baseURL: process.env.DEFAULT_SITE_URL || 'http://localhost:3000',
    trace: 'on-first-retry',
    video: 'on',
    timeout: 30000, // Global timeout for tests (in milliseconds)
  },

  // Define the projects to run, each with its own settings
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
      outputDir: path.join(__dirname, 'reports', 'desktop-chrome'),
    },
    {
      name: 'Mobile iPhone 12',
      use: {
        ...devices['iPhone 12'],
        browserName: 'webkit',
      },
      outputDir: path.join(__dirname, 'reports', 'mobile-iphone-12'),
    },
    {name: Run Playwright and Generate a video, screenshots, and LightHouse HTML Report
on:
  push:
    branches: "*"
  workflow_dispatch:
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "17.x"
      - name: Install dependencies
        run: |
          sudo apt-get update
          sudo apt-get install -y libgbm-dev
          npm ci
          npx playwright install chromium
          npm install -g lighthouse chrome-launcher axe-core chromium wait-on
          npm install next@latest
      - name: Create the build
        run: npx next build
      - name: Check and kill process on port 3000
        run: |
          sudo fuser -k 3000/tcp || true
      - name: Start the application
        run: |
          export DISPLAY=:1
          echo "Starting the application..."
          npm run start & npx wait-on --timeout 50000 http://0.0.0.0:3000/
          echo "Application started."
      - name: Run Playwright tests
        run: npx playwright test --config=playwright.config.js
      - name: Generate Lighthouse Report
        run: |
          lighthouse http://localhost:3000/ --output html --output-path ./test-results/report.html --chrome-flags="--headless --no-sandbox --disable-gpu"
      - name: Upload report, screenshots and videos of failed tests
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: ./test-results},
  ],

  // Specify the local development server to run before the tests
  webServer: {
    command: 'next dev',
    port: 3000,
    reuseExistingServer: true,
  },

  // Specify the directory to save the test report files
  reporterOptions: {
    html: ({ testInfo }) => {
      const testTitlePath = testInfo.titlePath().join(' - ').replace(/[\s"'<>|]/g, '_');
      const pagePath = testInfo.annotations.find(({ type }) => type === 'page').value.path;
      const reportPath = path.join(__dirname, 'reports', pagePath, testInfo.project.name, testTitlePath, 'report.html');
      return reportPath;
    },
    junit: ({ result }) => path.join(__dirname, `reports/playwright/${result.testFile.replace(/\.js$/, '.xml')}`),

    // Add video report option
    video: ({ outputDir, testInfo }) => {
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const testTitlePath = testInfo.titlePath().join(' - ').replace(/[\s"'<>|]/g, '_');
      const pagePath = testInfo.annotations.find(({ type }) => type === 'page').value.path;
      const reportPath = path.join(outputDir, pagePath, testInfo.project.name, testTitlePath, timestamp, 'video.webm');
      console.log(`Video report path: ${reportPath}`);
      return reportPath;
    },
  },
});
