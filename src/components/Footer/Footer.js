import { Fragment } from "react";
import './Footer.css';
import Logo from '../../media/TodoLogo.png';

const Footer = (props) => {
    return (
        <Fragment>
            <div className="container-F">
                <div>
                    <img src={Logo} className="logo-home" onClick={props.onHomeClick} width="50px" height="40px" alt="logo" ></img>&nbsp;
                    {/* <a className="navbar-brand brand-color linkss" onClick={props.onHomeClick} >Do.It</a><br /> */}
                    <button className="navbar-brand brand-color linkss feature__btn" onClick={props.onHomeClick}>Do.It</button><br />
                    Join millions of people who organize their work effectively with Do.It
                </div>
                <div>
                    <div className="space-item"><button onClick={props.onFeatureClick} className="feature__btn footer_btn_color">Features</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">How It Works</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">For Teams</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Templates</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Refer a Friend</button> </div>

                </div>
                <div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Resources</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Productivity Methods</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Integrations</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Partners</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Help Center</button> </div>
                </div>
                <div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Company</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">About US</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">We are Hiring!</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Blog</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color">Press</button> </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Footer;