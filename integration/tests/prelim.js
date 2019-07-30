/// <reference types="Cypress" />

context('Preliminary', () => {
  beforeEach(() => {

  })


  it('Loads the homepage', () => {
    cy.visit('/');
    cy.url().should('match', /pages.bline.ie/);
  })

  it('Checks a user can log in', () => {
    cy.login(Cypress.env('cyAdminUser'), Cypress.env('cyAdminPassword'))
    cy.url().should('contain', "user/6");

  })

  it('Logs the user out', () => {
    cy.login(Cypress.env('cyAdminUser'), Cypress.env('cyAdminPassword'));
    cy.reload();
    cy.logout();
    cy.reload();
    cy.get('.toolbar-icon-system-admin-content').should('be', false);
  })

})
