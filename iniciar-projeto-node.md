## Inicializar projeto em Node
    - npm init
        - Ao executar o comando acima o node irá solicitar algumas informações sobre o projeto como: Nome do projeto, versão, autor... etc. Essas informações serão salvas em um aequivo chamado package.json

## Alterar o arquivo package.json gerado pelo npm init
    - "type":"module"
        - 


## Instalar dependencias de produção
    - npm install express --save
    - npm install cors --save

## Instalar dependencias de desenvolvimento
    - npm install nodemon --save-dev

## Criar um arquivo chamado index.js na raiz do projeto
    - import express from 'express'
    - import cors from 'cors'

## No mesmo arquivo nas linhas seguintes inicializa o express
    - const app = express()

## Configurar o node para receber dados do tipo JSON
    - app.use(express.json())

## Configurar o node para usar cors
    - app.use(cors())

## Criar primeira Rota
    - app.get('/', {request, response} => {
        response.json('Retorno dos dados')
    })

## Executar o servidor
    - app.listener(3000, () => {
        console.log('Servidor está rodando...')
    })

## Executar o node
    - node ./index.js

## Reload do automático do Node
    - Adicionar um script na chave de scripts do arquivo package.jsos, incluindo o NODEMON para fazer reload na aplicação sempre que houver uma alteração/salvar
    -  "scripts": {
        "test": .....,
        "dev": "nodemon ./index.js" //script a ser adicionado
    }

## Executar comando npm run dev
    - npm run => roda aplicação
    - dev => procura no scripts a chave dev e executa o valor que a chave está relacionada

# Project Node Endpoints

- /About
- /Skills
- /Resume
- /Projects