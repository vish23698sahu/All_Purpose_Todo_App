import { Fragment } from "react";
import Logo from '../../media/TodoLogo.png';
import './Navbar.css';

const Navbar = (props) => {
    return (
        <Fragment>
            <div className="brand-color">
                <nav className="navbar navbar-expand-lg nav-width" >
                    <img src={Logo} className="logo-home" onClick={props.onClickHome} width="40px" height="50px" alt="logo"></img>&nbsp;
                    <a href="#" className="navbar-brand brand-color linkss" onClick={props.onClickHome}>Do.It</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-inverse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a href="#" className="nav-link brand-color linkss" onClick={props.onClickFeatures} >Features </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link brand-color linkss" onClick={props.onClickTemplate}>Templates</a>
                            </li>
                        </ul>
                    </div>
                    <div className="my-2 my-lg-0 search-width">
                        <a href="#" className="nav-link brand-color linkss my-2 space-search" onClick={props.onLogin}>Login</a>
                        <button className="btn btn-primary my-2" type="submit">Start&nbsp;for&nbsp;Free</button>
                    </div>
                </nav>
            </div >
        </Fragment >
    );
};

export default Navbar;