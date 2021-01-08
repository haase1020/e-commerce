/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it("should vitist website", () => {
    // https://on.cypress.io/type
    cy.get(".btn").click();
  });
});
