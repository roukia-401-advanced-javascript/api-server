"use strict";

const express = require('express');
const app = express();

// const logger = require('./logger.js');

// Global MiddleWare : app.use on the level of my application
app.use(express.json());
// app.use(logger);


// test route
// http://localhost:3000/test
// app.get('/test',(req,res)=>{
//     res.status(200).send("work");
// })

// route middleware
// we can add as many route middlewares as we want
let categories = [];

// post
app.post('/categories', (req, res) => {
  let category = req.body;
  category.id = String(categories.length + 1);
  categories.push(category);
  res.status(200).send(category);
});

// get all 
app.get('/categories', (req, res) => {
  let response = {
    count: categories.length,
    results: categories,
  };
  res.status(200).send(response);
});

//get
app.get('/categories/:id', (req, res) => {
  let id = req.params.id;
  let response = categories.find((e) => {
    return e.id === id;
  });
  res.status(200).json(response);
});

//update 
app.put('/categories/:id', (req, res) => {
  let id = req.params.id;
  let updateCategory = req.body;
  let index = categories.findIndex((e) => {
    return e.id === id;
  });
  categories[index] = updateCategory;
  res.status(200).json(categories[index]);
});

//delete 
app.delete('/categories/:id', (req, res) => {
  let id = req.params.id;
  let index = categories.findIndex((e) => {
    return e.id === id;
  });

// last route
// 500.js
app.get('/bad', (req, res)=> {
    throw new Error("500/Server Error");
});

// after all my routes
// 404 page not found
app.use('*', notFoundHandler);
app.use(errorHandler);


// functions

// GLobal Middleware on the level of my app
function notFoundHandler(req, res, next) {
    res.status(404).send('404 Not Found');
}

// we have to have 4 arguments for the error Handler
function errorHandler(req, req, res, next) {
    console.log("404 errpr")
    res.status(500);
    res.json({ error: err });
  }



module.exports = {
    server: app, 
    start: port => {
        let PORT = port || process.env.port || 3000;
        app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
    }
};