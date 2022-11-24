import React, { Fragment } from 'react';
import './SignUp.css';
import logo from '../../media/TodoLogo.png';
import { Link } from 'react-router-dom';


export default function SignUp() {
    return (
        <Fragment>
            <div className="signUp__container" >
                <div className="logo-1" >
                    <Link to='/'>
                        <img src={logo} width="40px" height="40px" className="signUp__img" alt='Logo of Todo App' ></img>&nbsp; Do.It
                    </Link>
                    {/* <img src={logo} width="40px" height="40px" className="signUp__img" alt='Logo of Todo App' ></img>Do.It */}
                </div>
                <div className="sec-item">
                    <div className="cont__signUp" >
                        <h2>Sign Up yourself</h2>

                        <form>
                            <input className='signUp__email' type='text' placeholder='email' /><br /><br />
                            <input className='signUp__password' type='password' placeholder='password' /><br />

                            <button className='signUp__loginBtn' >Sign Up</button><br /><br /><br /><br />
                            <hr /><br /><br />
                            <div className='signUp__google' ></div>
                            <div>
                                Existing User ? <Link to='/login' className='signUp__signUpBtn'>Log In</Link>
                                {/* <span className='signUp__signUpBtn' onClick={props.onLoginClick} >Log In</span> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
