import { Fragment } from "react";
import './Footer.css';
import Logo from '../media/TodoLogo.png';

const Footer = () => {
    return (
        <Fragment>
            <div className="container-F">
                <div>
                    <img className="logo-home" src={Logo} width="50px" height="40px" ></img>&nbsp;<a className="navbar-brand brand-color linkss" href="#">Do.It</a><br />
                    Join millions of people who organize their work effectively with Do.It
                </div>
                <div>
                    <div>Features</div>
                    <div>How It Works</div>
                    <div>For Teams</div>
                    <div>Pricing</div>
                    <div>Templates</div>
                </div>
                <div>
                    <div>Resources</div>
                    <div>Productivity Methods</div>
                    <div>Refer a Friend</div>
                    <div>Integratins</div>
                    <div>Partners</div>
                    <div>Help Center</div>
                </div>
                <div>
                    <div>Company</div>
                    <div>About US</div>
                    <div>We are Hiring!</div>
                    <div>Blog</div>
                    <div>Press</div>
                </div>
            </div>
        </Fragment>
    );
};

export default Footer;