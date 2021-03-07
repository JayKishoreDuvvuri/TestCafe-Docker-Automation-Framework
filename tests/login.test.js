import BasePage from '../pages/basePage'
import LoginPage from '../pages/loginPage'
import {
	accountPageTitle,
	loginUrl,
	accountPageUrl,
} from '../pageobjects/locators'

const basePage = new BasePage()
const loginPage = new LoginPage()

fixture`Login Test - Valid Login`.page(loginUrl)

let actualURL = basePage.getPageUrl()
let actualTitle = basePage.getPageTitle()

test('Verify Login Page Logo and label is visible', async t => {
	await loginPage.maximizeWindow()
	await t.expect(loginPage.loginPageLogo).ok()
	await t.expect(loginPage.loginPageLabel).ok()
})

test('Enter User credentials for valid login', async t => {
	await loginPage.enterEmail()
	await loginPage.enterPassword()
	await loginPage.clickSubmitButton()
	await loginPage.enterPin()
	await t.expect(actualTitle()).eql(accountPageTitle)
	await t.expect(actualURL()).contains(accountPageUrl)
})

fixture`Login Test - Invalid Login with Incorrect Email`.page(loginUrl)

test('Enter wrong email for Invalid login', async t => {
	await loginPage.enterInvalidEmail()
	await loginPage.enterPassword()
	await loginPage.clickSubmitButton()
	await t.expect(loginPage.errorAlert).ok()
})

fixture`Login Test - Invalid Login with Incorrect Password`.page(loginUrl)

test('Enter wrong password for Invalid login', async t => {
	await loginPage.enterEmail()
	await loginPage.enterInvalidPassword()
	await loginPage.clickSubmitButton()
	await t.expect(loginPage.errorAlert).ok()
})

fixture`Login Test - Invalid Login with Incorrect Email and Password`.page(
	loginUrl
)

test('Enter wrong password for Invalid login', async t => {
	await loginPage.enterInvalidEmail()
	await loginPage.enterInvalidPassword()
	await loginPage.clickSubmitButton()
	await t.expect(loginPage.errorAlert).ok()
})

fixture`Forgot Password Test`.page(loginUrl)

test('Click Forgot your password? link and verify forgot password page header title', async t => {
	await loginPage.forgotPasswordLink()
	await t.expect(loginPage.forgotPasswordTitleVisible).ok()
	await t.expect(loginPage.requestNewPasswordVisible).ok()
})

test('Enetr email for forgot password and Verify email sent success message', async t => {
	await loginPage.emailForForgotPassword()
	await loginPage.clickForgotPasswordSubmitButton()
	await t.expect(loginPage.successMessageVisible).ok()
})
