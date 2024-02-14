import React, { useState } from 'react'

//import css
import "./Header.css"
import NavBar from './NavBar';
//import pictures
import Logo from '../assets/images/logo-developer.gif';
//import icon react
import { IoIosArrowForward } from "react-icons/io";

const Header = ({ scrollToAboutMe, scrollToMyWork, scrollToContact }) => {

    const [showDropdown, setShowDropdown] = useState(false);
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);


    const toggleSideMenu = () => {
        console.log('Toggling side menu');
        setIsSideMenuOpen(!isSideMenuOpen);
    };


    return (
        <header>
            <div className="content-header">
                <img src={Logo} alt="" />
                <div className="header-left">
                    <NavBar
                        showDropdown={showDropdown}
                        setShowDropdown={setShowDropdown}
                        isSideMenuOpen={isSideMenuOpen}
                        setIsSideMenuOpen={setIsSideMenuOpen}
                        scrollToAboutMe={scrollToAboutMe}
                        scrollToMyWork={scrollToMyWork}
                        scrollToContact={scrollToContact} />
                </div>
                <div className={`ham-menu ${isSideMenuOpen ? 'active' : ''}`} onClick={toggleSideMenu}>
                    <span className="bar1"></span>
                    <span className="bar2"></span>
                    <span className="bar3"></span>
                </div>
            </div>
        </header>
    )
}

export default Header
