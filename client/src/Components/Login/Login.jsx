import { useState } from 'react';
import Notification from '../Notification/Notification';
import userService from '../../services/userService';
// import './Login.css';

const Login = (props) => {

    const [textMessage, setTextMessage] = useState('');

    const setIsLog = props.setIsLog;

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        console.log('login submit');

        const { username, password } = e.target;

        const user = {
            username: username.value,
            password: password.value
        }

        userService.login(user)
            .then((res) => {
                    
                    setIsLog(true);
                    
                    props.history.push('/');
                
            })
            // })
            .catch(err => {
                console.log(err.message);
                setTextMessage('Username or password incorrect!');
            });

    }


    return (
        <section className="create">
            <div className="main-div">

                <Notification text={textMessage} setText={setTextMessage} />

                <form onSubmit={onLoginFormSubmitHandler} className="form-register-login">
                    <fieldset id="fieldset-register">
                        <legend className="legend-register">Login form</legend>
                        <p className="field">
                            <label htmlFor="username"><i className="fas fa-user"></i></label>
                            <span className="input">
                                <input type="text" name="username" id="username" placeholder="Username" />
                                <span className="actions"></span>
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password"><i className="fas fa-unlock-alt"></i></label>
                            <span className="input">
                                <input type="password" name="password" id="password" placeholder="Password" />
                            </span>
                        </p>
                        <p>
                            <input className="submit button" type="submit" value="Login" />
                        </p>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}

export default Login;
