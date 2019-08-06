/// <reference types="Cypress" />

context('Creator', () => {
  beforeEach(() => {
    cy.login(Cypress.env('cyCreatorUser'), Cypress.env('cyCreatorPassword'))
  })

  it('Logs the user in', () => {
    cy.url().should('contain', "user/5");
  })

  it('Can access the administration pages', () => {
    cy.visit("admin");
    cy.get('.page-title').should("contain", "Administration");
  })

  it('Can access the content administration pages', () => {
    cy.visit("admin/content");
    cy.get('.page-title').should("contain", "Content");
  })

  it('Can access the moderated content view', () => {
    cy.visit("admin/content");
    cy.get('.page-title').should("contain", "Content");
    cy.visit("admin/content/moderated");
    cy.get('thead > tr > :nth-child(4)').should("contain", "Moderation state");
  })

  it.only('Can create an article', () => {
    cy.visit("admin/content");
    cy.get('[data-drupal-link-system-path="node/add"]').click({ force: true });
    cy.get('.page-title').should('contain', 'Add content');
    cy.contains('Article').click();
    cy.get('.page-title').should('contain', 'Create Article');

    cy.get('[data-drupal-selector="edit-title-0-value"]').type('Article Title');
  })

  // it('Cannot access unpublished content', () => {

  // cy.request({ method: 'GET', url: Cypress.env("cyTestArticle2Url"), failOnStatusCode: false })
  //   .then((response) => {
  //     expect(response.status).to.eq(403);
  //   })
  // })

  // it('Can access published paragraph content', () => {
  //   cy.visit('node/4');
  //   cy.get('.paragraph--masthead');
  // })

  // it('Cannot access unpublished paragraph content', () => {
  //   cy.request({ method: 'GET', url: 'node/14', failOnStatusCode: false })
  //   .then((response) => {
  //     expect(response.status).to.eq(403);
  //   })
  // })

  // it('Cannot access the admin area', () => {
  //   cy.request({ method: 'GET', url: 'admin', failOnStatusCode: false })
  //   .then((response) => {
  //     expect(response.status).to.eq(403);
  //     cy.screenshot();
  //   })
  // })
})
