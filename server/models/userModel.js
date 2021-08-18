const mongoose = require('mongoose');


const userScheme = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    },                     // Iavor
    items: [{
        type: mongoose.Types.ObjectId,
        ref: 'Item'
    }]
});

module.exports = mongoose.model('User', userScheme);
