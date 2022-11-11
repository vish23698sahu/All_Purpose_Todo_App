import { Fragment, useState } from "react";
import './Login.css';
import logo from '../../media/TodoLogo.png';
import SignUp from "../SignUp/SignUp";

const Login = (props) => {
    const [showLoginPage, setShowLoginPage] = useState(true);
    const [showSignUpPage, setShowSignUpPage] = useState(false);

    const onSignUpHandler = () => {
        setShowLoginPage(false);
        setShowSignUpPage(true);
    }

    const onLoginClickHandler = () => {
        setShowLoginPage(true);
        setShowSignUpPage(false);
    }

    return (
        <Fragment>
            {showLoginPage &&
                <div className="login__container" >
                    <div className="logo-1" >
                        <img src={logo} onClick={props.onHomeClick} width="40px" height="40px" className="login__img" alt='Logo of Todo App' ></img>Do.It
                    </div>
                    <div className="sec-item">
                        <div className="cont-login" >
                            <h2>Login to continue</h2>

                            <form>
                                <input className='login__email' type='text' placeholder='email' /><br /><br />
                                <input className='login__password' type='password' placeholder='password' /><br />

                                <button className='login__loginBtn' >Log In</button><br /><br /><br /><br />
                                <hr /><br /><br />
                                <div className='login__google' ></div>
                                <div>
                                    Don't have an account ? <span className='login__signUpBtn' onClick={onSignUpHandler} >Sign Up</span>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            }

            {showSignUpPage && <SignUp onLoginClick={onLoginClickHandler} />}
        </Fragment>
    );
};

export default Login;
