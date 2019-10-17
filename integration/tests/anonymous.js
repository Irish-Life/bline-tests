/// <reference types="Cypress" />

context('Anonymous', () => {
  beforeEach(() => {

  })


  it('Loads the homepage', () => {
    cy.visit('/');
    cy.url().should('match', /pages.bline.ie/);
  })

  it('Loads the login page', () => {
    cy.visit('/user/login');
    cy.url().should('contain', "user/login");
  })

  it('Can access published content', () => {
    cy.visit(Cypress.env("cyTestArticleUrl"));
    cy.get('h1').should("contain", "Pellentesque");
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
