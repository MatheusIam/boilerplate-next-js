# Boilerplate Next.js

Este boilerplate Next.js fornece uma configuração inicial para desenvolver aplicativos Next.js com TypeScript, React, styled-components e Storybook.

## Instalação

Para instalar o boilerplate, clone o repositório GitHub para o seu computador local e execute os seguintes comandos:

npm install
npm run dev

Isso iniciará o servidor de desenvolvimento Next.js na porta 3000. Você pode acessar o aplicativo em execução em [http://localhost:3000](http://localhost:3000).

## Comandos

O boilerplate inclui os seguintes comandos:

- `dev`: Inicia o servidor de desenvolvimento Next.js.
- `build`: Compila o aplicativo Next.js para produção.
- `test`: Executa os testes de unidade do Jest.
- `test:watch`: Executa os testes de unidade do Jest em modo de observação.
- `test:ci`: Executa os testes de unidade do Jest em modo de CI.
- `start`: Inicia o aplicativo Next.js compilado em produção.
- `lint`: Linta o código do aplicativo com ESLint.
- `prepare`: Instala os hooks do Husky.
- `storybook`: Inicia o Storybook.
- `build-storybook`: Compila o Storybook.

## Dependências

O boilerplate depende dos seguintes pacotes:

- @storybook/nextjs
- next
- react
- react-dom
- styled-components

## DevDependencies

O boilerplate também depende dos seguintes pacotes de desenvolvimento:

- @storybook/addon-essentials
- @storybook/addon-interactions
- @storybook/addon-links
- @storybook/addon-onboarding
- @storybook/blocks
- @storybook/react
- @storybook/react-webpack5
- @storybook/testing-library
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/user-event
- @types/jest
- @types/node
- @types/react
- @types/react-dom
- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-next
- eslint-config-prettier
- eslint-plugin-react
- eslint-plugin-storybook
- husky
- jest
- jest-environment-jsdom
- jest-styled-components
- lint-staged
- prettier
- storybook
- typescript

## Exemplo de uso

Isso iniciará o servidor de desenvolvimento Next.js na porta 3000. Você pode acessar o aplicativo em execução em [http://localhost:3000](http://localhost:3000).

Para criar uma nova história do Storybook, execute o seguinte comando:

npx storybook init

Isso criará uma nova história no arquivo `src/stories/index.stories.js`.

Para executar o Storybook, execute o seguinte comando:

npm run storybook

Isso iniciará o Storybook na porta 6006. Você pode acessar o Storybook em execução em [http://localhost:6006](http://localhost:6006).
