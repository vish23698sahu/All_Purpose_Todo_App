import { Fragment } from "react";
import './Footer.css';
import Logo from '../../media/TodoLogo.png';

const Footer = (props) => {
    return (
        <Fragment>
            <div className="container-F">
                <div className="footer__one">
                    <img src={Logo} className="logo-home" onClick={props.onHomeClick} width="50px" height="40px" alt="logo" ></img>&nbsp;
                    <button className="navbar-brand brand-color linkss feature__btn f_btn_align" onClick={props.onHomeClick}>Do.It</button><br />
                    Join millions of people who organize their work effectively with Do.It
                </div>
                <div>
                    <div className="space-item"><button onClick={props.onFeatureClick} className="feature__btn footer_btn_color f_btn_align">Features</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">How It Works</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">For Teams</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Templates</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Refer a Friend</button> </div>
                </div>
                <div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Resources</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Productivity Methods</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Integrations</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Partners</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Help Center</button> </div>
                </div>
                <div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Company</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">About US</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">We are Hiring!</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Blog</button> </div>
                    <div className="space-item"><button className="feature__btn footer_btn_color f_btn_align">Press</button> </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Footer;