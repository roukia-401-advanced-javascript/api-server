'use strict';

const category = require('../models/category/category-collection');

describe('category Model', () => {
  it('hello', () => {
    console.log('hiiiiii');
  });
   
  it('it can create()', () => {
    const categoryObj = { name: 'mobile phone', display_name: 'mobile phone', description: 'smart phone' };
    category.create(categoryObj).then(data => {
      console.log(data);
      Object.keys(categoryObj).forEach(key => {
        expect(data[key]).toEqual(categoryObj[key]);
      });

    });
  });

  it('it can get()', () => {
    const categoryObj = { name: 'mobile phone', display_name: 'mobile phone', description: 'smart phone' };
    category.create(categoryObj).then(result => {
      category.get(result._id).then(records => {
        Object.keys(categoryObj).forEach(key => {
          expect(records[0][key]).toEqual(categoryObj[key]);
        }); // []
      });
    });
  });

  it('it can update()', () => {
    const categoryObj = { name: 'mobile phone', display_name: 'mobile phone', description: 'smart phone' };
    const updatedObj = { name: 'phone', display_name: 'mobile phone', description: 'smart phone' };
    category.create(categoryObj).then(result => {
      category.update(result._id, updatedObj).then(data => {
        Object.keys(updatedObj).forEach(key => {
          expect(data[key]).toEqual(updatedObj[key]);
        });
      });
    });
  });


  it('it can delete()', () => {
    const categoryObj = { name: 'mobile phone', display_name: 'mobile phone', description: 'smart phone' };
    category.create(categoryObj).then(result => {
      category.delete(result._id).then(records => {
        category.get().then(data => {
          data.forEach(e => {
            expect(e._id).not.toEqual(result._id);
          });
        });
      });
    });
  });
}); 