'use strict';

// I will require the server file and start the server here and connect to mongoDB

// require DB mongoose package
const mongoose = require('mongoose');
// require server.js
const serverModule = require('./lib/server.js');
// connect to DB // should be in .env file
const MONGOOSE_URL = 'mongodb://localhost:27017/categories-products'; // name of DB:categories-products

const mongooseOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}
mongoose.connect(MONGOOSE_URL, mongooseOptions);

// run my application
serverModule.start();

//node index.js
//>>start using mongo DB
//sudo service mongod start

