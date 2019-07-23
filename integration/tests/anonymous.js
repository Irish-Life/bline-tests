/// <reference types="Cypress" />

context('Preliminary', () => {
  beforeEach(() => {

  })


  it('Loads the homepage', () => {
    cy.visit('http://pages.bline.ie');
    cy.url().should('match', /pages.bline.ie/);
  })



})
