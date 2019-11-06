/// <reference types="Cypress" />

context('Creator', () => {
  beforeEach(() => {
    cy.login(Cypress.env('cyCreatorUser'), Cypress.env('cyCreatorPassword'));
  })

  it('Logs the user in', () => {
    cy.url().should('contain', "user/5");
    cy.screenshot();
  })

  it('Can access the administration pages', () => {
    cy.visit("admin");
    cy.get('.page-title').should("contain", "Administration");
    cy.screenshot();
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

  it('Can create an article', () => {
    cy.visit("admin/content");
    cy.get('[data-drupal-link-system-path="node/add"]').click({ force: true });
    cy.get('.page-title').should('contain', 'Add content');
    cy.contains('Article').click();
    cy.get('.page-title').should('contain', 'Create Article');
    cy.get('[data-drupal-selector="edit-title-0-value"]').type('Article Title', { force: true });
    cy.get('[data-drupal-selector="edit-body-0-value"]').type('Article Body', { force: true });
    cy.get('#edit-submit').click();
    cy.get('.status--status').should('contain', 'Article Article Title has been created');
    cy.screenshot();
  })

  it('Can create a basic page', () => {
    cy.visit("admin/content");
    cy.get('[data-drupal-link-system-path="node/add"]').click({ force: true });
    cy.get('.page-title').should('contain', 'Add content');
    cy.contains('Basic page').click();
    cy.get('.page-title').should('contain', 'Create Basic page');
    cy.get('[data-drupal-selector="edit-title-0-value"]').type('Basic Page Title', { force: true });
    cy.get('[data-drupal-selector="edit-body-0-value"]').type('Basic Page Body', { force: true });
    cy.get('#edit-submit').click();
    cy.get('.status--status').should('contain', 'Basic page Basic Page Title has been created');
    cy.screenshot();
  })

  it('Can create a Landing Page', () => {
    cy.visit("admin/content");
    cy.get('[data-drupal-link-system-path="node/add"]').click({ force: true });
    cy.get('.page-title').should('contain', 'Add content');
    cy.contains('Landing Page').click();
    cy.get('.page-title').should('contain', 'Create Landing Page');
    cy.get('[data-drupal-selector="edit-title-0-value"]').type('Landing Page Title', { force: true });
    cy.get('[value="Add Masthead"]').click();
    cy.get('.paragraph-type-title').scrollIntoView();
    cy.get('label').contains('Masthead Heading').click({ force: true }).focused().type("Masthead Heading", { force: true });
    cy.get('label').contains('Masthead Sub Heading').click({ force: true }).focused().type("Masthead Sub Heading");
    cy.get('#edit-submit').click({force: true});
    cy.get('.paragraph--masthead__heading').should('contain', 'Masthead Heading');
    cy.screenshot();
  })


  it('Cannot publish content', () => {
    cy.visit("admin/content");
    cy.get('#edit-node-bulk-form-0').click({force: true});
    cy.get('#edit-action').select('Publish content');
    cy.get('#edit-submit--2').click({force: true});
    cy.get('.messages--error').should('contain', 'No access to execute');
    cy.get('.messages--error > div > :nth-child(2)').should('contain', 'Publish content');
    cy.screenshot();
  })

  it('Cannot delete an article', () => {
    cy.visit("admin/content");
    cy.get('[data-drupal-selector="edit-type"]').select('Article', { force: true });
    cy.get('#edit-submit-content').click({ force: true });
    cy.get('#edit-node-bulk-form-0').click({ force: true });
    cy.get('#edit-action').select('Delete content', { force: true });
    cy.get('#edit-submit--2').click({ force: true });
    cy.get('.messages--error > div > :nth-child(2)').should('contain', 'Delete content');
    cy.screenshot();
  })

  it('Cannot delete a Landing Page', () => {
    cy.visit("admin/content");
    cy.get('[data-drupal-selector="edit-type"]').select('Landing Page', { force: true });
    cy.get('#edit-submit-content').click({ force: true });
    cy.get('#edit-node-bulk-form-0').click({ force: true });
    cy.get('#edit-action').select('Delete content', { force: true });
    cy.get('#edit-submit--2').click({ force: true });
    cy.get('.messages--error > div > :nth-child(2)').should('contain', 'Delete content');
    cy.screenshot();
  })

  it('Cannot delete a Basic page', () => {
    cy.visit("admin/content");
    cy.get('[data-drupal-selector="edit-type"]').select('Basic page', { force: true });
    cy.get('#edit-submit-content').click({ force: true });
    cy.get('#edit-node-bulk-form-0').click({ force: true });
    cy.get('#edit-action').select('Delete content', { force: true });
    cy.get('#edit-submit--2').click({ force: true });
    cy.get('.messages--error > div > :nth-child(2)').should('contain', 'Delete content');
    cy.screenshot();
  })

})
