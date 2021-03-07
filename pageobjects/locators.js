module.exports = {
	waitforTimeout: 10000,
	baseUrl: 'https://www.opencart.com/',
	registrationUrl: 'https://www.opencart.com/index.php?route=account/register',
	loginUrl: 'https://www.opencart.com/index.php?route=account/login',
	title: 'OpenCart - Account Register',
	pageLogo: "img[title='OpenCart - Account Register']",
	pageLabel: "div[class='col-md-7'] h3",
	loginPageLogo: "img[title='OpenCart - Account Login']",
	loginPageLabel: "div[class='container'] h1",
	loginTitle: 'OpenCart - Account Login',
	username: '#input-username',
	firstname: '#input-firstname',
	lastname: '#input-lastname',
	email: '#input-email',
	country: '#input-country',
	password: '#input-password',
	submitButton: 'button.btn.btn-primary.btn-lg.hidden-xs',
	pin: '#input-pin',
	accontPageHeadingTitle: "div[class='container'] h1",
	accountPageHeader: "div[class='page-header'] p",
	accountPageUrl: 'https://www.opencart.com/index.php?route=account/account',
	accountPageTitle: 'OpenCart - Your Account',
	errorAlert: "div[class='alert alert-danger']",
	forgotPasswordLink: "a[class='btn-link']",
	forgotPasswordTitle: "div[class='container'] h1",
	requestNewPasswordTitle: "div[class='text-center'] h2",
	forgotPasswordSubmitButton: "button[type='submit']",
	forgotPasswordSuccessMessage: "div[class='alert alert-success']",
	editaccountDetailsLink: `"//*[@id="account-menu"]/div[1]/a[2]"`,
	editMyInfoTitle: "div[class='container'] h1",
	editAccountDetailsHeader: "div[class='page-header'] p",
	editAccountSubmitButton: "button[type='submit']",
	editAccountSuccessMessage: "div[class='alert alert-success']",
	marketPlaceTitle: 'OpenCart - Marketplace',
	marketPlaceUrl:
		'https://www.opencart.com/index.php?route=marketplace/extension',
	freeProduct:
		'div.container div.row div.col-sm-8.col-md-9 div.row:nth-child(3) div.col-md-4:nth-child(1) section:nth-child(1) div.extension-preview:nth-child(1) a:nth-child(1) > div.extension-description',
	productTitle: 'OpenCart - PayPal Commerce Platform Integration',
	productUrl: 'https://www.opencart.com/index.php?route=marketplace/extension/',
	productHeader: 'div.container:nth-child(2) > h3',
	downloadButton: 'a.btn.btn-success.btn-lg.btn-block',
	downloadUrl:
		'https://www.opencart.com/index.php?route=marketplace/download&member_token',
	downloadHeader: "h4[class='media-heading']",
	productDownloadButton: 'tbody tr:nth-child(1) td:nth-child(4) a:nth-child(1)',
	loginLink: "a[class='btn btn-link navbar-btn']",
	marketPlaceLink: 'ul.nav.navbar-nav:nth-child(1) > li:nth-child(3) > a',
	searchBox: "input[placeholder='Search for extensions and themes']",
	searchUrl:
		'https://www.opencart.com/index.php?route=marketplace/extension&filter_search=pay',
	searchTitle: "section[id='extension-search'] h4",
	searchRow:
		'div.container div.row div.col-sm-8.col-md-9 div:nth-child(2) > div.row:nth-child(3)',
	sortDropDown: '#input-sort',
	featureXpath: `"//*[@id="extension-list"]/div[2]/div[1]/section/div[3]/div/div[2]/div/span"`,
	sortFilterUrl:
		'https://www.opencart.com/index.php?route=marketplace/extension&',
}