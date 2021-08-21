import React from 'react';
import { Link } from 'react-router-dom';
import getUserInput from '../../Logic/getUserInput.js'
import itemService from '../../services/itemService';

import showAllItemsListIcon from '../../img/info-button-icon-black.png';

import './UserInput.css';


const UserInput = ({ history }) => {

    const ownerId = localStorage.getItem('userId');

    const onCreateItemSubmitHandler = (e) => {
        let userInputData = getUserInput(e);
        console.log("1 " + userInputData);

        if (userInputData.category && userInputData.name && userInputData.purchasedOn && (userInputData.expireOn || (userInputData.openedOn && userInputData.duration && userInputData.period))) {
            console.log('All data is here');

            itemService.create(
                userInputData.category,
                userInputData.name,
                userInputData.purchasedOn,
                userInputData.expireOn,
                userInputData.openedOn,
                userInputData.duration,
                userInputData.period,
                ownerId
            )
                .then((res) => {
                    console.log(res);
                    history.push('/show/all/items');
                    window.location = document.URL;  ////////// Reload the itemList page and refresh the notification ////////////////

                });
        } else {
            console.log("There is a missing data!!!");
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
        <div id="userInput">
            <Link to={`/show/all/items`}>
                {/* <button className="crudButtons"> */}
                {/* <img src={editButton} alt="edit button" title="Show and edit" height="16" /> */}
                <img src={showAllItemsListIcon} id="showAllItemsListIcon" alt="show items button" title="Show all items" width="36" />
                {/* </button> */}
            </Link>
            <h3>Add New Item</h3>
            <form onSubmit={onCreateItemSubmitHandler}>
                <fieldset>
                    <legend>Item info:</legend>

                    <div className="fieldset1">
                        <label htmlFor="categoryItem">Category:</label>
                        <br />
                        <select className="inputFields" id="categoryItem" name="categoryItem" defaultValue="">
                            <option value="" hidden>Select category</option>
                            <option value="medicine">Medicine</option>
                            <option value="item">Item</option>
                            <option value="service">Service</option>
                            <option value="other">Other</option>
                        </select>
                        <br />
                        <label htmlFor="itemName">Name:</label>
                        <br />
                        <input type="text" className="inputFields" id="itemName" name="itemName" />
                        <br />
                        <label htmlFor="dateOfPurchase">Purchased on:</label>
                        <br />
                        <input type="date" className="inputFields" id="dateOfPurchase" name="dateOfPurchase" />
                    </div>

                </fieldset>
                <fieldset>
                    <legend>Valid until:</legend>

                    <div className="fieldset2">
                        <p id="p1" className="validUntil">
                            <label htmlFor="expiryDate">Expiry Date:</label>
                            <br />
                            <input type="date" className="inputFields" onChange={clearStartDate} id="expiryDate" name="expiryDate" />
                        </p>
                        <p id="p2" className="validUntil">or</p>
                        <p id="p3" className="validUntil">
                            <label htmlFor="startDate">Start Date:</label>
                            <br />
                            <input type="date" className="inputFields" onChange={clearExpiryDate} id="startDate" name="startDate" />
                            <br />
                            <label htmlFor="durationInput">Duration:</label>
                            <br />
                            <input type="text" className="inputFields" onChange={clearExpiryDate} id="durationInput" name="durationInput" placeholder="number" />
                            <br />
                            <label htmlFor="periodType">Type:</label>
                            <br />
                            <select id="periodType" className="inputFields" onChange={clearExpiryDate} name="periodType" defaultValue="">
                                <option value="" hidden>Select a period type</option>
                                <option value="day">Day</option>
                                <option value="week">Week</option>
                                <option value="month">Month</option>
                                <option value="year">Year</option>
                            </select>
                        </p>
                    </div>

                </fieldset>

                <input className="submit" type="submit" value="save" />

            </form>
        </div>
    );
};



export default UserInput;