import BasePage from './basePage'
import {
	loginPageLogo,
	loginPageLabel,
	email,
	password,
	submitButton,
	pin,
	errorAlert,
	forgotPasswordLink,
	forgotPasswordTitle,
	requestNewPasswordTitle,
	forgotPasswordSubmitButton,
	forgotPasswordSuccessMessage,
} from '../pageobjects/locators'
import {
	emailId,
	invalidEmailId,
	passwordTxt,
	invalidPasswordTxt,
	pinTxt,
	secondEmailId,
} from '../pageobjects/data'

export default class LoginPage extends BasePage {
	async loginPageLogo() {
		const logo = await this.findByCss(loginPageLogo)
		return this.elementIsVisible(logo)
	}

	async loginPageLabel() {
		const label = await this.findByCss(loginPageLabel)
		return this.elementIsVisible(label)
	}

	async clickEmailField() {
		const userName = await this.findByCss(email)
		return this.click(userName)
	}

	async enterEmail() {
		const userName = await this.findByCss(email)
		return this.sendKeys(userName, emailId)
	}

	async enterPassword() {
		const passWord = await this.findByCss(password)
		return this.sendKeys(passWord, passwordTxt)
	}

	async enterInvalidEmail() {
		const userName = await this.findByCss(email)
		return this.sendKeys(userName, invalidEmailId)
	}

	async enterInvalidPassword() {
		const passWord = await this.findByCss(password)
		return this.sendKeys(passWord, invalidPasswordTxt)
	}

	async clickSubmitButton() {
		const submitBtn = await this.findByCss(submitButton)
		return this.click(submitBtn)
	}

	async enterPin() {
		const pinNumber = await this.findByCss(pin)
		await this.sendKeys(pinNumber, pinTxt)
		return await this.pressEnter()
	}

	async errorAlert() {
		const errMessage = await this.findByCss(errorAlert)
		return this.elementIsVisible(errMessage)
	}

	async forgotPasswordLink() {
		const forgotPassword = await this.findByCss(forgotPasswordLink)
		return this.click(forgotPassword)
	}

	async forgotPasswordTitleVisible() {
		const title = await this.findByCss(forgotPasswordTitle)
		return this.elementIsVisible(title)
	}

	async requestNewPasswordVisible() {
		const label = await this.findByCss(requestNewPasswordTitle)
		return this.elementIsVisible(label)
	}

	async emailForForgotPassword() {
		const userName = await this.findByCss(email)
		return this.sendKeys(userName, secondEmailId)
	}

	async clickForgotPasswordSubmitButton() {
		const submitBtn = await this.findByCss(forgotPasswordSubmitButton)
		return this.click(submitBtn)
	}

	async successMessageVisible() {
		const successMessage = await this.findByCss(forgotPasswordSuccessMessage)
		return this.elementIsVisible(successMessage)
	}
}
