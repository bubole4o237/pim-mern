const mongoose = require('mongoose');


const itemScheme = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    purchasedOn: {
        type: String
    },
    expireOn: {
        type: String
    },
    openedOn: {
        type: String
    },
    duration: {
        type: Number
    },
    type: {
        type: String
    },
    ownerId: {
        type: String
    }
});


module.exports = mongoose.model('Item', itemScheme);
