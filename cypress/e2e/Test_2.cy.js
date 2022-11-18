/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Welcome modal, Sign up with Email', function(){

it('Welcome modal', function() {
  cy.visit ('https://here.fm');
  cy.get('#get-started-button').click();
  cy.get('.create').should('be.visible');
  cy.get('.listen').should('be.visible');
  cy.get('.play').should('be.visible');
  cy.get('.study').should('be.visible');
  cy.get('.watch').should('be.visible');
  cy.get('.chat').should('be.visible');
  cy.get('.not-sure-button-wrapper > .button > .text').should('be.visible');

})

it('Sign up with Email - Not sure option', function() {
  cy.get('.watch').click();
  cy.get('#sign-in-with-google-button').should('be.visible');
  cy.get('#sign-in-with-apple-button').should('be.visible');
  cy.get('#sign-in-with-email-button').click();
  cy.get('#try-sign-in-email-input').type('email_'+ Math.floor(Math.random()*1000)+'@mm.mm');//generates a random Email
  cy.get('#try-email-sign-in-button').click();
  cy.get('#create-account-name-input').type('Misha_smoke_test');
  cy.get('#create-account-password-input').type('mmmmmm');
  cy.get('#create-account-button').click();
  cy.get('.HereInput__Input-xsnqjj-4').should('not.be.empty');  //validates that Username is not empty
  cy.get('#create-username-button').click();
  cy.get('#complete-profile-button').click();
  cy.get('.presence-icon > .color-ring > .avatar').should('be.visible');
  })
})
