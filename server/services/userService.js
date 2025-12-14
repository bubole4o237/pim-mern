const User = require('../models/userModel');


const register = (username, password) => {

    let user = new User({ username, password });

    console.log('REG ???');

    return user.save()
        .catch(err => {
            if (err.code === 11000) {
                // Duplicate key error (username already exists)
                throw { message: 'Username already exists', status: 409 };
            }
            if (err.name === 'ValidationError') {
                // Validation error
                const messages = Object.values(err.errors).map(e => e.message).join(', ');
                throw { message: messages, status: 400 };
            }
            // Re-throw other errors
            throw err;
        });
};


const login = async (username, password) => {
    
        let user = await User.findOne({ username });

        if (!user) throw { message: 'No such user', status: 404 };

        let areEqual = (password === user.password) ? true : false;

        if (!areEqual) throw { message: 'Invalid password', status: 404 };

        // let token = jwt.sign({ _id: user._id, username: user.username }, SECRET, {expiresIn: '2h'});

        console.log('Login SUCCESS');

    return ({
        _id: user._id,
        username: user.username
    });
}



module.exports = {
    register,
    login
}