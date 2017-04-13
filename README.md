# techpar-atividade-06

## Atividade 06

- o mesmo que a atividade 05, com algumas alterações
- o repositório deve se chamar **"techpar-atividade-06"**
  - o repositório não mais deve ser a raíz do projeto, mas conter dois projetos
    - separar o projeto em app-servico e app-cliente
    - **app-servico** deve conter a parte que envolve **express** e **knex**
      - o package.json original pode ser adaptado para rodar neste projeto
      - adicionar ao express suporte a CORS, ou seja, permitir acesso XHR oriundo de outro domínio
    - **app-cliente** deve conter toda a parte envolvendo **html** e **angular**
      - um **novo package.json** deve ser criado para o app-cliente. baixar o angular pelo npm desta vez
      - neste projeto, o **npm run dev** deve disparar o http-server
        - instalar o http-server como dependenciia de desenvolvimento como é o nodemon no outro projeto
- **prazo de 8h para entrega**
