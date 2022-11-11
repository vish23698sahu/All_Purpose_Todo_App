import { Fragment } from "react";
import './Footer.css';
import Logo from '../../media/TodoLogo.png';

const Footer = (props) => {
    return (
        <Fragment>
            <div className="container-F">
                <div>
                    <img src={Logo} className="logo-home" onClick={props.onHomeClick} width="50px" height="40px" ></img>&nbsp;
                    <a className="navbar-brand brand-color linkss" onClick={props.onHomeClick} >Do.It</a><br />
                    Join millions of people who organize their work effectively with Do.It
                </div>
                <div>
                    <div className="space-item"><a onClick={props.onFeatureClick} >Features</a></div>
                    <div className="space-item"><a>How It Works</a></div>
                    <div className="space-item"><a>For Teams</a></div>
                    <div className="space-item"><a>Templates</a></div>
                    <div className="space-item"><a>Refer a Friend</a></div>

                </div>
                <div>
                    <div className="space-item"><a>Resources</a></div>
                    <div className="space-item"><a>Productivity Methods</a></div>
                    <div className="space-item"><a>Integrations</a></div>
                    <div className="space-item"><a>Partners</a></div>
                    <div className="space-item"><a>Help Center</a></div>
                </div>
                <div>
                    <div className="space-item"><a>Company</a></div>
                    <div className="space-item"><a>About US</a></div>
                    <div className="space-item"><a>We are Hiring!</a></div>
                    <div className="space-item"><a>Blog</a></div>
                    <div className="space-item"><a>Press</a></div>
                </div>
            </div>
        </Fragment >
    );
};

export default Footer;