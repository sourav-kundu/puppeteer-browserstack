'use strict';
const { strict } = require('once');
const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const browserstack = require('browserstack-local');

//creates an instance of Local
const bs_local = new browserstack.Local();

// replace <browserstack-accesskey> with your key. You can also set an environment variable - "BROWSERSTACK_ACCESS_KEY".
const bs_local_args = { 'key': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY' };

// Starts the Local instance with the required arguments
bs_local.start(bs_local_args, async function () {
    console.log('Started BrowserStackLocal');
  
    // Check if BrowserStack local instance is running
    console.log('BrowserStackLocal running:', bs_local.isRunning());
  
    const caps = {
        'browserName': 'chrome',
        'browser_version': 'latest',
        'os': 'os x',
        'os_version': 'catalina',
        'build': 'puppeteer-build-1',
        'name': 'My first Puppeteer test',
        'browserstack.username': process.env.BROWSERSTACK_USERNAME || 'YOUR_USERNAME',
        'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY || 'YOUR_ACCESS_KEY',
        'browserstack.local': 'true'
    };
    const browser = await puppeteer.connect({
    browserWSEndpoint:
    `ws://cdp.browserstack.com?caps=${encodeURIComponent(JSON.stringify(caps))}`,
    });

    /* 
    *  BrowserStack specific code ends here
    */
    const page = await browser.newPage();
    await page.goto('http://localhost:45691');
    try {
        await page.waitForFunction(
            'document.querySelector("body").innerText.includes("This is an internal server for BrowserStack Local")',
          );
        // following line of code is responsible for marking the status of the test on BrowserStack as 'passed'. You can use this code in your after hook after each test
        await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed',reason: 'Local is up and running'}})}`);
    } catch {
        await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'failed',reason: 'BrowserStack Local binary is not running'}})}`);
    }
    await browser.close();
  
    // Stop the Local instance after your test run is completed, i.e after driver.quit
    bs_local.stop(function () {
      console.log('Stopped BrowserStackLocal');
    });
  });