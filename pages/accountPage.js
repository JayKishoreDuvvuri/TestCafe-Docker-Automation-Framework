import BasePage from './basePage'
import {
	accontPageHeadingTitle,
	accountPageHeader,
	editaccountDetailsLink,
	editMyInfoTitle,
	editAccountDetailsHeader,
	username,
	editAccountSubmitButton,
	editAccountSuccessMessage,
} from '../pageobjects/locators'
import { t } from 'testcafe'
import { editAccountUserNameTxt } from '../pageobjects/data'
var timestamp = new Date().getTime()

export default class AccountPage extends BasePage {
	async accountPageHeadingTitle() {
		const title = await this.findByCss(accontPageHeadingTitle)
		return this.elementIsVisible(title)
	}

	async accountPageHeader() {
		const header = await this.findByCss(accountPageHeader)
		return this.elementIsVisible(header)
	}

	async clickEditAccountDetails() {
		const link = await this.xPathToCss(editaccountDetailsLink)
		return this.click(link)
	}

	async editMyInfoTitle() {
		const title = await this.findByCss(editMyInfoTitle)
		return this.elementIsVisible(title)
	}

	async editAccountDetailsHeader() {
		const header = await this.findByCss(editAccountDetailsHeader)
		return this.elementIsVisible(header)
	}

	async enterUserName() {
		const userName = await this.findByCss(username)
		await t.selectText(userName).pressKey('delete')
		return this.sendKeys(userName, editAccountUserNameTxt + timestamp)
	}

	async editAccountSubmitButton() {
		const submitBtn = await this.findByCss(editAccountSubmitButton)
		return this.click(submitBtn)
	}

	async editAccountSuccessMessage() {
		const successMessage = await this.findByCss(editAccountSuccessMessage)
		return this.elementIsVisible(successMessage)
	}
}
