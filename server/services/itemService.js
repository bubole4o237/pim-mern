const Item = require('../models/itemModel');

const create = (category, name, purchasedOn, expireOn, openedOn, duration, type) => {

    let item = new Item({ category, name, purchasedOn, expireOn, openedOn, duration, type });

    return item.save();
};



const getAll = (category) => {

    if (category) {
        return Item.find({ category });
    };
    
    return Item.find({});
}



const getOne = (itemId) => {
    console.log(itemId);
    return Item.find({_id: itemId}).exec();
}

module.exports = {
    create,
    getAll,
    getOne
}