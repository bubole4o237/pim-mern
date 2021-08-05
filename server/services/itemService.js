const Item = require('../models/itemModel');

const create = (category, name, purchasedOn, expireOn, openedOn, duration, type) => {

    let item = new Item({ category, name, purchasedOn, expireOn, openedOn, duration, type });

    return item.save();
};



const update = (id, category, name, purchasedOn, expireOn, openedOn, duration, type) => {

    // let item = new Item({ category, name, purchasedOn, expireOn, openedOn, duration, type });

    return Item.updateOne({_id: id}, {category, name, purchasedOn, expireOn, openedOn, duration, type});
};



const getAll = (category) => {

    if (category) {
        return Item.find({ category });
    };
    
    return Item.find({});
}



const getOne = (itemId) => {
    console.log("ITEM ID is: " + itemId);
    return Item.find({_id: itemId}).exec();
}

module.exports = {
    create,
    update,
    getAll,
    getOne
}