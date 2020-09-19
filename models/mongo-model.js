'use strict';

// i dont have to require a specific schema i will pass it inside the constructor 
class Model {
    
  constructor(schema) {
    this.schema = schema;
  }
  // crud operations
  create(record) {
    let newRecord = new this.schema(record);
    return newRecord.save();
  }
    
  get(_id) {
    let obj = _id ? { _id } : {};
    return this.schema.find(obj);
  }

  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record,{ new: true }); // new:true to return the updated record not the old one
  }

  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

// export the class
module.exports = Model;