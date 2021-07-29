import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const onRegisterButtonClickHandler = () => {
        console.log('HI');
    };

    const onLoginButtonClickHandler = () => {
        console.log('ZDR!');
    };

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

                            <li><Link to="/register" className="button" onClick={onRegisterButtonClickHandler}><i className="fas fa-sign-in-alt"></i> Register</Link></li>
                            <li><Link to="/login" className="button" onClick={onLoginButtonClickHandler}><i className="fas fa-sign-in-alt"></i> Login</Link></li>

                        </ul>
                    </div>
                </section>
            </nav>
        </header>
    );
}

export default Header;