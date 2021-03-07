import BasePage from '../pages/basePage'
import MarketPlacePage from '../pages/marketPlacePage'
import {
	marketPlaceTitle,
	marketPlaceUrl,
	productTitle,
	productUrl,
	searchUrl,
} from '../pageobjects/locators'

const basePage = new BasePage()
const marketPlacePage = new MarketPlacePage()

fixture`MarketPlace Test - Search Box Returns Relevant Results`.page(marketPlaceUrl)

const actualURL = basePage.getPageUrl()
const actualTitle = basePage.getPageTitle()

test('Navigate to market place and Verify the title and page url', async t => {
	await marketPlacePage.maximizeWindow()
	await t.expect(actualTitle()).eql(marketPlaceTitle)
	await t.expect(actualURL()).contains(marketPlaceUrl)
})

test('Enter Value in search bar and verify the search result', async t => {
	await marketPlacePage.clickFreeProduct()
	await t.expect(actualTitle()).eql(productTitle)
	await t.expect(actualURL()).contains(productUrl)
	await marketPlacePage.productHeaderVisible()
	await t.expect(marketPlacePage.productHeaderVisible).ok()
	await t.expect(marketPlacePage.searchBoxVisible).ok()
	await marketPlacePage.enterValueInSearchBar()
	await t.expect(marketPlacePage.searchBoxVisible).ok()
	await t.expect(actualURL()).contains(searchUrl)
	await t.expect(marketPlacePage.searchTitleVisible).ok()
	await t.expect(marketPlacePage.searchRowVisible).ok()
})
