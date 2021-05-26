# puppeteer-browserstack
Sample Puppeteer tests to run on BrowserStack

## Introduction

You can now run your Puppeteer tests on the BrowserStack infrastructure. Porting your existing Puppeteer tests to run on BrowserStack, can be done in a matter of minutes.

This guide walks you through running a sample Puppeteer test on BrowserStack and then goes on to run tests on privately hosted websites.

## Pre-requisites

You need BrowserStack credentials to be able to run Puppeteer tests and also you need to be included in the Beta group so that we can enable Puppeteer access for you in our infra while the integration is in closed-beta.

If you have already been included in the beta group, proceed ahead. Else, you can [reach out to support](https://www.browserstack.com/contact#technical-support) to get included in the beta group.

You have to replace `YOUR_USERNAME` and `YOUR_ACCESS_KEY` in the sample scripts in this repository with your BrowserStack credentials which can be found in your [Account Settings](https://www.browserstack.com/accounts/settings) page.

## Run your first Playwright test on BrowserStack

1. Clone this repository
2. Install the dependencies using `npm install`
3. Replace `YOUR_USERNAME` and `YOUR_ACCESS_KEY` in `google_search.js` with your BrowserStack credentials
3. Run the sample script using `node google_search.js`

## Test across multiple browser and OS versions in parallel

1. Clone this repository (if not already done)
2. Install the dependencies using `npm install` (if not already done)
3. Replace `YOUR_USERNAME` and `YOUR_ACCESS_KEY` in `parallel_test.js` file, with your BrowserStack credentials
4. Run across 8 different browser and OS combinations in parallel using `node parallel_test.js`


## Run sample test on privately hosted websites

1. You have to download the BrowserStack Local binary from the links below (depending on your local machine's environment):
   * [OS X (10.7 and above)](https://www.browserstack.com/browserstack-local/BrowserStackLocal-darwin-x64.zip)
   * [Linux 32-bit](https://www.browserstack.com/browserstack-local/BrowserStackLocal-linux-ia32.zip)
   * [Linux 64-bit](https://www.browserstack.com/browserstack-local/BrowserStackLocal-linux-x64.zip)
   * [Windows (XP and above)](https://www.browserstack.com/browserstack-local/BrowserStackLocal-win32.zip)
2. Once you have downloaded and unzipped the file, you can initiate the binary by running the command: `./BrowserStackLocal --key YOUR_ACCESS_KEY`
3. Once you see the terminal say “\[SUCCESS\] You can now access your local server(s) in our remote browser”, your local testing connection is considered established.
4. You can then replace `YOUR_USERNAME` and `YOUR_ACCESS_KEY` in `local_test.js` with your BrowserStack credentials and run the sample Local test using `node local_test.js`

## Supported browser versions

Puppeteer tests can be run on BrowserStack in the following browsers (including versions):
1. `chrome` browser version `72` and above across different versions of Windows and macOS operating systems mentioned below.
2. `firefox` browser version `86` and above across all supported OS versions as mentioned below.

You can use the `browser_version` capability to specify the version of the browser where you want to run your tests. We support values like `latest-beta`, `latest`, `latest-1`, `latest-2` and so on, in the `browser_version` capability so specify the current beta, latest or latest-n browser version to run your tests.

You can specify the `browser` and `browser_version` capability as follows:<br> (`'browser': 'chrome', 'browser_version': 'latest-beta'`)

### OS (with versions) supported
1. Windows 10 (`'os': 'Windows', 'os_version': '10'`)
2. Windows 8.1 (`'os': 'Windows', 'os_version': '8.1'`)
3. Windows 8 (`'os': 'Windows', 'os_version': '8'`)
4. Windows 7 (`'os': 'Windows', 'os_version': '7'`)
5. macOS Big Sur (`'os': 'osx', 'os_version': 'Big Sur'`)
6. macOS Catalina (`'os': 'osx', 'os_version': 'Catalina'`)
7. macOS High Sierra (`'os': 'osx', 'os_version': 'High Sierra'`)
8. macOS Sierra (`'os': 'osx', 'os_version': 'Sierra'`)
9. macOS El Capitan (`'os': 'osx', 'os_version': 'El Capitan'`)

## Facing issues?

If you are facing any issue with any of the above or any other issue in trying to run your Playwright tests on BrowserStack, you can reach out to me directly at `sourav.k@browserstack.com` and I will be happy to debug your issues or at the least ensure that your issue becomes our top priority to resolve.