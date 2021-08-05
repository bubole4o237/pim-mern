//////////// create an Item ///////////////////////////////////

const create = (category, name, purchasedOn, expireOn, openedOn, duration, type) => {
    
    let item = {
        category,
        name,
        purchasedOn,
        expireOn,
        openedOn,
        duration,
        type
    }

    return fetch('http://localhost:5000/api/item/create/item', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(res => res.json())
        .catch(err => console.log(err));
};
/////////// update an Item /////////////////////////////////

const update = (id, category, name, purchasedOn, expireOn, openedOn, duration, type) => {
    
    let itemIdUrl = `http://localhost:5000/api/item/update/items/${id}`;

    let item = {
        id,
        category,
        name,
        purchasedOn,
        expireOn,
        openedOn,
        duration,
        type
    }

    return fetch(itemIdUrl, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(res => res.n)
        .catch(err => console.log(err));
        // .then(res => res.json());
};


/////////// getAll Items or all Items by category /////////////

const url = 'http://localhost:5000/api/item/get/items';

const getAll = (category = '') => {
    // console.log("CATEGORY FROM itemService.js: " + category);

    let itemsUrl = url;

    if (category) {

        itemsUrl += (category && category !== 'all') ? `?category=${category}` : '';
        
    } 


    // console.log(itemsUrl);

    return fetch(itemsUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
};


/////////// getOne Item by ID /////////////

const getOne = (id) => {

    let itemIdUrl = url + `/${id}`;

    return fetch(itemIdUrl)
        .then(res => res.json())
        .catch(err => console.log(err));
};



//////////// delete Item by ID /////////////

const deleteItem = (id) => {
    console.log("Hi from function deleteITEM");

    let itemIdUrl = `http://localhost:5000/api/item/delete/item/${id}`;


    return fetch(itemIdUrl, {
        method: "DELETE"
    })
        .then(res => res.n)
        .catch(err => console.log(err));
}

module.exports = {
    create,
    update,
    getAll,
    getOne,
    deleteItem
}