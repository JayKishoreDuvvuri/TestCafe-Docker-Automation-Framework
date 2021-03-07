import { ClientFunction, Selector as $, t } from 'testcafe'
import xPathToCss from 'xpath-to-css'

export default class BasePage {
	async waitFor(milliseconds) {
		await t.wait(milliseconds)
	}

	async maximizeWindow() {
		return await t.maximizeWindow()
	}

	getPageUrl() {
		return ClientFunction(() => window.location.href)
	}

	getPageTitle() {
		return ClientFunction(() => document.title)
	}

	async findByCss(selector) {
		const element = await $(selector)
		return element
	}

	async selectorWithText(selector, text) {
		const element = $(selector).withText(text)
		return element
	}

	async elementIsVisible(selector) {
		const element = $(selector)
		return element.with({
			visibilityCheck: true,
		})
	}

	async elementIsPresent(selector) {
		const element = $(selector)
		return await element.exists
	}

	async getElementText(selector) {
		const element = $(selector)
		return await element.innerText
	}

	async sendKeys(selector, text) {
		const element = $(selector)
		await t.typeText(element, text, { paste: true })
	}

	async pressEnter() {
		return await t.pressKey('enter')
	}

	async click(selector) {
		const element = $(selector)
		return await t.click(element)
	}

	async xPathToCss(xPathSelector) {
		const xpath = xPathSelector
		const css = xPathToCss(xpath)
		return css
	}
}
