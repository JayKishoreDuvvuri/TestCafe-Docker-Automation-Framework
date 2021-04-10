import BasePage from '../pages/basePage'
import MarketPlacePage from '../pages/marketPlacePage'
import {
	marketPlaceTitle,
	marketPlaceUrl,
	productTitle,
	productUrl,
} from '../pageobjects/locators'

const basePage = new BasePage()
const marketPlacePage = new MarketPlacePage()

fixture`MarketPlace Test - Download Free Product`.page(marketPlaceUrl)

const actualURL = basePage.getPageUrl()
const actualTitle = basePage.getPageTitle()

test('Navigate to market place and Verify the title and page url', async t => {
	await marketPlacePage.maximizeWindow()
	await t.expect(actualTitle()).eql(marketPlaceTitle)
	await t.expect(actualURL()).contains(marketPlaceUrl)
})

test('Click on the market Place free product and click Download', async t => {
	await marketPlacePage.clickFreeProduct()
	await t.expect(actualTitle()).eql(productTitle)
	await t.expect(actualURL()).contains(productUrl)
	await marketPlacePage.productHeaderVisible()
	await t.expect(marketPlacePage.productHeaderVisible).ok()
	await marketPlacePage.clickDownloadButton()
})
