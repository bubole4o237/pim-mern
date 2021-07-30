const router = require('express').Router();

const itemController = require('./controllers/itemController');


// router.use('/', homeController);
router.use('/item', itemController);



module.exports = router;