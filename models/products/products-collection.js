'use strict';

// require schema
const schema = require('./products-schema.js');

//require mongo model 
const Model = require('../mongo-model.js'); //path ?

// add a subclass for the products out of the general one in the mongo model file, use extends

class Products extends Model {
    
}

module.exports = new Products(schema); // pass schema to the constructor in the mongo model 

//  // or 
// class Products extends Model {
//     constructor() {
//         super(schema); // pass schema to the constructor in the mongo model
//     }
   
// }

// // export the class
// module.exports = new Products();


