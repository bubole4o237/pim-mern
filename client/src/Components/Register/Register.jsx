import { Link } from 'react-router-dom';
import './Register.css';
import userService from '../../services/userService';



const Register = ({ history }) => {

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


    return (

        <section className="create">
            <div className="main-div">
                <form onSubmit={onRegisterFormSubmitHandler} className="form-register-login">
                    <fieldset id="fieldset-register">
                        <legend className="legend-register">Register form</legend>
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
                        <p className="field">
                            <label htmlFor="repeatPassword"><i className="fas fa-unlock-alt"></i></label>
                            <span className="input">
                                <input type="password" name="repeatPassword" id="repeatPassword" placeholder="repeatPassword" />
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


