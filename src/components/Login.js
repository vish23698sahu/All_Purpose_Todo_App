import { Fragment } from "react";
import './Login.css';
import logo from '../media/TodoLogo.png';

const Login = () => {
    return (
        <Fragment>
            <div className="cont" >
                <div className="logo-1" >
                    <img src={logo} width="65px" height="55px" ></img>
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
