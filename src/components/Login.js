import { Fragment } from "react";
import './Login.css';
import logo from '../media/TodoLogo.png';

const Login = (props) => {
    return (
        <Fragment>
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
                                Don't have an account ? <span className='login__signUpBtn' >Sign Up</span>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
