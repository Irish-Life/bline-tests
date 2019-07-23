# Bline V3 Tests

This repository contains automated tests to ensure a quality driven approach to the development of the new version of [Bline](https://www.bline.ie)

Our testing framework for UI / integration testing is [Cypress](https://docs.cypress.io/)

## Writing Tests
Tests are stored in the integration folder and are written using the mocha/chai framework syntax. The full api is detailed on the cypress docs site linked above.

## Running tests
To get up and running immediately on your local instance follow these steps:
1. Navigate to the root folder of your local drupal instance (not the webroot)
2. Run ```git clone https://github.com/Irish-Life/tests-bline.git``` to pull in the repo.
3. For ease of running tests, add npm scripts to package.json like so:

```
"scripts": {
  "cy:run": "cypress run",
  "cy:open": "cypress open",
  "cy:runrecord": "cypress run --record --key f7fa2a72-9467-48fb-8d06-86573a4f3f9d"
}
```
4. Create a ```screenshots``` folder and a ```videos``` folder in the cypress folder to capture your test outputs. These are gitignored to avoid uploading videos to git etc.
5. Run one of the commands specified above as per the cypress docs

That's basically it.
