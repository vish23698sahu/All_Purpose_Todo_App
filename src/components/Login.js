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
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Login;
