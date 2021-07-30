import findTargetDate from './findTargetDate.js';
import findTimeLeft from './findTimeLeft.js';

const timeCalculator = (dataObjectFromDB) => {
    // let duration = userInputData.duration;
    // console.log(duration);
    const {_id, category, name, duration, type, startYear, startMonth, startDay, expiryYear, expiryMonth, expiryDay} = dataObjectFromDB

    // let duration = userInputData.duration;
    // let type = userInputData.period;
    // let openedYearInput = userInputData.startYear;
    // let openedMonthInput = userInputData.startMonth;
    // let openedDayInput = userInputData.startDay;

    // let inputYear = userInputData.expiryYear;
    // let inputMonth = userInputData.expiryMonth;
    // let inputDay = userInputData.expiryDay;
    
    let targetDate = findTargetDate(duration, type, startYear, startMonth, startDay, expiryYear, expiryMonth, expiryDay);
    
    if (targetDate) {
        
        console.log(`Valid until: ${targetDate}`);
        
        let targetYear = targetDate.getFullYear();
        let targetMonth = targetDate.getMonth() + 1;
        let targetDay = targetDate.getDate();
        
        let resultInfo = findTimeLeft(targetYear, targetMonth, targetDay, category, name, _id);
        console.log('<<< ' + resultInfo.textMessage + ' >>>');
        console.log('<<< ' + resultInfo.totalDaysLeft + ' >>>');
        console.log('<<< Target Date: ' + resultInfo.targetDate + ' >>>');
        console.log('<<< Actual Date: ' + resultInfo.actualDate + ' >>>');
        
        // resultInfo._id = _id;
        // resultInfo.category = category;
        // resultInfo.name = name;
        return resultInfo;
    } 
}

export default timeCalculator;