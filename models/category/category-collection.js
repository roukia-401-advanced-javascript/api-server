'use strict';

// require schema
const schema = require('./category-schema.js');

//require mongo model 
const Model = require('../mongo-model.js'); //path ?

// add a subclass for the categroy out of the general one in the mongo model file, use extends

class Category extends Model {
    
}

module.exports = new Category(schema); // pass schema to the constructor in the mongo model 


// or 
// class Category extends Model {
//     constructor() {
//         super(schema); // pass schema to the constructor in the mongo model 
//     }
   
// }
// // export the class
// module.exports = new Category();