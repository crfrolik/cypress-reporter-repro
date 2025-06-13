/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo');
  })

  it('can take a screenshot', () => {
    cy.viewport(1000, 2000);
    // This *should* take a screenshot of the bottom 200 pixels of the page.
    // Instead, due to the bug, it captures a 1px tall screenshot.
    cy.screenshot('screenshot-example', {
      clip: {
        x: 0,
        y: 1800,
        width: 1000,
        height: 200
      }
    });
  });
})
