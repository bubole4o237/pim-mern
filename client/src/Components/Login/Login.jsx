import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
// import './Login.css';

const Login = (props) => {

    const setIsLog = props.setIsLog;

    const onLoginFormSubmitHandler = (e) => {
        e.preventDefault();
        console.log('login submit');

        const { username, password } = e.target;

        const user = {
            username: username.value,
            password: password.value
        }

        // fetch('http://localhost:5500/api/auth/login', {
        //     method: "POST",
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(user)
        // })
        //     .then(res => res.json())

        userService.login(user)
            .then(() => {
                // console.log(result);
                // .then((result) => {
                //     console.log(result);
                //     localStorage.setItem('userToken', result.token);
                //     localStorage.setItem('username', result.username);
                //     localStorage.setItem('userId', result._id);
                // isLog(true);
                
                setIsLog(true);

                props.history.push('/');
            })
            // })
            .catch(err => console.log(err));

    }


    return (
        <section className="create">
            <div className="main-div">
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
