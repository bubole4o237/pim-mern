import React from 'react';
import { useEffect, useState } from 'react';

import Notification from '../Notification/Notification';

import getUserInput from '../../Logic/getUserInput.js'
import itemService from '../../services/itemService'

import './SelectedItem.css';



const SelectedItem = ({ history, match }) => {

    let itemId = match.params.id;

    const [item, setItem] = useState({});
    const [textMessage, setTextMessage] = useState('');

    // const [purchasedDate, setPurchasedDate] = useState('');


    useEffect(() => {

        if (itemId) {
            itemService.getOne(itemId)
                .then(res => {
                    console.log(res[0]);
                    setItem(res[0]);
                    // setPurchasedDate(res[0].purchasedOn)
                });
        }
    }, [match, itemId]);

    let nameItemDB = item.name;
    let categoryItemDB = item.category;
    let purchasedOnItemDB = item.purchasedOn;
    let expireOnItemDB = item.expireOn;
    let openedOnItemDB = item.openedOn;
    let durationItemDB = item.duration;
    let typeItemDB = item.type;


    const onEditItemSubmitHandler = (e) => {
        let userInputData = getUserInput(e);
        console.log("1 " + userInputData);

        if (userInputData.category && userInputData.name && userInputData.purchasedOn && (userInputData.expireOn || (userInputData.openedOn && userInputData.duration && userInputData.period))) {
            console.log('All data is here');

            itemService.update(
                itemId,
                userInputData.category,
                userInputData.name,
                userInputData.purchasedOn,
                userInputData.expireOn,
                userInputData.openedOn,
                userInputData.duration,
                userInputData.period
            )
                .then((res) => {
                    console.log(res);
                    history.push('/show/all/items');
                    window.location = document.URL;  ////////// Reload the itemList page and refresh the notification ////////////////

                });
        } else {
            console.log("There is a missing data!!!");
            setTextMessage('There is a missing data!');
            return;
        }
    }

    const onClickButtonCancelHandler = () => {
        console.log('Edit canceled by the user!!!');
        history.push('/show/all/items');
    }

    const onClickButtonDeleteHandler = () => {
        console.log('Button DELETE is clicked');
        const userConfirmation = prompt("You will delete this item! Are you sure?", "Yes, I want to delete this item.");

        if (userConfirmation) {
            console.log(userConfirmation);


            itemService.deleteItem(itemId)
                .then((res) => {
                    console.log(res);
                    console.log('The ITEM was deleted successfully!!!');
                    history.push('/show/all/items');
                    window.location = document.URL;  ////////// Reload the itemList page and refresh the notification ////////////////
                });

        } else {
            console.log("The deletion is canceled.");
            return;
        }

    }

    const clearExpiryDate = (e) => {
        e.target.parentNode.parentNode.firstChild.firstChild.nextSibling.nextSibling.value = '';
    }

    const clearStartDate = (e) => {
        e.target.parentNode.nextSibling.nextSibling.firstChild.nextSibling.nextSibling.value = '';
    }


    return (
        <div>
            <Notification text={textMessage} setText={setTextMessage} />
            <div id="userInput" style={{
                backgroundColor: (itemId) ? 'firebrick'
                    : '#5265B8',
                paddingTop: '10px',
                paddingBottom: '20px'
            }}>

                <h3>Edit Item Info or Delete Item</h3>
                <form onSubmit={onEditItemSubmitHandler}>
                    <fieldset>
                        <legend>Item info:</legend>

                        <div className="fieldset1">
                            <label htmlFor="categoryItem">Category:</label>
                            <br />
                            <select className="inputFields" id="categoryItem" name="categoryItem" defaultValue={categoryItemDB}>
                                <option value={categoryItemDB} hidden>{categoryItemDB}</option>
                                <option value="medicine">Medicine</option>
                                <option value="item">Item</option>
                                <option value="service">Service</option>
                                <option value="other">Other</option>
                            </select>
                            <br />
                            <label htmlFor="itemName">Name:</label>
                            <br />
                            <input type="text" className="inputFields" id="itemName" name="itemName" defaultValue={nameItemDB} />
                            <br />
                            <label htmlFor="dateOfPurchase">Purchased on:</label>
                            <br />
                            <input type="date" className="inputFields" id="dateOfPurchase" name="dateOfPurchase" defaultValue={purchasedOnItemDB} />
                        </div>

                    </fieldset>
                    <fieldset>
                        <legend>Valid until:</legend>

                        <div className="fieldset2">
                            <p id="p1" className="validUntil">
                                <label htmlFor="expiryDate">Expiry Date:</label>
                                <br />
                                <input type="date" className="inputFields" onChange={clearStartDate} id="expiryDate" name="expiryDate" defaultValue={expireOnItemDB} />
                            </p>
                            <p id="p2" className="validUntil">or</p>
                            <p id="p3" className="validUntil">
                                <label htmlFor="startDate">Start Date:</label>
                                <br />
                                <input type="date" className="inputFields" onChange={clearExpiryDate} id="startDate" name="startDate" defaultValue={openedOnItemDB} />
                                <br />
                                <label htmlFor="durationInput">Duration:</label>
                                <br />
                                <input type="text" className="inputFields" onChange={clearExpiryDate} id="durationInput" name="durationInput" placeholder="number" defaultValue={durationItemDB} />
                                <br />
                                <label htmlFor="periodType">Type:</label>
                                <br />
                                <select id="periodType" className="inputFields" onChange={clearExpiryDate} name="periodType" defaultValue={typeItemDB}>
                                    <option value={typeItemDB} hidden>{typeItemDB}</option>
                                    <option value="day">Day</option>
                                    <option value="week">Week</option>
                                    <option value="month">Month</option>
                                    <option value="year">Year</option>
                                </select>
                            </p>
                        </div>

                    </fieldset>

                    <input className="submit" id="deleteSelectedItemButton" type="button" onClick={onClickButtonDeleteHandler} value="delete" />
                    <input className="submit" type="button" onClick={onClickButtonCancelHandler} value="cancel" />
                    <input className="submit" id="saveChangesButton" type="submit" value="save" />

                </form>
            </div>
        </div>
    );
}

export default SelectedItem;
