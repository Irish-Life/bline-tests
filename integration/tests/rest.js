/// <reference types="Cypress" />

context('Network Requests', () => {
  beforeEach(() => {
    cy.visit('http://pages.bline.ie')
  })

  // Manage AJAX / XHR requests in your app

  it('GETs an article', () => {
    // https://on.cypress.io/server
    cy.server()           // enable response stubbing

    cy.request('node/1?_format=json').as("testGET")

    cy.get('@testGET').should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('POSTs a new article', () => {
    cy.server()
    cy.request({
      url: 'node?_format=json',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'X-CSRF-Token': 'JzzwtYXCaV-3O2_Z6ZLp2sc_YfkVQcL-7WtXLRv9zFY',
        'Content-type': 'application/json'
      },
      body: {
        "title": [
          {
            "value": "Test The POST method"
          }
        ],

        "type": [
          {
            "target_id": "article"
          }
        ],


        "body": [
          {
            "value": "blammoooo"
          }
        ]
      },
      'auth': {
        'user': 'testuser',
        'pass': 'test'
      }
    }).as('testPOST')

    cy.get('@testPOST').should((response) => {
      expect(response.status).to.eq(201)
    })
  })
  it('PATCHes an article', () => {
    // https://on.cypress.io/server
    cy.server()           // enable response stubbing

    cy.request({
      url: 'node/1?_format=json',
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'X-CSRF-Token': 'JzzwtYXCaV-3O2_Z6ZLp2sc_YfkVQcL-7WtXLRv9zFY',
        'Content-type': 'application/json'
      },
      body: {

        "body":[
          {
            "value":"PATCHed article"

          }
        ],
        "type":[
          {
            "target_id":"article"

          }
        ]

    },
      'auth': {
        'user': 'testuser',
        'pass': 'test'
      }
    }).as('testPATCH')

    cy.get('@testPATCH').should((response) => {
      expect(response.status).to.eq(200)
    })
  })
  it('DELETEs an article', () => {
    // https://on.cypress.io/server
    cy.server()           // enable response stubbing

    cy.request({
      url: 'node/1?_format=json',
      method: "DELETE",
      headers: {
        'X-CSRF-Token': 'JzzwtYXCaV-3O2_Z6ZLp2sc_YfkVQcL-7WtXLRv9zFY'
      },
      'auth': {
        'user': 'testuser',
        'pass': 'test'
      }
    }).as("testDELETE")

    cy.get('@testDELETE').should((response) => {
      expect(response.status).to.eq(204)
    })
  })
})
