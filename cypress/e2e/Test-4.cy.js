describe('Validação do menu Produtos e Soluções e descrição dos itens', () => {

  beforeEach(() => {
    cy.viewport(1280, 720)
});
  it('Validar item e descrição do produto Audaces360', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando aba Produtos e Soluções e selecionando o produto Audaces360
    cy.get('[class="dropdown-content"]')
    .find('a')
    .contains('Audaces360')
    .click({force: true})

    //Validando descrição do produto
    cy.contains('Solte sua imaginação e desenhe roupas incríveis no computador. No Audaces360, com a tecnologia 4.0, você realiza ideias minutos depois de imaginá-las diretamente sobre um manequim tridimensional.')
    .should('be.visible')
  })

  it('Validar item e descrição do produto Idea', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/') 

    //Acessando aba Produtos e Soluções e selecionando o produto Idea
    cy.get('[class="dropdown-content"]')
    .find('a')
    .contains('Idea')
    .click({force: true})

    //Validando descrição do produto
    cy.contains('Com o Audaces Idea, a ficha técnica e o pré-custo automáticos estão integrados, possibilitando a perfeita comunicação entre áreas e tornando o desenvolvimento e a produção corretos.')
    .should('be.visible')
  })

  it('Validar item e descrição do produto Fashion Studio', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando aba Produtos e Soluções e selecionando o produto Fashion Studio
    cy.get('[class="dropdown-content"]')
    .find('a')
    .contains('Fashion Studio')
    .click({force: true})

    //Validando descrição do produto
    cy.contains('Um software feito para você criar seus modelos em um manequim tridimensional com inúmeras ferramentas e possibilidades, tudo isso sem a necessidade de criar moldes de papel.')
    .should('be.visible')
  })

  it('Validar item e descrição do produto Digiflash', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando aba Produtos e Soluções e selecionando o produto Digiflash
    cy.get('[class="dropdown-content"]')
    .find('a')
    .contains('Digiflash')
    .click({force: true})

    //Validando descrição do produto
    cy.contains('Com o Audaces Digiflash, você digitaliza qualquer molde com precisão e rapidez, transformando-os em bases, podendo ser modificados a qualquer momento, sem perder o modelo inicial.')
    .should('be.visible')
  })

  it('Validar item e descrição do produto Moldes', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando aba Produtos e Soluções e selecionando o produto Moldes
    cy.get('[class="dropdown-content"]')
    .find('a')
    .contains('Moldes')
    .click({force: true})

    //Validando descrição do produto
    cy.contains('O Audaces Moldes oferece soluções que garantem uma execução impecável da sua coleção.')
    .should('be.visible')
  })

  it('Validar item e descrição do produto Encaixe', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando aba Produtos e Soluções e selecionando o produto Encaixe
    cy.get('[class="dropdown-content"]')
    .find('a')
    .contains('Encaixe')
    .click({force: true})

    //Validando descrição do produto
    cy.contains('A matéria-prima tem um papel fundamental no custo de uma peça. Otimizar esse recurso é muito importante para alcançar rentabilidade em grande escala – seja sua confecção pequena, média ou grande. ​')
    .should('be.visible')
  })

  it('Validar item e descrição do produto Supera Max', () => {
    //Acessando site da Audaces
    cy.visit('https://audaces.com/')

    //Acessando aba Produtos e Soluções e selecionando o produto Supera Max
    cy.get('[class="dropdown-content"]')
    .find('a')
    .contains('Supera Max')
    .click({force: true})

    //Validando descrição do produto
    cy.contains('O Audaces Supera é um servidor de encaixe com inteligência artificial que ajuda a reduzir os desperdícios e tempos.')
    .should('be.visible')
  })
})
