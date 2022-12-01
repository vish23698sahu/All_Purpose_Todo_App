import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import Logo from '../../media/TodoLogo.png';
import './Navbar.css';

const Navbar = () => {
    const [mobile, setMobile] = useState(false);

    return (
        <Fragment>
            <div className="brand-color">
                <nav className="navbar nav-width">
                    <div className="logo-1" >
                        <Link to='/' className="navbar-brand linkss feature__btn">
                            <img src={Logo} width="40px" className="login__img" alt='Logo Todo App' ></img>&nbsp; <span className="login__logo">Do.It</span>
                        </Link>
                    </div>
                    <ul className={mobile ? "nav-links-mobile" : "nav-links"}
                        onClick={() => setMobile(false)}
                    >
                        <Link to='/' className='home'>
                            <li>Home</li>
                        </Link>
                        <Link to='/features' className='features'>
                            <li>Features</li>
                        </Link>
                        <Link to='/templates' className='templates'>
                            <li>Templates</li>
                        </Link>
                        <Link to='/startFree' className='startFree '>
                            <li>Start for Free</li>
                        </Link>
                        <Link to='/login' className='login btn btn-primary navbar__btn'>
                            <li>Login</li>
                        </Link>
                    </ul>
                </nav>
                <button className="mobile-toggle-bar" onClick={() => { setMobile(!mobile) }}>
                    {
                        mobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>
                    }
                </button>
            </div >
        </Fragment >
    );
};

export default Navbar;