const router = require('express').Router();
const itemService = require('../services/itemService');


router.post('/create/item', (req, res, next) => {
    const { category, name, purchasedOn, expireOn, openedOn, duration, type } = req.body;
    
    console.log('THE CATEGORY IS: ' + category);
    
    itemService.create(category, name, purchasedOn, expireOn, openedOn, duration, type)
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
});

router.get('/get/items', (req, res, next) => {
    console.log(req.query);
    const { category } = req.query;
    console.log(category);
    itemService.getAll(category)
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
});


router.get('/items/:id', (req, res, next) => {

    itemService.getOne(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
});



module.exports = router;