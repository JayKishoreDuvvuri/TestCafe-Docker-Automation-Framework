import BasePage from '../pages/basePage'
import {
	pageLogo,
	pageLabel,
	username,
	firstname,
	country,
	email,
	lastname,
	password,
} from '../pageobjects/locators'
import {
	userNameTxt,
	firstNameTxt,
	lastNameTxt,
	emailId,
	countryName,
	passwordTxt,
} from '../pageobjects/data'
import { t } from 'testcafe'

export default class RegistrationPage extends BasePage {
	async homePageLogo() {
		const logo = await this.findByCss(pageLogo)
		return this.elementIsVisible(logo)
	}

	async homePageLabel() {
		const label = await this.findByCss(pageLabel)
		return this.elementIsVisible(label)
	}

	async enterUserName() {
		const userName = await this.findByCss(username)
		return this.sendKeys(userName, userNameTxt)
	}

	async enterFirstName() {
		const firstName = await this.findByCss(firstname)
		return this.sendKeys(firstName, firstNameTxt)
	}

	async enterLastName() {
		const lastName = await this.findByCss(lastname)
		return this.sendKeys(lastName, lastNameTxt)
	}

	async enterEmail() {
		const userEmail = await this.findByCss(email)
		return this.sendKeys(userEmail, emailId)
	}

	async selectCountry() {
		const selectCountry = await this.findByCss(country)
		const countryOption = selectCountry.find('option')
		return await t.click(country).click(countryOption.withText(countryName))
	}

	async enterPassword() {
		const passWord = await this.findByCss(password)
		return this.sendKeys(passWord, passwordTxt)
	}
}
