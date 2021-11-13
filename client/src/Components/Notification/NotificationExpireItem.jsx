import { useState, useEffect } from 'react';
import * as itemService from '../../services/itemService';

import transformDataFromDB from '../../Logic/transformDataFromDB.js';
import timeCalculator from '../../Logic/TimeCalculations/timeCalculator.js';


import './Notification.css';


const Notification = (props) => {

    const [items, setItems] = useState([]);
    const [numberOfItemsInWarning, setNumberOfItemsInWarning] = useState(0);
    const [flag, setFlag] = useState(false);
    // const [textMessage, setTextMessage] = useState('');

    const ownerId = localStorage.getItem('userId');

    useEffect(() => {
        itemService.getAll(ownerId)
            .then(res => {
                setItems(res);
            });
    }, [ownerId]);


    let transformedItems = items.map(x => transformDataFromDB(x));
    let resultItems = transformedItems.map(item => timeCalculator(item));
    let itemsInWarning = resultItems.filter(i => i.totalDaysLeft < 10);
    // resultItems.sort((a, b) => { return a.totalDaysLeft - b.totalDaysLeft });
    console.log(itemsInWarning.length);


    useEffect(() => {
        setNumberOfItemsInWarning(itemsInWarning.length);
        console.log("Items in warning: " + numberOfItemsInWarning);
    }, [itemsInWarning.length, numberOfItemsInWarning]);

    // setInterval(function() {window.location.reload(false)}, 1000);
    setInterval(function () { window.location = document.URL }, 21600000);

    const changeStyleDisplayNone = () => {
            setItems([]);
    }


    let message = numberOfItemsInWarning === 1 ? 'Item will expire soon!' : 'Items will expire soon!';

    return (
        <div className="notificationDiv" onClick={changeStyleDisplayNone}>
            {numberOfItemsInWarning ? <p>{numberOfItemsInWarning} {message}</p> : null}
        </div>
    );
}

export default Notification;
