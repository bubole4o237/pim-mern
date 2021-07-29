function addedTimeFromUser(time, type, openedYearInput, openedMonthInput, openedDayInput) {
    let actualDate = new Date();

    if (openedYearInput && openedMonthInput && openedDayInput) {
        actualDate = new Date(openedYearInput, openedMonthInput - 1, openedDayInput);
    }
    
    console.log(actualDate);
    let actualYear = actualDate.getFullYear();
    let actualMonth = actualDate.getMonth() + 1;
    let actualDay = actualDate.getDate();

    if (type === 'year') {

        actualYear = actualYear + time;
        return new Date(actualYear, actualMonth - 1, actualDay)

    } else if (type === 'month') {

        if (time > 12) {
            actualYear = actualYear + Math.floor(time / 12);
            actualMonth = actualMonth + time % 12;
        }

        if (time <= 12) {
            actualMonth = actualMonth + time;
        }

        if (actualMonth > 12) {
            actualYear = actualYear + Math.floor(actualMonth / 12);
            actualMonth = actualMonth % 12;
        }

        return new Date(actualYear, actualMonth - 1, actualDay)

    } else if (type === 'week') {

        return new Date(actualYear, actualMonth - 1, actualDay + time * 7);

    } else if (type === 'day') {

        return new Date(actualYear, actualMonth - 1, actualDay + time);

    }
}


export default addedTimeFromUser;