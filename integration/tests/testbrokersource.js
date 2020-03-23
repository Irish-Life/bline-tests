/// <reference types="Cypress" />

context('Testbrokersource', () => {
  beforeEach(() => {
    cy.login(Cypress.env('cyBrokersourceUser'), Cypress.env('cyBrokersourcePassword'))
    cy.url().should('contain', "user/20");
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

  it('Can access brokersource specific document listings', () => {
    cy.visit('/taxonomy/term/1');
    cy.url().should('match', Cypress.env(/taxonomy.term.1/));
  })

  it('Cannot access core specific document listings', () => {
    cy.visit('/taxonomy/term/2');
    cy.url().should('match', Cypress.env(/system.403/));
  })

  it('Cannot access onesource specific document listings', () => {
    cy.visit('/taxonomy/term/3');
    cy.url().should('match', Cypress.env(/system.403/));
  })



})
