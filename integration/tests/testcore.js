/// <reference types="Cypress" />

context('Testcore', () => {
  beforeEach(() => {
    cy.login(Cypress.env('cyCoreUser'), Cypress.env('cyCorePassword'))
    cy.url().should('contain', "user/19");
    cy.screenshot();
  })


  it('Loads the homepage', () => {
    cy.visit('/');
    cy.url().should('match', Cypress.env(/pages.bline.ie/));
  })

  it('Can view documents list on the homepage', () => {
    cy.visit('/');
    cy.get('#block-views-block-broker-segment-block-test');
  })

  it('Can access core specific document listings', () => {
    cy.visit('/taxonomy/term/2');
    cy.url().should('match', Cypress.env(/taxonomy.term.2/));
  })

  it('Cannot access brokersource specific document listings', () => {
    cy.visit('/taxonomy/term/1');
    cy.url().should('match', Cypress.env(/system.403/));
  })

  it('Cannot access onesource specific document listings', () => {
    cy.visit('/taxonomy/term/3');
    cy.url().should('match', Cypress.env(/system.403/));
  })



})
