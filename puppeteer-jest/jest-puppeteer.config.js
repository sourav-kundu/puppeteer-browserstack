const caps_chrome = {
    'browser': 'chrome',
    'browser_version': 'latest',
    'os': 'osx',
    'os_version': 'big sur',
    'name': 'Puppeteer-jest test on Chromium',
    'build': 'puppeteer-jest-build-2',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY'
};

const caps_firefox = {
    'browser': 'firefox',
    'browser_version': 'latest',
    'os': 'osx',
    'os_version': 'big sur',
    'name': 'Puppeteer-jest test on Firefox',
    'build': 'puppeteer-jest-build-1',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY'
};

const caps_edge = {
    'browser': 'edge',
    'browser_version': 'latest',
    'os': 'osx',
    'os_version': 'big sur',
    'name': 'Puppeteer-jest test on Webkit',
    'build': 'puppeteer-jest-build-1',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY'
};

module.exports = {
  connect: {
    browserWSEndpoint: `ws://cdp.browserstack.com?caps=${encodeURIComponent(JSON.stringify(caps_chrome))}`,
  },
  // browsers: ['chrome', 'firefox', 'edge'],
}