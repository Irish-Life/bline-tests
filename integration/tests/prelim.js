/// <reference types="Cypress" />

context('Preliminary', () => {
  beforeEach(() => {

  })


  it('Loads the homepage', () => {
    cy.visit('http://pages.bline.ie');
    cy.url().should('match', /pages.bline.ie/);
  })

  it('Checks a user can log in', () => {
    cy.visit('http://pages.bline.ie/user/login');
    cy.get('#edit-name').type('bline_user');
    cy.get('#edit-pass').type('password');
    cy.get('#edit-submit').click();

    cy.url().should('match', /user\/1/);
  })

})
