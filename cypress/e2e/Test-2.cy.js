describe('Acessar site da Audaces pelo Google', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
});
  it('Pesquisar e acessar site da Audaces', () => {
    //Acessando site da Google
    cy.visit('https://google.com')

    //Pesquisando e acessando o site da Audaces
    cy.get('#APjFqb').type('Audaces{enter}')
    cy.contains('Início | Audaces - We are the Industry 4.0', {timeout: 5000}).click()

  })
})