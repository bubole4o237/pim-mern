const getUserInput = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const { categoryItem, itemName, dateOfPurchase, expiryDate, startDate, durationInput, periodType } = e.target;
 
    // console.log(categoryItem.value, itemName.value, dateOfPurchase.value, expiryDate.value, startDate.value, durationInput.value, periodType.value);

    let category = categoryItem.value;

    let name = itemName.value;

    let purchasedOn = dateOfPurchase.value;
    let expireOn = expiryDate.value;
    let openedOn = startDate.value;
 
    /*
    let purchaseData = dateOfPurchase.value.split('-');
    let purchaseYear = Number(purchaseData[0]);
    let purchaseMonth = Number(purchaseData[1]);
    let purchaseDay = Number(purchaseData[2]);

    let expiry = expiryDate.value.split('-');
    let expiryYear = Number(expiry[0]);
    let expiryMonth = Number(expiry[1]);
    let expiryDay = Number(expiry[2]);

    let start = startDate.value.split('-');
    let startYear = Number(start[0]);
    let startMonth = Number(start[1]);
    let startDay = Number(start[2]);
    */

    let duration = Number(durationInput.value);

    let period = periodType.value;


    return {
        category,
        name,
        purchasedOn,
        expireOn,
        openedOn,
        // purchaseDay,
        // purchaseMonth,
        // purchaseYear,
        // expiryDay,
        // expiryMonth,
        // expiryYear,
        // startDay,
        // startMonth,
        // startYear,
        duration,
        period
    };
}

export default getUserInput;