import './NavLinks.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Parameter from '../ParameterDropdown/Parameter';

const NavLinks = ({ toggleMenu }) => {
    return (
        <div className="menu-slider">
            <span class="close" onClick={toggleMenu}>&times;</span>
            <ul className='nav-links-in-slider' onClick={toggleMenu}>
                <Link to="/Devices" className='nav-link-slider'>Devices</Link>
                <Link to="/marketplace" className='nav-link-slider'>MarketPlace</Link>
                <Link to="/learning" className='nav-link-slider'>Learning</Link>
                <Link to="/buletten" className='nav-link-slider'>Buletten</Link>
                <Link to="/Contactus" className='nav-link-slider'>ContactUs</Link>
                <Link to="/aboutus" className='nav-link-slider'>AboutUs</Link>
            </ul>
        </div>
    );
}

export default NavLinks;