# Rotulador Backend

Este projeto foi gerado em **[NodeJs](https://nodejs.org/)** versão 14.15.1 e npm versão 6.14.8

## Instalação e inicialização do Projeto
- Instalar os binários necessários para execução do ambiente node: **[Intruções de instalação](https://github.com/nodejs/help/wiki/Installation)**
- Para instalar os pacotes do projeto, é necessário entrar na pasta raiz da aplicação e executar o comando `npm install`, o qual irá instalar todas as depedências necessárias para execução da aplicação.
- Para iniciar o projeto executar: "`node .`" ou "`npm run start`"

## Modo de Desenvolvimento

Execute `npm run start:dev` para o servidor de desenvolvimento. A aplicação irá salvar automaticamente suas alterações e atualizar o servidor.

> **Obs:** Por padrão o servidor de desenvolvimento e de produção estão configurados na porta 3000.

</br>

# Estrutura da aplicação

```
lend_backend
   ├── package.json
   ├── package-lock.json
   ├── README.md
   └── src
       ├── controllers
       │    * Controladores
       |
       ├── models
       │    * Modelos de classes
       │  
       ├── routes
       │    * Rotas da aplicação
       │  
       ├── sample
       │   └── dataStructure.js * Arquivo que contem a estrutura de dados estatica da aplicação
       |
       └── server.js
            * Servidor de aplicação
```
