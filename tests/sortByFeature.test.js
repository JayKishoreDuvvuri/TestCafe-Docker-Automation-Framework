import BasePage from '../pages/basePage'
import MarketPlacePage from '../pages/marketPlacePage'
import {
	marketPlaceUrl,
	sortFilterUrl,
	marketPlaceTitle,
} from '../pageobjects/locators'

const basePage = new BasePage()
const marketPlacePage = new MarketPlacePage()

fixture`MarketPlace Test - Search Box Returns Relevant Results`
	.page(marketPlaceUrl)
	.beforeEach(async t => {
		await marketPlacePage.maximizeWindow()
		await marketPlacePage.clickFreeProduct()
		await marketPlacePage.productHeaderVisible()
		await marketPlacePage.enterValueInSearchBar()
	})

const actualURL = basePage.getPageUrl()
const actualTitle = basePage.getPageTitle()

test('Sort by Rating', async t => {
	await marketPlacePage.selectRating()
	await t.expect(marketPlacePage.searchTitleVisible).ok()
	await t.expect(actualURL()).contains(sortFilterUrl)
	await t.expect(actualTitle()).eql(marketPlaceTitle)
	await t.expect(marketPlacePage.featureProductVisible).ok()
})

test('Sort by Price', async t => {
	await marketPlacePage.selectPrice()
	await t.expect(marketPlacePage.searchTitleVisible).ok()
	await t.expect(actualURL()).contains(sortFilterUrl)
	await t.expect(actualTitle()).eql(marketPlaceTitle)
	await t.expect(marketPlacePage.featureProductVisible).ok()
})

test('Sort by Name', async t => {
	await marketPlacePage.selectName()
	await t.expect(marketPlacePage.searchTitleVisible).ok()
	await t.expect(actualURL()).contains(sortFilterUrl)
	await t.expect(actualTitle()).eql(marketPlaceTitle)
	await t.expect(marketPlacePage.featureProductVisible).ok()
})
