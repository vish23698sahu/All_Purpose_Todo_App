import React, { Fragment } from 'react';
import './SignUp.css';
import logo from '../../media/TodoLogo.png';
import { Link } from 'react-router-dom';

export default function SignUp() {
    return (
        <Fragment>
            <div className="signUp__container" >
                <div className="logo-1" >
                    <Link to='/' className="navbar-brand brand-color linkss feature__btn">
                        <img src={logo} width="40px" className="signUp__img" alt='Logo Todo App' ></img>&nbsp; Do.It
                    </Link>
                </div>
                <div className="sec-item">
                    <div className="cont__signUp" >
                        <h2>Sign Up</h2>

                        <form>
                            <input className='signUp__email' type='text' placeholder='email' /><br /><br />
                            <input className='signUp__password' type='password' placeholder='password' /><br />

                            <button className='signUp__loginBtn' >Sign Up</button><br /><br /><br /><br />
                            <hr /><br /><br />
                            <div className='signUp__google' ></div>
                            <div className="signUp__exist">
                                Existing User ? <Link to='/login' className='signUp__signUpBtn'>Log In</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
