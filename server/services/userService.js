const User = require('../models/userModel');


const register = (username, password) => {

    let user = new User({ username, password });

    console.log('REG ???');

    return user.save();
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