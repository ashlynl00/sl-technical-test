const {Builder, By, Key, until, Actions} = require('selenium-webdriver')
const utils = require('./utils');
require('dotenv').config();

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.us-west-1.saucelabs.com:443/wd/hub`;
// NOTE: Use the URL below if using our EU datacenter (e.g. logged in to app.eu-central-1.saucelabs.com)
// const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;


/**
* Run this test before working on the problem.
* When you view the results on your dashboard, you'll see that the test "Failed".
* Your job is to figure out why the test failed and make the changes necessary to make the test pass.
*
* Bonus: Once you get the test working, update the code so that when the test runs, it 
* can reach the Sauce Labs homepage 
* hover over 'Resources' and then clicks the 'Documentation' link
*/

describe('Broken Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.brokenCapabilities)
                    .usingServer(ONDEMAND_URL).build();

        await driver.get("https://www.google.com");
        // If you see a German or English GDPR modal on google.com you 
        // will have to code around that or use the us-west-1 datacenter.
        // You can investigate the modal elements using a Live Test(https://app.saucelabs.com/live/web-testing)


        // let search = await driver.findElement(By.name("q"));
        // await search.sendKeys("Sauce Labs");
        
        // let button = await driver.findElement(By.name("btnK"));
        // await button.click();

        // let page = await driver.findElement(By.partialLinkText("sauce"));
        // await page.click();

        // // BONUS
        // const actions = driver.actions();
        // // Find Resources element
        // let resources = await driver.findElement(By.partialLinkText("Resources"));
        // // Use an action to hover over resources element
        // await actions.move({origin:resources}).perform();
        // // From there, find element with documentation in it
        // let documentation = driver.findElement(By.partialLinkText("Documentation"));
        // // Click on documentation element
        // await documentation.click(); 


        await driver.quit();
    });
});
