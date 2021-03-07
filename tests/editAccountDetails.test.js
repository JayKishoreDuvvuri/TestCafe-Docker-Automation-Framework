import BasePage from '../pages/basePage'
import LoginPage from '../pages/loginPage'
import AccountPage from '../pages/accountPage'
import {
	loginUrl,
	accountPageTitle,
	accountPageUrl,
} from '../pageobjects/locators'

const basePage = new BasePage()
const loginPage = new LoginPage()
const accountPage = new AccountPage()

fixture`Edit Account Details Test`.page(loginUrl)

let actualURL = basePage.getPageUrl()
let actualTitle = basePage.getPageTitle()

test('Edit the field username of Account details page and verify the success message', async t => {
	await loginPage.maximizeWindow()
	await loginPage.enterEmail()
	await loginPage.enterPassword()
	await loginPage.clickSubmitButton()
	await loginPage.enterPin()
	await t.expect(accountPage.accountPageHeadingTitle).ok()
	await t.expect(accountPage.accountPageHeader).ok()
	await accountPage.clickEditAccountDetails()
	await t.expect(accountPage.editMyInfoTitle).ok()
	await t.expect(accountPage.editAccountDetailsHeader).ok()
	await accountPage.enterUserName()
	await accountPage.editAccountSubmitButton()
	await t.expect(accountPage.editAccountSuccessMessage).ok()
	await t.expect(actualTitle()).eql(accountPageTitle)
	await t.expect(actualURL()).contains(accountPageUrl)
})
