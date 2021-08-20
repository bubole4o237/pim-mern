const router = require('express').Router();

const itemController = require('./controllers/itemController');
const userController = require('./controllers/userController');


router.use('/item', itemController);
router.use('/user', userController);



module.exports = router;