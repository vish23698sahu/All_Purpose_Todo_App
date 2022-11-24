import { Fragment } from "react";
import Logo from '../../media/TodoLogo.png';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <Fragment>
            <div className="brand-color">
                <nav className="navbar navbar-expand-lg nav-width" >
                    <img src={Logo} className="logo-home" onClick={props.onClickHome} width="40px" alt="logo"></img>&nbsp;
                    <button className="navbar-brand brand-color linkss feature__btn" onClick={props.onClickHome}>Do.It</button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-inverse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <button className="nav-link brand-color linkss feature__btn" onClick={props.onClickFeatures}>Features</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link brand-color linkss feature__btn" onClick={props.onClickTemplate}>Templates</button>
                            </li>
                        </ul>
                    </div>
                    <div className="my-2 my-lg-0 search-width">
                        <button className="nav-link brand-color linkss my-2 space-search feature__btn" onClick={props.onLogin}>Login</button>
                        <button className="btn btn-primary navbar__btn my-2" type="submit">Start&nbsp;for&nbsp;Free</button>
                    </div>
                </nav>
            </div >
        </Fragment >
    );
};

export default Navbar;