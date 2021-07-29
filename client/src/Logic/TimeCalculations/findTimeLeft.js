import correctedDays from './correctedDays.js';

function findTimeLeft(year, month, day) {

    let targetDate = new Date(year, month - 1, day);
    let targetYear = targetDate.getFullYear();
    let targetMonth = targetDate.getMonth() + 1;
    let targetDay = targetDate.getDate();

    let actualDate = new Date();
    let actualYear = actualDate.getFullYear();
    let actualMonth = actualDate.getMonth() + 1;
    let actualDay = actualDate.getDate();

    // Left time in milliseconds added with 
    // 86399999 milliseconds (23 h. 59 min, 59 sec, 999 milliseconds)
    // to get the full day which starts at 00 h 00 min 00 sec 000 milliseconds
    let leftTime = targetDate.getTime() + 86399999 - actualDate.getTime();
    let totalDaysLeft = Math.floor(leftTime / 1000 / 60 / 60 / 24);

    let yearsLeft = targetYear - actualYear;
    let monthsLeft = targetMonth - actualMonth;
    let daysLeft = targetDay - actualDay;

    let textYear = '';
    let textMonth = '';
    let textDay = '';
    let textConnectionDay = '';
    let textConnectionYearMonth = '';

    if (yearsLeft < 0) {
        if (monthsLeft > 0) {
            yearsLeft = yearsLeft + 1;
            monthsLeft = monthsLeft - 12;
        }

        if (daysLeft > 0) {
            if (monthsLeft > 0) {
                daysLeft = correctedDays(daysLeft, targetMonth, targetYear);
            }
            // monthsLeft = monthsLeft + 1;
        }
    }

    if (daysLeft < 0) {
        if (monthsLeft > 0) {
            monthsLeft = monthsLeft - 1;
            // daysLeft = daysLeft + ~30; // NOTE!!! add function correctedDays form correctedDays.js //
            daysLeft = correctedDays(daysLeft, targetMonth, targetYear);
        } else if (yearsLeft > 0) {
            yearsLeft = yearsLeft - 1;
            monthsLeft = monthsLeft + 11;
            // daysLeft = daysLeft + ~30; // NOTE!!! add function correctedDays form correctedDays.js //
            daysLeft = correctedDays(daysLeft, targetMonth, targetYear);
        }
    }

    if (monthsLeft < 0 && daysLeft > 0) {
        monthsLeft = monthsLeft + 1;
        daysLeft = correctedDays(daysLeft, targetMonth, targetYear);
    }


    // HOW TO DISPLAY INFO according to result ///
    if (yearsLeft === 1 || yearsLeft === -1) {
        textYear = `${Math.abs(yearsLeft)} year `;
    } else if (yearsLeft > 1 || yearsLeft < -1) {
        textYear = `${Math.abs(yearsLeft)} years `;
    }

    if (monthsLeft === 1 || monthsLeft === -1) {
        textMonth = `${Math.abs(monthsLeft)} month `;
    } else if (monthsLeft > 1 || monthsLeft < -1) {
        textMonth = `${Math.abs(monthsLeft)} months `;
    }

    if (daysLeft === 1 || daysLeft === -1) {
        textDay = `${Math.abs(daysLeft)} day`;
    } else if (daysLeft > 1 || daysLeft < -1) {
        textDay = `${Math.abs(daysLeft)} days`;
    }

    if ((textYear || textMonth) && textDay) {
        textConnectionDay = 'and ';
    }

    if (textYear && textMonth && !(textDay)) {
        textConnectionYearMonth = 'and ';
    }

    let textMessage = `The warranty expire in: ${textYear}${textConnectionYearMonth}${textMonth}${textConnectionDay}${textDay}`;


    // if ((yearsLeft || monthsLeft || daysLeft) < 0) {
    if (totalDaysLeft < 0) {
        textMessage = `Warranty was expired before: ${textYear}${textConnectionYearMonth}${textMonth}${textConnectionDay}${textDay}`
    }

    if (yearsLeft === 0 && monthsLeft === 0 && daysLeft === 0) {
        textMessage = 'The warranty expire TODAY!';
    }

    // console.log(textMessage);

    if (Math.abs(totalDaysLeft) === 1) {
        // console.log(`Time left: ${totalDaysLeft} day`);
    } else {
        // console.log(`Time left: ${totalDaysLeft} days`);
    }

    // console.log(`Target DATE is: ${targetDate}`);
    // console.log(`Actual DATE is: ${actualDate}`);

    return {
        textMessage,
        totalDaysLeft,
        targetDate,
        actualDate
    }

}

export default findTimeLeft;
// findTimeLeft(2021, 7, 15);

// correctedDays(-5, 2, 2021);