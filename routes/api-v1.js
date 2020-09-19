'use strict';

// require express
const express = require('express');


// require categories collection 
const categories = require('../models/category/category-collection');
const products = require('../models/products/products-collection');



// express Router
const router = express.Router();

//------------------------------------------------routes--------------------------------------

// post 
router.post('/:model', postfun);

router.get('/:model', getfun);

router.get('/:model/:id', getfun);

router.put('/:model/:id', updatefun);

router.patch('/:model/:id', updatefun);

router.delete('/:model/:id',deletefun);

router.param('model', getModel);

//--------------------------------------------functions-----------------------------------------------


function getModel (req, res, next) {
  let model = req.params.model;
  switch(model) {
  case 'categories':
    req.model = categories; // req.model: category(required/collection file) //same as the model in the route 
    next();
    break;
  case 'products':
    req.model = products;
    next();
    break;
  default:
    next('Invalid Model!!! ');
    break;
  }
}

// post function
function postfun(req, res, next) {
  console.log('req.body >>> ', req.body);
  categories.create(req.body).then(data => { // categroy.create >> got to file collection >> go to mongo-model do the method >> return to collection 
    res.status(201).json(data);
  }).catch(err => {
    // or do .catch(next) like the getFood function
    console.log(err);
    next(err);
  });
}

//get function 
function getfun(req, res, next) {
  const id = req.params.id;
  categories.get(id).then(data => {
    // console.log(data);
    // console.log(data.length);
    res.status(200).json({count:data.length, results: data});
  }).catch(next);
}

// update function 
function updatefun(req, res, next) {
  const id = req.params.id;
  let obj = req.body;
  categories.update(id, obj).then(data => {
    res.status(200).json(data);
  }).catch(next);
}

//delete function
function deletefun(req,res,next){
  const id = req.params.id;
  categories.delete(id).then(data => {
    res.status(200).json(data);
  }).catch(next);
}

module.exports = router;

