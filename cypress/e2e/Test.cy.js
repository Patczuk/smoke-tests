/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Homepage, Sign in with Email, Room creation', function(){

it('Homepage', function(){
  cy.visit ('https://here.fm');
  cy.get('#mini-map').should('be.visible');
  cy.get('#zoom-in').should('be.visible');
  cy.get('#zoom-out').should('be.visible');
  cy.get('#reset-position-button').should('be.visible');
  cy.get('#sticky-signup-button').should('be.visible');
  cy.get('#get-started-button').should('be.visible');
}) 
  
it('Sign in with Email', function(){
  cy.visit ('https://here.fm');
  cy.get('#sticky-signup-button').click();
  cy.get('#sign-in-with-google-button').should('be.visible');
  cy.get('#sign-in-with-email-button').should('be.visible');
  cy.get('#sign-in-with-apple-button').should('be.visible');
  cy.get('#sign-in-with-email-button').click();
  cy.get('#try-sign-in-email-input').type('mm@mm.mm');
  cy.get('#try-email-sign-in-button').click();
  cy.get('#sign-in-password-input').type('mmmmmm');
  cy.get('#sign-in-email-button').click();
})

it('Room creation', function(){
  cy.get('.new-room-plus').click();
  cy.get(':nth-child(3) > .Item__Container-vv0ebj-0').click();
  cy.get('.RoomNaming__Input-n58v66-10').should('not.be.empty');
  cy.get('.RoomNaming__Button-n58v66-16').click();
  cy.get('#join-room-button', {timeout: 10000}).should('be.visible').click();
  cy.get('.presence-icon > .color-ring > .avatar > .image').click();
  cy.get('[style="margin-left: 5px;"]').click();
  cy.get('.ProfileSettings__LogoutButton-i7j48m-7').click();
  cy.get('.react-confirm-alert-button-group > :nth-child(1)').click();
  })
})
