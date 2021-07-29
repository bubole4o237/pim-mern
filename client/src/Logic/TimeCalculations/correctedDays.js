// This function is used to transform 
// negative number of days in real positive number of days //

function correctedDays(daysLeft, targetMonth, targetYear) {
    ///////////////////////////////
    // This part (from 8 to 15 rows) of code is used when 
    // the time is expired but the daysLeft is positive number //
    if (daysLeft > 0) {
        daysLeft = -daysLeft;
        targetMonth = targetMonth + 1;
    }
    
    if (targetMonth === 13) {
        targetMonth = 1;
    }
    ///////////////////////////////

    if (
        targetMonth === 5 ||
        targetMonth === 7 ||
        targetMonth === 10 ||
        targetMonth === 12
    ) {
        daysLeft = daysLeft + 30;
    } else if (
        targetMonth === 1 ||
        targetMonth === 2 ||
        targetMonth === 4 ||
        targetMonth === 6 ||
        targetMonth === 8 ||
        targetMonth === 9 ||
        targetMonth === 11
    ) {
        daysLeft = daysLeft + 31;
    } else if (targetMonth === 3) {
        if ((targetYear % 4 === 0 && targetYear % 100 !== 0) || (targetYear % 400 === 0)) {
            daysLeft = daysLeft + 29;
        } else {
            daysLeft = daysLeft + 28;
        }
    }


    // console.log(daysLeft);
    return daysLeft;
}

// correctedDays(-7, 8, 2022);
export default correctedDays; 