/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
describe('Homepage, Sign in, Sign up tests', function(){

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

/*
it('Login test', function() {
  cy.visit ('https://here.fm');
  cy.get('#sticky-signup-button').click();
  cy.get('#sign-in-with-email-button').click();
  cy.get('#try-sign-in-email-input').type('mm@mm.mm');
  cy.get('#try-email-sign-in-button').click();
  cy.get('#sign-in-password-input').type('mmmmmm');
  cy.get('#sign-in-email-button').click();
  cy.get(':nth-child(1) > .room').click();
  cy.get(':nth-child(1) > .Item__Container-vv0ebj-0 > .Item__ImageContainer-vv0ebj-1 > .Item__Icon-vv0ebj-2').click();
  cy.get('.RoomNaming__Button-n58v66-16').click();
  cy.get('#join-room-button', {timeout: 10000}).should('be.visible').click();
  cy.get('.presence-icon > .color-ring > .avatar > .image').click();
  cy.get('[style="margin-left: 5px;"]').click();
  cy.get('.ProfileSettings__LogoutButton-i7j48m-7').click();
  cy.get('.react-confirm-alert-button-group > :nth-child(1)').click();
  cy.get('#get-started-button').should('be.visible');
}) 

it('Creating a New User', function() {
  cy.visit ('https://here.fm');
  cy.get('#get-started-button').click();
  cy.get('.not-sure-button-wrapper > .button > .text').click();
  cy.get('#sign-in-with-email-button').click();
  cy.get('#try-sign-in-email-input').type('email_'+ Math.floor(Math.random()*1000)+'@mm.mm');//generate a random Email
  cy.get('#try-email-sign-in-button').click();
  cy.get('#create-account-name-input').type('Misha_test');
  cy.get('#create-account-password-input').type('mmmmmm');
  cy.get('#create-account-button').click();
  cy.get('.HereInput__Input-xsnqjj-4').should('be.visible').invoke('val').should('not.be.empty');  //validate that Username is not empty
  cy.get('#create-username-button').click();
  cy.get('#complete-profile-button').click();
  cy.get('.sc-gtssRu',{timeout: 10000}).should('be.visible');
  cy.get('.MessagesSidebar__MessagesButton-hv43hl-0').should('be.visible');
})*/
})
