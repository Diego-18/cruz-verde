import { logo, back, netux } from '../../assets/img/img.jsx';
import { Link, useLocation } from "react-router-dom";
import './Navbar.css';

export default function Navbar(props) {
    const location = useLocation();

    return (
        props.NavStyle === "1" ? (
            <nav className='cstm-navbar'>
                <div className="container-logo">
                    <img className="logo" src={logo} alt="Cruz verde Logo" />
                </div >
            </nav>
        ) : (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <div className="container-logo">
                        <img className="logo" src={logo} alt="Cruz verde Logo" />
                    </div >
                    <div className="navbar-collapse" id="navbarSupportedContent">
                        <div className="section-back">
                            <a href="/" className='label-back'>
                                <img src={back} alt="back" className="back" />
                                Atras
                            </a>
                        </div>
                        <div className='section-steps'>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className={location.pathname === "/s1" ? " nav-item active" : "nav-item"}>
                                    <Link className='nav-link' to="/s1">1</Link>
                                </li>
                                <li className={location.pathname === "/s2" ? " nav-item active" : "nav-item"}>
                                    <Link className='nav-link' to="/s2">2</Link>
                                </li>
                                <li className={location.pathname === "/s3" ? "nav-item active" : "nav-item"}>
                                    <Link className='nav-link' to="/s3">3</Link>
                                </li>
                                <li className={location.pathname === "/s4" ? " nav-item active" : "nav-item"}>
                                    <Link className='nav-link' to="/s3">4</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img className="logo-2" src={netux} alt="Logo-netux" />
                </div >
            </nav >
        )
    );
}