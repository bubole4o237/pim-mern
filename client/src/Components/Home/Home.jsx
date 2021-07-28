import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="mainDiv">
            <h2>Welcome</h2>
            <div id="add-item-div">
                <h3>Add New Item</h3>
                <Link to="/add/item">
                    <button >+</button>
                </Link>
            </div>
            <div id="show-items-div">
                <h3>Show All Items</h3>
                <Link to="/show/all/items">
                    <button >Items</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;