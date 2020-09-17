// require express and export the app, start function.
// require the routing files
// add all global middlewares for my app.
    // for example : require cors and use them here it's a global middle

"use strict";

const express = require('express');

// cors and morgan its a global middleware 3rd party
const cors = require('cors'); 
const morgan = require('morgan'); // dives info in the terminal when we run the app

/*for each of the middleware that i used it in seprate file not in the server here :
1. require the file of it 
2. app.use(rquiredFile)
note : 404 >> should be after all routes
       500 >> should be the last thing in the middle */

const timeStamp = require('../routes/timestamp.js');
const logger = require('../routes/logger.js');
const error404 = require('../routes/404.js');
const error500 = require('../routes/500.js');
const categoryRoutes = require('../routes/category.js');
const productsRoutes = require('../routes/products.js');

const app = express();

// Express built in middleware
app.use(express.json());

// 3rd party middlewares
app.use(cors());
app.use(morgan('dev'));

app.use(timeStamp);
app.use(logger);

app.use(categoryRoutes);
app.use(productsRoutes);

// -----------------------categories---------------------

// //global
// let allCategories = [];

// // post
// app.post('/categories', (req, res) => {
//   let record = {
//     name: req.body.name,
//     display_name: req.body.display_name,
//     description: req.body.description,
//   };
//   record.id = allCategories.length + 1;
//   allCategories.push(record);
//   res.status(200).json(record);
// });

// // get all
// app.get('/categories', (req, res) => {
//   res.status(200).json({ count: allCategories.length, results: allCategories });
// });

// // get byid
// app.get('/categories/:id', (req, res) => {
//   let Category = [];
//   allCategories.forEach(e => {
//     if (e.id == req.params.id) {
//       Category.push(e);
//     }
//   });
//   res.status(200).json(Category);
// });

// // put // update all obj
// app.put('/categories/:id', (req, res) => {
//   let updatedRecord = {};
//   allCategories.forEach((value, index) => {
//     if (value.id == req.params.id) {
//       updatedRecord = {
//         name: req.body.name,
//         display_name: req.body.display_name,
//         description: req.body.description,
//         id: req.params.id,
//       };
//       allCategories.splice(index, 1, updatedRecord);
//     }
//   });
//   res.status(200).json(updatedRecord);
// });

// //patch // update specific properties by id 
// app.patch('/categories/:id', (req, res) => {
//   let updatedRecord = {};
//   allCategories.forEach((value, index) => {
//     if (value.id == req.params.id) {
//       updatedRecord = {
//         name: req.body.name ? req.body.name : value.name,
//         display_name: req.body.display_name ? req.body.display_name : value.display_name,
//         description: req.body.description ? req.body.description : value.description,
//         id: req.params.id,
//       };
//       allCategories.splice(index, 1, updatedRecord);
//     };
//   });
//   res.status(200).json(updatedRecord);
// });

// // delete byid
// app.delete('/categories/:id', (req, res) => {
//   allCategories.forEach((value, index) => {
//     if (value.id == req.params.id) {
//       allCategories.splice(index, 1);
//     }
//   });
//   res.status(200).json(allCategories);
// });

// //------------------------products----------------------

// // global
// let allProducts = [];

// // post
// app.post('/products', (req, res) => {
//   let record = {
//     name: req.body.name,
//     display_name: req.body.display_name,
//     description: req.body.description,
//     category: req.body.category,
//   };
//   record.id = allProducts.length + 1;
//   allProducts.push(record);
//   res.status(200).json(record);
// });

// //get all
// app.get('/products', (req, res) => {
//   res.status(200).json({ count: allProducts.length, results: allProducts });
// });

// //get by id
// app.get('/products/:id', (req, res) => {
//   let product = [];
//   allProducts.forEach(e => {
//     if (e.id == req.params.id) {
//       product.push(e);
//     }
//   });
//   res.status(200).json(product);
// });

// //put byid //update the whole record
// app.put('/products/:id', (req, res) => {
//   let updatedRecord = {};
//   allProducts.forEach((value, index) => {
//     if (value.id == req.params.id) {
//       updatedRecord = {
//         name: req.body.name,
//         display_name: req.body.display_name,
//         description: req.body.description,
//         category: req.body.category,
//         id: req.params.id,
//       };
//       allProducts.splice(index, 1, updatedRecord);
//     }
//   });
//   res.status(200).json(updatedRecord);
// });

// //patch byid // update specifc properties
// app.patch('/products/:id', (req, res) => {
//   let updatedRecord = {};
//   allProducts.forEach((value, index) => {
//     if (value.id == req.params.id) {
//       updatedRecord = {
//         name: req.body.name ? req.body.name : value.name,
//         display_name: req.body.display_name ? req.body.display_name : value.display_name,
//         description: req.body.description ? req.body.description : value.description,
//         category: req.body.category ? req.body.category : value.category,
//         id: req.params.id,
//       };
//       allProducts.splice(index, 1, updatedRecord);
//     };
//   });
//   res.status(200).json(updatedRecord);
// });

// // delete byid
// app.delete('/products/:id', (req, res) => {
//   allProducts.forEach((value, index) => {
//     if (value.id == req.params.id) {
//       allProducts.splice(index, 1);
//     }
//   });
//   res.status(200).json(allProducts);
// });



app.get('/bad', (req, res)=> {
  throw new Error("bad Request .... ");
});  // iam throung an error so i can test if the error handler working well

// after all my routes
// 404 page not found
// * anything else other than my routes 
app.use('*', error404); // require the file first 

//error handler when there is an error by default it will go to the error handler the one with the 4 arguments 500
app.use(error500); // require the file first 


module.exports = {
  server: app, 
  start: port => {
      let PORT = port || process.env.port || 3000;
      app.listen(PORT, ()=> console.log(`Listening on port ${PORT}`))
  }
};