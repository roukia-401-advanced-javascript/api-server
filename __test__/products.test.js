'use strict';

const products = require('../models/products/products-collection');


describe('products Model', () => {
    it('hello', () => {
        console.log('hiiiiii');
    })
   
    it('it can create()', () => {
        const productsObj = { category: "camera", name: "Nikon", display_name: "Nikon Z" ,description: "The Nikon Z 5 mirrorless camera is tough, light, easy to handle, and compatible with a wide array of full-frame lenses."};
        products.create(productsObj).then(data => {
            console.log(data);
            Object.keys(productsObj).forEach(key => {
                expect(data[key]).toEqual(productsObj[key]);
            }) 
        });
    });

    it('it can get()', () => {
        const productsObj = { category: "camera", name: "Nikon", display_name: "Nikon Z" ,description: "The Nikon Z 5 mirrorless camera is tough, light, easy to handle, and compatible with a wide array of full-frame lenses."};
        products.create(productsObj).then(result => {
            products.get(result._id).then(records => {
                Object.keys(productsObj).forEach(key => {
                    expect(records[0][key]).toEqual(productsObj[key]);
                }) // []
            })
        });
    });

    it('it can update()', () => {
        const productsObj = { category: "camera", name: "Nikon", display_name: "Nikon Z" ,description: "The Nikon Z 5 mirrorless camera is tough, light, easy to handle, and compatible with a wide array of full-frame lenses."};
        const updatedObj  = { category: "cam", name: "Nikon", display_name: "Nikon Z" ,description: "The Nikon Z 5 mirrorless camera is tough, light, easy to handle, and compatible with a wide array of full-frame lenses."};
        products.create(productsObj).then(result => {
            products.update(result._id, updatedObj).then(data => {
                Object.keys(updatedObj).forEach(key => {
                    expect(data[key]).toEqual(updatedObj[key]);
                })
            })
        });
    });


    it('it can delete()', () => {
        const productsObj = { category: "camera", name: "Nikon", display_name: "Nikon Z" ,description: "The Nikon Z 5 mirrorless camera is tough, light, easy to handle, and compatible with a wide array of full-frame lenses."};
        products.create(productsObj).then(result => {
            products.delete(result._id).then(records => {
                products.get().then(data => {
                    data.forEach(e => {
                        expect(e._id).not.toEqual(result._id)
                    })
                })
            })
        });
    });
}); 