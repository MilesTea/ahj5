// jest.useFakeTimers()
jest.setTimeout(20000)
import puppeteer from 'puppeteer';
let page;
let browser;
const width = 1920;
const height = 1080;

beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`]
    });
    page = await browser.newPage();
    await page.setViewport({ width, height });
}, 20000);
afterAll(() => {
browser.close();
});


test('button on page', async () => {
    await page.goto('http://127.0.0.1:8080/');
    await page.waitForTimeout(2000);
    // const element = await page.waitForSelector('.big_resd_button');
    const element = await page.$('.big_red_button');
    await expect(element).toBeTruthy()
}, 20000)


test('tooltip on page', async () => {
    await page.goto('http://127.0.0.1:8080/');
    await page.waitForTimeout(2000);
    // const element = await page.waitForSelector('.big_resd_button');
    await page.click('.big_red_button');

    const element = await page.$('.tooltip');
    await expect(element).toBeTruthy()
}, 20000)

test('tooltip not on page', async () => {
    await page.goto('http://127.0.0.1:8080/');
    await page.waitForTimeout(2000);
    // const element = await page.waitForSelector('.big_resd_button');
    await page.click('.big_red_button');
    await page.click('.big_red_button');

    const element = await page.$('.tooltip');
    await expect(element).toBeFalsy()
}, 20000)