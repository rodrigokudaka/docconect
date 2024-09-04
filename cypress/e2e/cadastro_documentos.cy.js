import {faker, fakerPT_BR} from '@faker-js/faker'
describe.only('template spec', () => {
 

  const user = (() => {
    const storedUser = localStorage.getItem('@user')
    
    const defaultUser = {
        name: fakerPT_BR.internet.userName(),
        email: fakerPT_BR.internet.email(),
    }
 
    const userStorage = storedUser ? JSON.parse(storedUser) : defaultUser
 
    return {
        name: userStorage.name,
        email: userStorage.email,
        rg: faker.string.numeric(9),
    }
})()
 

  it('cadastro_documentos', () => {
    //cy.viewport('iphone-x');
    //cy.viewport('samsung-s10');
    cy.visit('http://44.204.228.215:3008/')
    cy.get('.styles__SignIn-sc-bed02eff-6').click()
    cy.get('div').should('contains.text', 'Que bom ter você aqui!')
    //cy.get('.styles__Input-sc-bb473688-1').type('lurozra@ki.ve')
    cy.get('.styles__Input-sc-bb473688-1').type(user.email)
    cy.get('.styles__TextInput-sc-24036a13-2').type('123456')
    cy.get('.styles__BoxButton-sc-6a6790a0-0').click()
    cy.wait(4000)
    cy.get('div').should('contains.text', 'O que vamos fazer hoje')
    cy.get('.styles__BottomsWrapper-sc-2b9440d0-2 > :nth-child(1)').dblclick()
    cy.wait(2000)
    cy.get('div').should('contains.text', 'Documentos')
    cy.get(2000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(1)').dblclick()
    cy.wait(2000)
    cy.get('div').should('contains.text', 'Documentos Pessoais')
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(1)').click()
    cy.wait(2000)
    cy.get('div').should('contains.text', 'Títulos')
    cy.get('.styles__FormContainer-sc-9bdaeb50-0 > :nth-child(1) > .styles__Input-sc-eb9298aa-1').type(user.rg) 
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(1)').click()
    cy.wait(1000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.wait(2000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(2)').click()
    cy.wait(2000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.wait(2000)
    cy.get('div').should('contains.text', 'Anexo enviado com sucesso')
    cy.wait(3000)
    cy.visit('http://44.204.228.215:3008/documentPage?alert=info&observacao=null&formType=address&title=Comprovante+de+endereço&documento=anexoComprovanteEndereco')
    cy.wait(3000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(1)').click()
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.wait(3000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(2)').click()
    cy.wait(2000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.wait(2000)
    cy.get('div').should('contains.text', 'Anexo enviado com sucesso')
    cy.visit('http://44.204.228.215:3008/profissionais');
    cy.wait(1000)
    cy.get('div').should('contains.text', 'Documentos Profissionais')
    cy.wait(3000)
    cy.visit('http://44.204.228.215:3008/documentPage?alert=info&observacao=null&title=CRM&documento=anexoCrmDefinitivo')
    cy.get(':nth-child(1) > .style__Content-sc-906576d2-1 > .style__Title-sc-906576d2-2').dblclick()
    cy.wait(8000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })  
    cy.wait(5000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(2)').dblclick()
    cy.wait(2000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.get(2000)
    cy.get('div').should('contains.text', 'Anexo enviado com sucesso')
    cy.get(2000)
    cy.visit('http://44.204.228.215:3008/documentPage?alert=info&observacao=null&title=CRM+Secund%C3%A1rio&documento=anexoCrmAdicional')
    cy.get(1000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(1)').dblclick()
    cy.get(2000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.get(8000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(1)').dblclick()
    cy.get(2000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.get(8000)
    cy.get('div').should('contains.text', 'Anexo enviado com sucesso')
    cy.get(2000)
    cy.visit('http://44.204.228.215:3008/documentPage?alert=info&observacao=null&title=Diploma&documento=anexoDiplomaDeclaracao')
    cy.get(3000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(1)').dblclick()
    cy.get(2000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.get(50000)
    cy.get('.styles__Content-sc-8cd60b86-1 > :nth-child(2)').dblclick()
    cy.get(2000)
    cy.get('input[type="file"][accept="*/*"]').selectFile('Homelander - Icon.jpeg', { force: true })
    cy.get(1000)
    cy.get('div').should('contains.text', 'Anexo enviado com sucesso')
    //lurozra@ki.ve   
  })
})