// "use strict";

// // require express
// const express = require('express');

// // require products collection 
// const products = require('../models/products/products-collection');

// // express Router
// const router = express.Router();

// //------------------------------------------------routes--------------------------------------

// // post 
// router.post('/products', postproducts);

// router.get('/products', getproducts);

// router.get('/products/:id', getproducts);

// router.put('/products/:id', updateproducts);

// router.patch('/products/:id', updateproducts);

// router.delete('/products/:id',deleteproducts);

// //--------------------------------------------functions-----------------------------------------------

// // post function
// function postproducts(req, res, next) {
//     console.log("req.body >>> ", req.body)
//     products.create(req.body).then(data => { // categroy.create >> got to file collection >> go to mongo-model do the method >> return to collection 
//         res.status(201).json(data);
//     }).catch(err => {
//         // or do .catch(next) like the getFood function
//         console.log(err);
//         next(err);
//     });
// }

// //get function 
// function getproducts(req, res, next) {
//     const id = req.params.id;
//     products.get(id).then(data => {
//         // console.log(data);
//         // console.log(data.length);
//         res.status(200).json({count:data.length, results: data});
//     }).catch(next);
// }

// // update function 
// function updateproducts(req, res, next) {
//     const id = req.params.id;
//     let obj = req.body;
//     products.update(id, obj).then(data => {
//         res.status(200).json(data);
//     }).catch(next);
// }

// function deleteproducts(req,res,next){
//     const id = req.params.id;
//     products.delete(id).then(data => {
//         res.status(200).json(data);
//     }).catch(next);
// }

// module.exports = router;