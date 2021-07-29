import addedTimeFromUser from './addedTimeFormUser.js';

function findTargetDate(period, type, openedYearInput, openedMonthInput, openedDayInput, inputYear, inputMonth, inputDay) {
    if (period && type && openedYearInput) {

        return addedTimeFromUser(period, type, openedYearInput, openedMonthInput, openedDayInput);
    
    } else if (inputYear && inputMonth && inputDay) {
    
        return new Date(inputYear, inputMonth - 1, inputDay);
   
    } else {
   
        console.log('There is no or missing input value!!!');
        return undefined;
    }
}

export default findTargetDate; 