import findTargetDate from './findTargetDate.js';
import findTimeLeft from './findTimeLeft.js';

const timeCalculator = (dataObjectFromDB) => {
   
    const {_id, category, name, duration, type, startYear, startMonth, startDay, expiryYear, expiryMonth, expiryDay} = dataObjectFromDB;

    
    let targetDate = findTargetDate(duration, type, startYear, startMonth, startDay, expiryYear, expiryMonth, expiryDay);
    
    if (targetDate) {
                
        let targetYear = targetDate.getFullYear();
        let targetMonth = targetDate.getMonth() + 1;
        let targetDay = targetDate.getDate();
        
        let resultInfo = findTimeLeft(targetYear, targetMonth, targetDay, category, name, _id);
        
        return resultInfo;
    } 
}

export default timeCalculator;