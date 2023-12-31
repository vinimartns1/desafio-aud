## **Pré-requisitos**
Antes de executar os testes, certifique-se de que você tenha as seguintes "dependências" instaladas em sua máquina:


- **[Node.js](https://nodejs.org/)** - Certifique-se de ter o Node.js instalado. É recomendável usar a versão LTS mais recente.
- **[Cypress](https://www.cypress.io)** - O Cypress é usado para rodar este projeto com uma interface.
- **[Git](https://git-scm.com/)** - O Git é usado para clonar este repositório.

Para executar os testes, siga os passos abaixo:

1. Abra uma janela do terminal e navegue até o diretório do projeto.
2. Execute o seguinte comando para iniciar o Cypress: **npx cypress open**
3. O Cypress Test Runner será aberto. Clique no arquivo de teste que você deseja executar (por exemplo, “Test-1.cy.js”). 
Isso abrirá uma nova janela do navegador com os testes sendo executados.

ou

Para rodar o projeto sem interface, basta rodar na raíz do projeto:
## **npx cypress run** ou **node e2etest.js** 
(Com estes comandos, os testes vão ser rodados em modo headless, sem abrir o navegador)

*Para rodar testes em navegadores diferentes, podemos alterar diretamente no Cypress Test Runner ou rodar um comando especifico para o navegador desejado, exemplos abaixo:*

*npx cypress run --browser chrome*
*npx cypress run --browser firefox*
*npx cypress run --browser edge*

Após isso, os testes serão executados e retornará os resultados.


**OBS: Projeto para um desafio técnico**
