# TestCafe: Test Automation Framework

An example project demonstrating automated UI tests with Node.js and JavaScript using TestCafe with Page Object Design Framework.

## Application Under Test

We are using https://www.opencart.com/ as the Application Under Test.

* URL : https://www.opencart.com/
* OS  : macOS
* IDE : Visual Studio Code

### Installation

Install the dependencies and devDependencies to run the test.
- Clone or Download this repo on your local machine
- Navigate to project's directory on terminal and run the following commands:

```sh
npm install
```

### Clean Allure Report

Run on Terminal 
```sh
 npm run clean
```

### Execute Tests

Run the following command on Terminal to execute tests in Chrome Headless mode

```sh
npm run test:chrome:headless
```

Run the following command on Terminal to execute tests on Chrome, Firefox and Safari

```sh
npm run test:chrome
npm run test:firefox
npm run test:safari
```

Run the following command on Terminal to execute tests in parallel with Chrome and Firefox

```sh
npm run test:parallel
```

### Folder Structure
Top - Level Directory Layout

```sh
├── pageobjects                        # Selectors CSS identifier for elements to test
│       ├── data .js                   # Test Data
│       ├── locators .js               # Selectors          
│
│
├── pages                               # Generic functionality for tests
│   |
│   ├── basePage.js                     # Base page testing functionality
│   ├── registrationPage.js             # Registration page testing functionality
│   ├── loginPage.js                    # login page testing functionality
│   ├── accountPage.js                  # Account details page testing functionality
│   ├── marketPlacePage.js              # Market Place page testing functionality
│
│
├── test                                # Test suite
│    ├── registration.test.js           # Automated Test Script
│    ├── login.testjs                   # Automated Test Script
│    ├── editAccountDetails.test.js     # Automated Test Script
│    ├── downloadFreeProduct.test.js    # Automated Test Script
│    ├── searchBox.test.js              # Automated Test Script
│    ├── sortByFeature.test.js          # Automated Test Script
│
├── prettierrc                          # Code Formatting              
│
├── testcaferc                          # TestCafe config file for screenshots on failed tests           
│
├── allure-report                       # Allure Test Report    
│
└─── screenshots                        # Screenshots captured for failed tests
```

### Generate Test Report

Run the following command on Terminal

```sh
npm run clean
npm run test:chrome
npm run allure-report
```