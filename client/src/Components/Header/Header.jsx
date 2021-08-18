import { Link } from 'react-router-dom';
import './Header.css';
import userService from '../../services/userService';

const Header = (props) => {

    const username = props.username;
    const setIsLog = props.setIsLog;

    const onRegisterButtonClickHandler = () => {
        console.log('HI');
    };

    const onLoginButtonClickHandler = () => {
        console.log('ZDR!');
    };

    const onLogoutButtonClickHandler = () => {
        userService.logout()
            .then(() => {
                setIsLog(false);
            })
    }

    let userStatus = username ?
        <><li><Link to="/" className="button"><i className="fas fa-sign-in-alt"></i>Hi, {username}</Link></li>
            <li><Link to="/" className="button" onClick={onLogoutButtonClickHandler}><i className="fas fa-sign-in-alt"></i>Logout</Link></li></>
        : <><li><Link to="/user/register" className="button" onClick={onRegisterButtonClickHandler}><i className="fas fa-sign-in-alt"></i> Register</Link></li>
            <li><Link to="/user/login" className="button" onClick={onLoginButtonClickHandler}><i className="fas fa-sign-in-alt"></i> Login</Link></li></>;



    return (
        <header id="site-header">
            <nav className="navbar">
                {/* <div>
                    <img id="topLogo" className="teddy-bear" src="http://localhost:3000/img/teddy-bear-cartoon.png" alt="teddy bear" height="110" />
                </div> */}

                <section className="navbar-user">
                    <div className="first-bar">
                        <ul className="navigation-ul">
                            <li><Link to="/" className="button">Home</Link></li>
                        </ul>
                    </div>

                    <h1 className="pim-title">Personal Item Manager</h1>

                    <div className="second-bar">
                        <ul className="navigation-ul">
                            {userStatus}
                        </ul>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;