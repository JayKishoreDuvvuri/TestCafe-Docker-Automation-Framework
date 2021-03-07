import BasePage from '../pages/basePage'
import LoginPage from '../pages/loginPage'
import MarketPlacePage from '../pages/marketPlacePage'
import {
	marketPlaceTitle,
	marketPlaceUrl,
	productTitle,
	productUrl,
	loginTitle,
	loginUrl,
	downloadUrl,
} from '../pageobjects/locators'

const basePage = new BasePage()
const marketPlacePage = new MarketPlacePage()
const loginPage = new LoginPage()

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

test('Enter User credentials to login then navigate to Market Place and download the free product', async t => {
	await marketPlacePage.clickLoginLink()
	await t.expect(actualTitle()).eql(loginTitle)
	await t.expect(actualURL()).contains(loginUrl)
	await loginPage.clickEmailField()
	await loginPage.enterEmail()
	await loginPage.enterPassword()
	await loginPage.clickSubmitButton()
	await loginPage.enterPin()
	await marketPlacePage.clickMarketPlaceLink()
	await marketPlacePage.clickFreeProduct()
	await marketPlacePage.clickDownloadButton()
	await t.expect(marketPlacePage.downloadHeaderVisible).ok()
	await t.expect(marketPlacePage.productDownloadButtonVisible).ok()
	await marketPlacePage.clickProductDownloadButton()
	await t.expect(actualURL()).contains(downloadUrl)
})
