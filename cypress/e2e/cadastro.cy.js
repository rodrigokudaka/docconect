import Chance from 'chance'
const chance = new Chance();
describe('template spec', () => {
  beforeEach(() => {
    cy.intercept('GET', '**/notes').as('getNotes');
      
  });


  const user = {
    name: chance.name(),
    email: chance.email(),
    cpf: chance.cpf(),

  }

  it('cadastro', () => {
    cy.viewport('iphone-x');
    cy.viewport('samsung-s10');
    cy.visit('http://44.204.228.215:3008/')
    cy.get('[alt="docconect"]')
    cy.intercept('**/notes').as('getNotes')
    cy.get('div').should('contains.text', 'Que bom ter você aqui!')
    cy.get('.styles__BoxButton-sc-6a6790a0-0').click()
    cy.get(':nth-child(1) > .styles__Container-sc-bb473688-0 > .styles__Input-sc-bb473688-1').type(user.name)
    //cy.pause()
    cy.get(':nth-child(1) > :nth-child(4) > .styles__Input-sc-eb9298aa-1').type(user.cpf)
    cy.get(':nth-child(1) > :nth-child(5) > .styles__Input-sc-eb9298aa-1').type('09/03/1995')
    cy.get(':nth-child(2) > .styles__Container-sc-bb473688-0 > .styles__Input-sc-bb473688-1').type(user.email)
    cy.get(':nth-child(2) > .styles__Container-sc-eb9298aa-0 > .styles__Input-sc-eb9298aa-1').type('11960675900')
    cy.get(':nth-child(3) > .styles__Container-sc-bb473688-0 > .styles__Input-sc-bb473688-1').type('12345')
    cy.get('.styles__StyledSelect-sc-6b3245cf-1').select('Alagoas');
    cy.get('.css-1xc3v61-indicatorContainer').click();
    cy.contains('Cardiologia').click();
    cy.get(':nth-child(3) > .styles__Container-sc-eb9298aa-0 > .styles__Input-sc-eb9298aa-1').type('2020')
    cy.get(':nth-child(4) > .styles__Container-sc-eb9298aa-0 > .styles__Input-sc-eb9298aa-1').type('11025201')
    cy.get(':nth-child(5) > .styles__Input-sc-bb473688-1').type('20')
    cy.get(':nth-child(1) > .styles__BoxInput-sc-24036a13-1 > .styles__TextInput-sc-24036a13-2').type('123456')
    cy.get(':nth-child(2) > .styles__BoxInput-sc-24036a13-1 > .styles__TextInput-sc-24036a13-2').type('123456')
    cy.get('.styles__Box-sc-898a0271-16').check()
    cy.wait(2000)
    cy.get('.styles__BoxButton-sc-6a6790a0-0').click()
    cy.wait(2000)
    cy.get('.styles__SucessDescription-sc-caa5bbb4-5').contains('Agora você já pode acessar sua página exclusiva, seja bem vindo (a)!');
    
  })
})