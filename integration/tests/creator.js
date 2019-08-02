/// <reference types="Cypress" />

context('Creator', () => {
  beforeEach(() => {

  })

  it.only('Logs the user in', () => {
    cy.login(Cypress.env('cyCreatorUser'), Cypress.env('cyCreatorPassword'))
    cy.url().should('contain', "user/5");
  })

  it('Can access published content', () => {
    cy.visit(Cypress.env("cyTestArticleUrl"));
    cy.get('.h1 > span').should("contain", "Cypress");
  })

  it('Cannot access unpublished content', () => {

  cy.request({ method: 'GET', url: Cypress.env("cyTestArticle2Url"), failOnStatusCode: false })
    .then((response) => {
      expect(response.status).to.eq(403);
    })
  })

  it('Can access published paragraph content', () => {
    cy.visit('node/4');
    cy.get('.paragraph--masthead');
  })

  it('Cannot access unpublished paragraph content', () => {
    cy.request({ method: 'GET', url: 'node/14', failOnStatusCode: false })
    .then((response) => {
      expect(response.status).to.eq(403);
    })
  })

  it('Cannot access the admin area', () => {
    cy.request({ method: 'GET', url: 'admin', failOnStatusCode: false })
    .then((response) => {
      expect(response.status).to.eq(403);
      cy.screenshot();
    })
  })
})
