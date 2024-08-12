import React, {useState, useEffect} from 'react';
import './Navbar.css';
import Logo from '../../assets/FP-Logo.png';
import Menu from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';


const Navbar = () => {

    const [isFixed, setIsFixed]=useState(false);
    const [mobileMenu, setMobileMenu]=useState(false);

    useEffect(()=> {
        window.addEventListener('scroll', ()=> {
            window.scrollY > 50 ? setIsFixed(true) : setIsFixed(false);
        })
    },[]);

    const toggleMenu =()=> {
        mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`container ${isFixed ? "nav-color" : ""}`}>
            <img src={Logo} alt="logo" className="mylogo"/>

            <ul className={mobileMenu?"" : "mobile-menu"}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='programs' smooth={true} offset={-260} duration={500}>Programs</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campagn' smooth={true} offset={-260} duration={500}>Campaign</Link></li>
                <li><Link to='teamMembers' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact</Link></li>
            </ul>
            <img src={Menu} alt="menu-icon" className="menu-icon" onClick={toggleMenu}/>
        </nav>
    );
};

export default Navbar;
