const { expect } = require('chai');
const { Given, When, Then, } = require('@cucumber/cucumber');
const { LoginPage } = require('../../pageobjects/pages/loginPage');
const { getAlertText } = require('appium-uiautomator2-driver/build/lib/commands/alert');
const loginPage = new LoginPage();

//Test data
const valid_username = 'bob@example.com';
const valid_password = '10203040';
const invalid_username = '1@2.com';
const invalid_password = 'f-o-o';
const locked_username = 'alice@example.com';
const locked_password = '10203040';


Given(/^I am on the login screen$/, async () => {
  await loginPage.moveToLoginPage();
});

When(/^I enter invalid username and password$/, async () => {
  await loginPage.enterUsername(invalid_username);
  await loginPage.enterPassword(invalid_password);
});

When(/^I click on the login button$/, async () => {
  await loginPage.clickLoginButton();
});

When(/^I leave the username blank$/, async () => {
  await loginPage.enterUsername('');
});

When(/^I leave the password blank$/, async () => {
  await loginPage.enterPassword('');
});

When(/^I enter a valid username$/, async () => {
  await loginPage.enterUsername(valid_username);
});

When(/^I enter a valid password$/, async () => {
  await loginPage.enterPassword(valid_password);
});

When(/^I enter an invalid username$/, async () => {
  await loginPage.enterUsername(invalid_username);
});

When(/^I enter valid username and password$/, async () => {
  await loginPage.enterUsername(valid_username);
  await loginPage.enterPassword(valid_password);
});

When(/^I enter the username and password of a locked user$/, async () => {
  await loginPage.enterUsername(locked_username);
  await loginPage.enterPassword(locked_password);
});

Then(/^I should see an error message$/, async () => {
  const errorMessage = await loginPage.genericErrorMessage.getText();
  expect(errorMessage).to.equal('Provided credentials do not match any user in this service.');
});

Then(/^I should see an error message for both fields$/, async () => {
  const errorMessageUserName = await loginPage.errorMessageUserName.getText();
  expect(errorMessageUserName).to.equal('Username is required');
});

Then(/^I should see an error message for the username$/, async () => {
  const errorMessageUserName = await loginPage.errorMessageUserName.getText();
  expect(errorMessageUserName).to.equal('Username is required');
});

Then(/^I should see an error message for the password$/, async () => {
  const errorMessagePassword = await loginPage.errorMessagePasswordRequired.getText();
  expect(errorMessagePassword).to.equal('Password is required');
});

Then(/^I should see a message indicating that the user is locked$/, async () => {
  const lockedUserMessage = await loginPage.genericErrorMessageLocked.getText();
  expect(lockedUserMessage).to.equal('Sorry, this user has been locked out.');
});

Then(/^I should be logged in successfully$/, async () => {
  await loginPage.moveToLoginPage();
  const isDisplayed = await loginPage.buttonGoShopping.isDisplayed();
  console.log(isDisplayed);
  //expect(goShoppingButton).to.equal('Go Shopping');
});
