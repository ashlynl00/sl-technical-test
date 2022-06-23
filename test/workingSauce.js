const {Builder, By, Key, until} = require('selenium-webdriver')
const SauceLabs = require('saucelabs').default;
const assert = require('assert');
const utils = require('./utils');
require('dotenv').config();

const SAUCE_USERNAME = process.env.SAUCE_USERNAME;
const SAUCE_ACCESS_KEY = process.env.SAUCE_ACCESS_KEY;
const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.saucelabs.com:443/wd/hub`;
// NOTE: Use the URL below if using our EU datacenter (e.g. logged in to app.eu-central-1.saucelabs.com)
// const ONDEMAND_URL = `https://${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY}@ondemand.eu-central-1.saucelabs.com:443/wd/hub`;

/**
* Task I: Update the test code so when it runs, the test clicks the "I am a link" link.
*
* Task II - Comment out the code from Task I. Update the test code so when it runs, 
* the test is able to write "Sauce" in the text box that currently says "I has no focus".
*
* Task III - Update the test code so when it runs, it adds an email to the email field, 
* adds text to the comments field, and clicks the "Send" button.
* Note that email will not actually be sent!
*
* Task IV - Add a capability that adds a tag to each test that is run.
* See this page for instructions: https://docs.saucelabs.com/dev/test-configuration-options/
* 
* Bonus: Set the status of the test so it shows as "passed" instead of "complete".
* We've included the node-saucelabs package already. For more info see:
* https://github.com/saucelabs/node-saucelabs
*/

describe('Working Sauce', function () {
    it('should go to Google and click Sauce', async function () {
        let driver = await new Builder().withCapabilities(utils.workingCapabilities)
                    .usingServer(ONDEMAND_URL).build();


    /**
     * Goes to Sauce Lab's guinea-pig page and verifies the title
     */

    await driver.get("https://saucelabs.com/test/guinea-pig");
    await assert.strictEqual("I am a page title - Sauce Labs", await driver.getTitle());

    // Task I

    // // find link and call click method
    // driver.findElement(By.id("i am a link")).click();

    // // check new page to see if it clicked
    // let newPageElement;
    // try {
    //     newPageElement = driver.findElement(By.id('i_am_an_id')).isDisplayed();
    // } catch (err) {
    //     newPageElement = false;
    // }
    // // check if an element on the new page is being displayed
    // await assert.strictEqual(true, await newPageElement)

    // Task II

    // // find textbox element
    // let textbox = driver.findElement(By.id("i_am_a_textbox"));
    
    // // clear the field
    // textbox.clear();
    // await assert.strictEqual("", await textbox.getAttribute("value"));
    // //textbox.sendKeys(driver.Keys.chord(driver.Keys.CONTROL,"a", driver.Keys.DELETE));
    
    // // set new text
    // textbox.sendKeys("Sauce");
    

    // // check if new value matches expected
    // let textboxValue = textbox.getAttribute("value");
    // await assert.strictEqual("Sauce", await textboxValue);

    // Task III

    // // find the email element
    // let fbemail = driver.findElement(By.id("fbemail"));

    // // give the email element a new value
    // fbemail.sendKeys("ashlyn@downing.us");

    // // retrieve the value of email element to check if it matches expected
    // let fbemailValue = fbemail.getAttribute("value");
    // await assert.strictEqual("ashlyn@downing.us", await fbemailValue);

    // // find the comment element
    // let comments = driver.findElement(By.id("comments"));

    // // set comments element with new value
    // comments.sendKeys("hello!");

    // // retrieve value of element to check if it matches expected
    // let commentsValue = comments.getAttribute("value");
    // await assert.strictEqual("hello!", await commentsValue);

    // // now click submit button
    // await driver.findElement(By.id("submit")).click();



    await driver.quit();
    });
});
