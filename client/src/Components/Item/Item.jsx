// import {Link} from 'react-router-dom';
import './Item.css';
// import delButton from '../../img/delete-button-icon.png';
import editButton from '../../img/edit-button-icon.png';

const Item = ({
    id,
    category,
    name,
    finalDate,
    daysLeft
}) => {


    const onClickEditItemButtonHandler = () => {
        console.log(id, category, name, finalDate, daysLeft);
    }

    let isExpired = false;

    if (daysLeft < 0) {
        isExpired = true;
    }

    return (
        <li className="item-info">
            <p>
                <span className="span categorySpan">{category}</span>
                <span className="span nameSpan">{name}</span>
                <span className="span dateSpan">{finalDate}</span>
                <span className="span days-left-span" style={{
                    backgroundColor: (daysLeft < 0) ? 'red'
                        : (daysLeft == 0) ? 'orange'
                            : (daysLeft > 0 && daysLeft < 11) ? 'yellow'
                                : (daysLeft > 10 && daysLeft < 30) ? '#8505a8'
                                    : '#3b44bf',
                    color: (daysLeft > 0 && daysLeft < 11) ? 'black' : 'white'
                }}>{daysLeft}</span>
                <button className="crudButtons" onClick={onClickEditItemButtonHandler}>
                    <img src={editButton} alt="red X" height="16" />
                </button>
            </p>
        </li>
    );

}

export default Item;