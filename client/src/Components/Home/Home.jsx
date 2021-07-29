import { Link } from 'react-router-dom';
import './Home.css';


const Home = () => {
    return (
        <div className="mainDiv">
            <h3>Welcome</h3>
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
}

export default Home;