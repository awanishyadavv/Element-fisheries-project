import React, { useEffect, useState } from "react";
import './Navbar.css';
import { Link } from 'react-router-dom';
import NavLinks from "./NavLinks";
import Parameter from "../ParameterDropdown/Parameter";


const Navbar = () => {
    const [state, setState] = useState(true);
    const toggleMenu = () => {
        setState(prevState => !prevState);
    }
 

    return (
        <>
        <nav className='navbar'>
            <div className='logo'>
                {/* <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="" /> */}
            </div>
            {state ? (
                <>
                    <ul className='nav-links'>
                        <Link to="/" className='nav-link'>Control</Link>
                        <Link to="/Devices" className='nav-link'>Devices</Link>
                        <Link to="/marketplace" className='nav-link'>MarketPlace</Link>
                    </ul >
                    <Parameter/>
                    <div className='menu-icon' onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </>
            ) : (
                <>
                <NavLinks toggleMenu={toggleMenu}/>
                </>
            )}
        </nav>
        </>
    );
}

export default Navbar;