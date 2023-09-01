describe('Autenticação de Usuário', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
});
  it('Nome de usuário ou senha inválidos', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando tela login
    cy.contains('Área do Cliente').click()

    //Realizando login invalido
    cy.get('#username').type('Teste3')
    cy.get('#password').type('Teste123{enter}') 

    //Validando mensagem de usuario ou senha invalida
    cy.contains('Nome de usuário ou senha inválido').should('be.visible')
  })

  it('Nome de usuário em branco', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando tela login
    cy.contains('Área do Cliente').click()

    //Realizando login com o nome de usuário em branco
    cy.get('#password').type('Teste123{enter}') 

    //Validando mensagem de usuario em branco   
    cy.contains('Nome de usuário é necessária').should('be.visible')
  })

  it('Senha em branco', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando tela login
    cy.contains('Área do Cliente').click()

    //Realizando login com a senha em branco
    cy.get('#username').type('Teste3{enter}')

    //Validando mensagem de senha em branco  
    cy.contains('Senha é necessária').should('be.visible')
  })

  it('Recuperação de senha', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando tela login
    cy.contains('Área do Cliente').click()
    cy.contains('Faça seu login', {timeout: 5000}).should('be.visible')

    //Realizando a recuperação de senha
    cy.contains('Clique aqui').click()
    cy.get('#email').type('teste@teste.com.br')
    cy.contains('Recuperar minha senha').click()

    //Validando mensagem de e-mail de recuperação enviado
    cy.contains('Um código de recuperação de senha foi enviado para seu e-mail.').should('be.visible')
  })
})