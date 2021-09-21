## Cypress-EBAC
Projeto do workshop de testes automatizados de UI com [Cypress](https://www.cypress.io/) da EBAC, ministrado por Eshilane Cruz em julho/2021.

-----------------------------------------
### O que este script faz?
Este script efetua uma navegação e verificações bastante simples, acessando um domínio próprio de estudos da EBAC, que simula um [e-commerce](http://lojaebac.ebaconline.art.br/), acessa um item do catálogo, seleciona algumas opções e fecha uma compra.


-----------------------------------------
### Instalação e uso da arquitetura
- Instale as ferramentas:
  - [VSCode](https://code.visualstudio.com/ "VSCode")
  - [NodeJS](https://nodejs.org/en/download/ "NodeJS")
  - [NPM](https://www.npm.com/ "NPM")
  - [Cypress](https://www.npmjs.com/package/cypress/ "Cypress")
- Abra um terminal que aceite comandos git (exemplo: Powershell, git bash, cmder, etc.)
- Baixe este repositório ou faça um git clone (HTTPS/SSH)
- Abra o diretório do projeto via terminal e execute o comando abaixo para instalar as dependências:
```
npm install
```
- Para verificar se possui as versões instaladas, digite no terminal:
```
npm -v && node -v
```

- Para abrir o painel do Cypress e escolher quais testes deseja executar, digite no terminal:
```
npm run cypress:open
```

- Para executar todos os testes em modo headless, digite no terminal:
```
npx cypress run
```