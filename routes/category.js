'use strict';

// require express
const express = require('express');

// require categories collection 
const category = require('../models/category/category-collection');

// express Router
const router = express.Router();

//------------------------------------------------routes--------------------------------------

// post 
router.post('/categories', postCategory);

router.get('/categories', getCategory);

router.get('/categories/:id', getCategory);

router.put('/categories/:id', updateCategory);

router.patch('/categories/:id', updateCategory);

router.delete('/categories/:id',deleteCategory);

//--------------------------------------------functions-----------------------------------------------

// post function
function postCategory(req, res, next) {
  console.log('req.body >>> ', req.body);
  category.create(req.body).then(data => { // categroy.create >> got to file collection >> go to mongo-model do the method >> return to collection 
    res.status(201).json(data);
  }).catch(err => {
    // or do .catch(next) like the getFood function
    console.log(err);
    next(err);
  });
}

//get function 
function getCategory(req, res, next) {
  const id = req.params.id;
  category.get(id).then(data => {
    // console.log(data);
    // console.log(data.length);
    res.status(200).json({count:data.length, results: data});
  }).catch(next);
}

// update function 
function updateCategory(req, res, next) {
  const id = req.params.id;
  let obj = req.body;
  category.update(id, obj).then(data => {
    res.status(200).json(data);
  }).catch(next);
}

function deleteCategory(req,res,next){
  const id = req.params.id;
  category.delete(id).then(data => {
    res.status(200).json(data);
  }).catch(next);
}

module.exports = router;