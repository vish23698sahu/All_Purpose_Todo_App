import { Fragment } from "react";
import './Login.css';
import logo from '../../media/TodoLogo.png';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <Fragment>
            <div className="login__container" >
                <div className="logo-1" >
                    <Link to='/'>
                        <img src={logo} width="40px" height="40px" className="login__img" alt='Logo of Todo App' ></img>&nbsp; Do.It
                    </Link>
                </div>
                <div className="sec-item">
                    <div className="cont-login" >
                        <h2>Login to continue</h2>

                        <form>
                            <input className='login__email' type='text' placeholder='email' /><br /><br />
                            <input className='login__password' type='password' placeholder='password' /><br />

                            <button className='login__loginBtn' >Log In</button><br /><br /><br /><br />
                            {/* <Link to='/login' className="login__loginBtn">Log In</Link> */}
                            <hr /><br /><br />
                            <div className='login__google' ></div>
                            <div>
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
