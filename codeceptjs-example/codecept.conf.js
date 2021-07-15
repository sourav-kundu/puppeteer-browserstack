const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

const caps = {
  'browser': 'chrome',
  'os': 'osx',
  'os_version': 'catalina',
  'name': 'Codecept test using Puppeteer',
  'build': 'CodeceptJS on BrowserStack',
  'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
  'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY'
};

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      browser: 'chrome',
      chrome: {
        browserWSEndpoint: `ws://cdp.browserstack.com?caps=${encodeURIComponent(JSON.stringify(caps))}`
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