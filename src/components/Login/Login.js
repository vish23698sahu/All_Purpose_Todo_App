import { Fragment } from "react";
import './Login.css';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <div className="login__container" >
                <div className="sec-item">
                    <div className="cont-login" >
                        <h2>Login</h2>

                        <form>
                            <input className='login__email' type='text' placeholder='email' /><br /><br />
                            <input className='login__password' type='password' placeholder='password' /><br />

                            <button className='login__loginBtn' >Log In</button><br /><br /><br /><br />
                            <hr /><br /><br />
                            <div className='login__google' ></div>
                            <div className="login__dont">
                                Don't have an account ? <Link to='/signup' className='login__signUpBtn'>Sign Up</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
