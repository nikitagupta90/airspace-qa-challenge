# airspace-qa-challenge

The team has build a new app login component. This automated regression test suite consist of the test cases to test the app login component. These test cases are automated using Cypress (cypress.io). 

Cypress is a next generation front end testing tool build to test the web pages.

## How to execute the Test Cases:

### Checkout the code.

```sh
git clone https://github.com/nikitagupta90/airspace-qa-challenge.git
```
### Change the directory.

```sh
cd airspace-qa-challenge
```

### Install dependencies
The automated test cases are intended to be executed using Cypress framework. 

```sh
npm install
```

### Run tests 
Using Terminal

```sh
npm run test -- -e PASSWORD = <>,URL= https://the-internet.herokuapp.com/login
## PASSWORD value can be found on the URL web page.
```
Using GUI
```sh
npm run test:gui -- -e PASSWORD = <>,URL= https://the-internet.herokuapp.com/login
## PASSWORD value can be found on the URL web page.
```
### Test Scenarios included
1. User login with correct Username & Password
2. User login with incorrect Username
3. User login with incorrect Password
4. User login with incorrect Username & Password
5. User login with blank Username
6. User login with blank Password
7. User login with blank Username & Password