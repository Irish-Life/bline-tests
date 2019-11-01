/// <reference types="Cypress" />

context('Approver', () => {
  beforeEach(() => {
    cy.login(Cypress.env('cyApproverUser'), Cypress.env('cyApproverPassword'));
  })

  it('Logs the user in', () => {
    cy.url().should('contain', "user/4");
  })

  it('Can access the administration pages', () => {
    cy.visit("admin");
    cy.get('.page-title').should("contain", "Administration");
  })

  it('Can access the content administration pages', () => {
    cy.visit("admin/content");
    cy.get('.page-title').should("contain", "Content");
    cy.screenshot();
  })

  it('Can access the moderated content view', () => {
    cy.visit("admin/content");
    cy.get('.page-title').should("contain", "Content");
    cy.visit("admin/content/moderated");
    cy.get('thead > tr > :nth-child(4)').should("contain", "Moderation state");
    cy.screenshot();
  })

  it('Cannot edit content', () => {
    cy.visit("admin/content");
    cy.get('.dropbutton-widget').should('be', 'empty');
    cy.screenshot();
  })

  it('Cannot approve draft content', () => {
    cy.visit("test-unpublished");
    cy.get('#entity-moderation-form').should('not.exist');
    cy.screenshot();
  })

  it('Can approve pending content', () => {
    cy.visit("test-unpublished");
    cy.get('#edit-new-state').select('Approved', { force: true });
    cy.get('#edit-revision-log').type('Approved', { force: true });
    cy.get('#edit-submit').click({ force: true });
    cy.screenshot();
  })




})
