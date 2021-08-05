import { useState, useEffect } from 'react';
import * as itemService from '../../services/itemService';
import transformDataFromDB from '../../Logic/transformDataFromDB.js';
import timeCalculator from '../../Logic/TimeCalculations/timeCalculator.js';

import Item from '../Item/Item';
import './ItemsList.css';


const Items = () => {

    const [items, setItems] = useState([]);
    const [category, setCategory] = useState('');
    const [searchWord, setSearchWord] = useState('');

    useEffect(() => {
        console.log('JUST TEST');
        itemService.getAll(category)
            .then(res => {
                setItems(res);
            });
    }, [category]);

    let transformedItems = items.map(x => transformDataFromDB(x));
    let resultItems = transformedItems.map(item => timeCalculator(item));
    resultItems.sort((a, b) => { return a.totalDaysLeft - b.totalDaysLeft });

    if (searchWord) {
        resultItems = resultItems.filter(i => i.name.toLowerCase().includes(searchWord.toLowerCase()));
        console.log(resultItems);
    }

    console.log(transformedItems);
    console.log(resultItems);

    const categoryHandler = (e) => {
        setSearchWord('');
        setCategory(e.target.value);
    }

    const searchButtonHandler = (e) => {
        let search = e.target.previousSibling.value;
        setSearchWord(search);
        e.target.previousSibling.value = '';
    }

    return (
        <div id="items">
            <h3>List items</h3>
            <div>
                {/* <form> */}

                <select className="inputFields" id="categoryItem" name="categoryItem" defaultValue="" onChange={categoryHandler}>
                    <option value="" hidden>Select category</option>
                    <option value="all">All</option>
                    <option value="medicine">Medicine</option>
                    <option value="item">Item</option>
                    <option value="service">Service</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <br />
                {/* <input type="text" class="search" name="search" placeholder="Search..."></input> */}
                {/* <input type="submit" value="search"></input> */}
                <input type="text"></input>
                <button onClick={searchButtonHandler}>search</button>
                {/* </form> */}
            </div>
            <ul id="listItems">
                <li className="item-info"><p id="title-paragraph"><span className="span categorySpan">Category</span><span className="span nameSpan">Name</span><span className="span dateSpan">Expiry date</span><span className="span days-left-span">Days left</span><span className="span edit-title-span">Edit</span></p></li>
                {(resultItems.length > 0) ? resultItems.map(item =>
                    <Item
                        key={item._id}
                        id={item._id}
                        category={item.category}
                        name={item.name}
                        finalDate={item.finalDate}
                        daysLeft={item.totalDaysLeft}
                    />
                )
                    : searchWord ? <li className="itemNotFound">
                        <p>Sorry! No such Item found in your list!</p>
                    </li>
                        : <li></li>}
            </ul>
        </div>
    );
}

export default Items;
