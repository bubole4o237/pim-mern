// import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Register.css';
import userService from '../../services/userService';



const Register = ({ history }) => {

    const [messageUsername, setMessageUsername] = useState('');
    const [messagePassword, setMessagePassword] = useState('');
    const [messageRepeatPassword, setMessageRepeatPassword] = useState('');

    const onRegisterFormSubmitHandler = (e) => {
        e.preventDefault();
        console.log('Register submit');


        const { username, password, repeatPassword } = e.target;

        const user = {
            username: username.value,
            password: password.value,
            repeatPassword: repeatPassword.value
        }

        userService.register(user)
            .then((res) => {
                console.log(res);

                history.push('/user/login');
            })
            .catch(err => console.log(err));

    }

    const onBlurUsernameInput = (e) => {

        const userNameInput = e.target.value;

        if (!userNameInput) {
            if (e.target.name === 'username') {
                setMessageUsername('username is empty');
            }
            if (e.target.name === 'password') {
                setMessagePassword('password is empty');
            }
            if (e.target.name === 'repeatPassword') {
                setMessageRepeatPassword('repeatPassword is empty');
            }
        } else {
            if (e.target.name === 'username') {
                setMessageUsername('');
            }
            if (e.target.name === 'password') {
                if (e.target.value.length < 5) {
                    setMessagePassword('password must be at least 5 characters long');
                } else {
                    let repeatPasswordValue = e.target.parentNode.parentNode.nextSibling.children[1].children[0].value;
                    if ((e.target.value !== repeatPasswordValue) && ((repeatPasswordValue.length > 0) || (messageRepeatPassword))) {
                        setMessageRepeatPassword('repeatPassword mismatch the password');
                    } else {
                        setMessagePassword('');
                        setMessageRepeatPassword('');
                    }
                }
            }
            if (e.target.name === 'repeatPassword') {
                let passwordValue = e.target.parentNode.parentNode.previousSibling.children[1].children[0].value;
                if (e.target.value !== passwordValue) {
                    setMessageRepeatPassword('repeatPassword mismatch the password');
                } else {
                    setMessageRepeatPassword('');
                }
            }
        }
    }

    return (

        <section className="create">
            <div className="main-div">
                <form onSubmit={onRegisterFormSubmitHandler} className="form-register-login">
                    <fieldset id="fieldset-register">
                        <legend className="legend-register">Register form</legend>
                        <p className="field">
                            <label htmlFor="username"><i className="fas fa-user"></i></label>
                            <span className="input">
                                <input type="text" onBlur={onBlurUsernameInput} autoComplete="username" name="username" id="username" placeholder="Username" />
                                {
                                    messageUsername ? <span className="actions">{messageUsername}</span> : null
                                }
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="password"><i className="fas fa-unlock-alt"></i></label>
                            <span className="input">
                                <input type="password" onBlur={onBlurUsernameInput} autoComplete="new-password" name="password" id="password" placeholder="Password" />
                                {
                                    messagePassword ? <span className="actions">{messagePassword}</span> : null
                                }
                            </span>
                        </p>
                        <p className="field">
                            <label htmlFor="repeatPassword"><i className="fas fa-unlock-alt"></i></label>
                            <span className="input">
                                <input type="password" onBlur={onBlurUsernameInput} autoComplete="new-password" name="repeatPassword" id="repeatPassword" placeholder="repeatPassword" />
                                {
                                    messageRepeatPassword ? <span className="actions">{messageRepeatPassword}</span> : null
                                }
                            </span>
                        </p>
                        <p>
                            <input className="submit button" type="submit" value="Register" />
                        </p>
                    </fieldset>
                </form>
            </div>
        </section>

    );
}

export default Register;


