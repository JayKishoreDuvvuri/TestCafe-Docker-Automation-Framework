import BasePage from './basePage'
import {
	freeProduct,
	productHeader,
	downloadButton,
	downloadHeader,
	productDownloadButton,
	loginLink,
	marketPlaceLink,
	searchBox,
	searchTitle,
	searchRow,
	sortDropDown,
} from '../pageobjects/locators'
import { searchValue, rating, price, itemName } from '../pageobjects/data'
import { t } from 'testcafe'

export default class MarketPlacePage extends BasePage {
	async clickFreeProduct() {
		const product = await this.findByCss(freeProduct)
		return this.click(product)
	}

	async productHeaderVisible() {
		const header = await this.findByCss(productHeader)
		return this.elementIsVisible(header)
	}

	async clickDownloadButton() {
		const downloadBtn = await this.findByCss(downloadButton)
		return this.click(downloadBtn)
	}

	async downloadHeaderVisible() {
		const downloadpageTitle = await this.findByCss(downloadHeader)
		return this.elementIsVisible(downloadpageTitle)
	}

	async clickProductDownloadButton() {
		const downloadBtn = await this.findByCss(productDownloadButton)
		return this.click(downloadBtn)
	}

	async productDownloadButtonVisible() {
		const downloadBtn = await this.findByCss(productDownloadButton)
		return this.elementIsVisible(downloadBtn).exists
	}

	async clickLoginLink() {
		const login = await this.findByCss(loginLink)
		return this.click(login)
	}

	async clickMarketPlaceLink() {
		const login = await this.findByCss(marketPlaceLink)
		return this.click(login)
	}

	async searchBoxVisible() {
		const box = await this.findByCss(searchBox)
		return this.elementIsVisible(box).exists
	}

	async enterValueInSearchBar() {
		const value = await this.findByCss(searchBox)
		await this.sendKeys(value, searchValue)
		return await this.pressEnter()
	}

	async searchTitleVisible() {
		const title = await this.findByCss(searchTitle)
		return this.elementIsVisible(downloadBtn).exists
	}

	async searchRowVisible() {
		const result = await this.findByCss(searchRow)
		return this.elementIsVisible(result).exists
	}

	async selectRating() {
		const selectRating = await this.findByCss(sortDropDown)
		const ratingOption = selectRating.find('option')
		return await t.click(sortDropDown).click(ratingOption.withText(rating))
	}

	async selectPrice() {
		const selectPrice = await this.findByCss(sortDropDown)
		const priceOption = selectPrice.find('option')
		return await t.click(sortDropDown).click(priceOption.withText(price))
	}

	async selectName() {
		const selectName = await this.findByCss(sortDropDown)
		const nameOption = selectName.find('option')
		return await t.click(sortDropDown).click(nameOption.withText(itemName))
	}

	async featureProductVisible() {
		const result = await this.xPathToCss(featureXpath)
		return this.elementIsVisible(result).exists
	}
}
