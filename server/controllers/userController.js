const router = require('express').Router();
const userService = require('../services/userService');


router.post('/register', (req, res, next) => {
    const { username, password, repeatPassword } = req.body;
    
    if (password.toString() !== repeatPassword.toString()) {
        // return res.render('user/register', { error: { message: 'Password should match!' } });
        return next({ message: 'password mismatch', status: 400 });
    }
    // TO DO CHECK for repeat-password

    userService.register(username, password)
        .then(createdUser => {
            console.log(createdUser);
            // res.redirect('/auth/login'); // Here you can put a message object like second parameter
            res.status(201).json({ createdUser });
        })
        .catch(err => next(err))

});



router.post('/login', (req, res, next) => {
    const { username, password } = req.body;

    userService.login(username, password)
        .then((result) => {
            // res.cookie(COOKIE_NAME, result.token, { httpOnly: true });
            // res.redirect('/');
            // res.render('expenses/expenses');
            // res.render('home', {name: req.body.username});
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            // res.render('user/login');
            next(err);
        });
});



module.exports = router;
