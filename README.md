# api-server

## installation 

- npm init -y
- npm install -g json-server
- npm install express
- npm install jest

  - `  "scripts": {
    "test": "jest --verbose --coverage"
  }`

- npm install supertest `to test server`

## start server 

- `json-server --watch ./data/db.json`

- node index.js

## ReST testing tool 

### swagger Inspector

[swagger Inspector](https://inspector.swagger.io/)

in ReST testing tool, you can UPDATE, DELETE, and GET records for both categories and products from your API using the routes 

`/categories GET, POST`

`/categories/:id/ PUT, DELETE`

`/products GET, POST`

`/products/:id/ PUT, DELETE`


### Swagger Hub
 [swagger hub](https://app.swaggerhub.com/apis/roukiaSalahi/api-server/0.1)
