const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const caps = {
  'browser': 'chrome',
  'browser_version': 'latest',
  'os': 'osx',
  'os_version': 'catalina',
  'name': 'Codecept test using Puppeteer',
  'build': 'CodeceptJS Puppeteer on BrowserStack',
  'browserstack.username': 'souravkundu5',
  'browserstack.accessKey': '8rVfmauhSSuDRTH1xxRt'
};

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      chrome: {
        browserWSEndpoint: `wss://cdp.browserstack.com?caps=${encodeURIComponent(JSON.stringify(caps))}`
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs-example',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}