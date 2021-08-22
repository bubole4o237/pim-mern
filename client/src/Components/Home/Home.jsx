import { Link } from 'react-router-dom';
// import NotificationExpireItem from '../Notification/NotificationExpireItem';

import './Home.css';


const Home = (props) => {

    const username = localStorage.getItem('username');

    if (username) {

        return (
            <div className="mainDiv">
                {/* <NotificationExpireItem /> */}

                <h3>Welcome, {username}!</h3>
                <div id="add-item-div">

                    <Link to="/add/item">
                        <button className="homeButton"><h3>Add New Item</h3></button>
                    </Link>

                </div>
                <div id="show-items-div">

                    <Link to="/show/all/items">
                        <button className="homeButton"><h3>Show All Items</h3></button>
                    </Link>

                </div>
            </div>
        );
    } else {
        return (
            <div className="mainDiv notSignIn">
                <h3>
                    To use this application you have to<br />
                    <Link to="/user/register" className="buttonLink"><i>Register </i></Link> 
                    or 
                    <Link to="/user/login" className="buttonLink"><i> Login </i></Link> 
                    first.
                </h3>
            </div>
        )
    }
}

export default Home;