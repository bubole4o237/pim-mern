const router = require('express').Router();
const itemService = require('../services/itemService');


router.post('/create/item', (req, res, next) => {
    const { category, name, purchasedOn, expireOn, openedOn, duration, type, ownerId } = req.body;

    console.log('THE CATEGORY IS: ' + category);

    itemService.create(category, name, purchasedOn, expireOn, openedOn, duration, type, ownerId)
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        });
});


router.put('/update/items/:id', (req, res, next) => {
    console.log('This is req.body: --- ' + req.body.name);
    console.log(req.params);
    const { id, category, name, purchasedOn, expireOn, openedOn, duration, type } = req.body;

    itemService.update(id, category, name, purchasedOn, expireOn, openedOn, duration, type)
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        })

});


router.get('/get/items', (req, res, next) => {
    console.log(req.query);
    const queries = req.query.ownerId.split('?category=');
    const [ownerId, category] = queries;

    itemService.getAll(ownerId, category)  //////////////
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
});


router.get('/get/items/:id', (req, res, next) => {

    itemService.getOne(req.params.id)
        .then((result) => {
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
});

router.delete('/delete/item/:id', (req, res, next) => {

    itemService.deleteItem(req.params.id)
        .then((result) => {
            console.log('item deleted');
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            next(err);
        })
})

module.exports = router;