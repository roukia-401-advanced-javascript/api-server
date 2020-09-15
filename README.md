# api-server

## Author: Roukia Salahi

- [tests report](...)


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

`http://localhost:3000/categories`

`/categories GET, POST`

`/categories/:id/ PUT, DELETE, Patch`

`/products GET, POST`

`/products/:id/ PUT, DELETE, Patch`


### Swagger Hub
 [swagger hub class-06](https://app.swaggerhub.com/apis/roukiaSalahi/api-server/0.1)
 [swagger hub class-07](https://app.swaggerhub.com/apis/roukiaSalahi/api-server-class7/0.1)

## UML

### lab-7

![UML](/assets/uml-lab7.jpg)
