# api-server

## Author: Roukia Salahi

- [tests report](https://github.com/roukia-401-advanced-javascript/api-server/actions)


## installation 

- npm init -y
- npm install -g json-server
- npm install express
- npm install jest

  - `  "scripts": {
    "test": "jest --verbose --coverage"
  }`

- npm install supertest `to test server`

- npm install cors

- npm install mongoose

- npm install --save-dev @code-fellows/supergoose

## start server 

## lab-06 >> json server
- `json-server --watch ./data/db.json`

## lab-08 >> start using mongo DB

- `sudo service mongod start`


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

### lab-6

![UML](/assets/lab06-uml.JPG)

### lab-7

![UML](/assets/uml-lab7.JPG)

### lab-8

![UML](/assets/uml-lab8.JPG)


