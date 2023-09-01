describe('Busca por imagem no Google', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
});
  it('Buscar por logo Audaces', () => {
    //Acessando site da Google
    cy.visit('https://google.com')

    //Pesquisando por "Audaces" no Google Imagens
    cy.contains('Imagens').click()
    cy.get('#APjFqb').type('Audaces{enter}')

    //Selecionando imagem da logo Audaces
    cy.get('#islrg div.islrc > div:nth-child(3) > a.wXeWr.islib.nfEiy > div.bRMDJf.islir > img')
      .click()  
  })
})