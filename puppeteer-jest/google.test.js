// import 'expect-puppeteer'

describe("Google", () => {
  beforeAll(async () => {
    await page.goto('https://google.com')
  })
  it('title should match BrowserStack - Google Search', async () => {
    const element = await page.$('[aria-label="Search"]');
    await element.click();
    await element.type('BrowserStack');
    await element.press('Enter');
    expect(await page.title()).toBe('BrowserStack - Google Search');
    await page.evaluate(_ => {}, `browserstack_executor: ${JSON.stringify({action: 'setSessionStatus',arguments: {status: 'passed',reason: 'Test assertion passed'}})}`);
  })
})