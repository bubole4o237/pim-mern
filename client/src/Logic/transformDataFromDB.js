

const transformDataFromDB = (objectFRomDB) => {

    const { _id, category, name, purchasedOn, expireOn, openedOn, duration, type } = objectFRomDB;

    let purchaseData = purchasedOn.split('-');
    let purchaseYear = Number(purchaseData[0]);
    let purchaseMonth = Number(purchaseData[1]);
    let purchaseDay = Number(purchaseData[2]);

    let expiry = expireOn.split('-');
    let expiryYear = Number(expiry[0]);
    let expiryMonth = Number(expiry[1]);
    let expiryDay = Number(expiry[2]);

    let start = openedOn.split('-');
    let startYear = Number(start[0]);
    let startMonth = Number(start[1]);
    let startDay = Number(start[2]);

    return {
        _id,
        category, 
        name, 
        purchaseYear, 
        purchaseMonth,
        purchaseDay,
        expiryYear,
        expiryMonth,
        expiryDay,
        startYear,  
        startMonth, 
        startDay,
        duration, 
        type
    };
};

export default transformDataFromDB;