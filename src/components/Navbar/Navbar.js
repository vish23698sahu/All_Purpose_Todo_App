import { Fragment } from "react";
import { Link } from "react-router-dom";
import Logo from '../../media/TodoLogo.png';
import './Navbar.css';

const Navbar = () => {
    return (
        <Fragment>
            <div className="brand-color">
                <nav className="navbar navbar-expand-lg nav-width" >
                    <Link to='/'>
                        <img src={Logo} className="logo-home" width="40px" alt="logo"></img>&nbsp;
                        <button className="navbar-brand brand-color linkss feature__btn" >Do.It</button>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse navbar-inverse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to='/features' className="nav-link brand-color linkss feature__btn">Features</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/templates' className="nav-link brand-color linkss feature__btn">Templates</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="my-2 my-lg-0 search-width">
                        <Link to='/login' className="nav-link brand-color linkss my-2 space-search feature__btn">Login</Link>
                        <button className="btn btn-primary navbar__btn my-2" type="submit">Start&nbsp;for&nbsp;Free</button>
                    </div>
                </nav>
            </div >
        </Fragment >
    );
};

export default Navbar;