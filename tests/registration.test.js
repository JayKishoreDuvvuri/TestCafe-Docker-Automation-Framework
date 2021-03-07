import BasePage from '../pages/basePage'
import RegistrationPage from '../pages/registrationPage'
import { title, registrationUrl } from '../pageobjects/locators'

const basePage = new BasePage()
const registrationPage = new RegistrationPage()

fixture`Registration Test`.page(registrationUrl)

const actualURL = basePage.getPageUrl()
const actualTitle = basePage.getPageTitle()

test('Check Registration Page Logo and label is visible', async t => {
	await registrationPage.maximizeWindow()
	await t.expect(registrationPage.homePageLogo).ok()
	await t.expect(registrationPage.homePageLabel).ok()
})

test('Enter User credentials for Registration then verify page title and url', async t => {
	await registrationPage.enterUserName()
	await registrationPage.enterFirstName()
	await registrationPage.enterLastName()
	await registrationPage.enterEmail()
	await registrationPage.selectCountry()
	await registrationPage.enterPassword()
	await t.expect(actualTitle()).eql(title)
	await t.expect(actualURL()).eql(registrationUrl)
})
