// import {Link} from 'react-router-dom';
import './Item.css';
import delButton from '../../img/delete-button-icon.png';
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


    return (
        <li className="item-info"><p><span className="span categorySpan">{category}</span><span className="span nameSpan">{name}</span><span className="span dateSpan">{finalDate}</span><span className="span days-left-span">{daysLeft}</span><button className="crudButtons" onClick={onClickEditItemButtonHandler}><img src={editButton} alt="red X" height="16"/></button></p></li>
        // <li className="otherPet">
        //     <h3>Name: {name}</h3>
        //     <p className="img"><img src={imageUrl} alt={`plush toy ${category}`} width="250" />
        //     </p>
        //     <p>Category: <i><b>{category}</b></i></p>
        //     <p className="description">Color: <i><b>{color}</b></i></p>
        //     <div className="toy-select">
        //         <Link to={`/user/customize/toy/${id}`} className="button" onClick={onClickToyButtonSelectHandler}><i className="fas fa-star"></i> SELECT</Link>
        //         {/* <Link to={`/pet/details/${id}`}><button className="button">Details</button></Link> */}
        //         {/* <i className="fas fa-heart"></i> <span> {pet.likes}</span> */}
        //     </div>
        //     <p className="separator"></p>
        // </li>
    );

}

export default Item;