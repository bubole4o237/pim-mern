import findTargetDate from './findTargetDate.js';
import findTimeLeft from './findTimeLeft.js';

const timeCalculator = (userInputData) => {
    // let duration = userInputData.duration;
    // console.log(duration);

    let duration = userInputData.duration;
    let type = userInputData.period;
    let openedYearInput = userInputData.startYear;
    let openedMonthInput = userInputData.startMonth;
    let openedDayInput = userInputData.startDay;

    let inputYear = userInputData.expiryYear;
    let inputMonth = userInputData.expiryMonth;
    let inputDay = userInputData.expiryDay;
    
    let targetDate = findTargetDate(duration, type, openedYearInput, openedMonthInput, openedDayInput, inputYear, inputMonth, inputDay);
    
    if (targetDate) {
        
        console.log(`Valid until: ${targetDate}`);
        
        let targetYear = targetDate.getFullYear();
        let targetMonth = targetDate.getMonth() + 1;
        let targetDay = targetDate.getDate();
        
        let resultInfo = findTimeLeft(targetYear, targetMonth, targetDay);
        console.log('<<< ' + resultInfo.textMessage + ' >>>');
        console.log('<<< ' + resultInfo.totalDaysLeft + ' >>>');
        console.log('<<< Target Date: ' + resultInfo.targetDate + ' >>>');
        console.log('<<< Actual Date: ' + resultInfo.actualDate + ' >>>');
        
        return resultInfo;
    } 
}

export default timeCalculator;