import React, { useEffect, useRef } from 'react'


//import css
import "./NavBar.css"

//import pictures
import Html from '../assets/images/icons-html.png';
import Css from '../assets/images/icons-css3.png';
import JavaScript from '../assets/images/icon-JavaScript.gif';
import ReactJS from '../assets/images/icons-ReactJs.gif';
import ReactNative from '../assets/images/icons-react-native.png';
import GitHub from '../assets/images/icon-github.png';
import GitBash from '../assets/images/icons-git.png';
import Figma from '../assets/images/icon-Figma.gif';
import NodeJS from '../assets/images/icon-nodejs.png';
import MongoDb from '../assets/images/mongodb.png';
import PostMan from '../assets/images/icon-postman.png';
import MaterialU from '../assets/images/material-UI.png';

//import icon react
import { IoIosArrowForward } from "react-icons/io";

const NavBar = ({ scrollToAboutMe, scrollToTimeline, scrollToMyWork, scrollToContact, showDropdown, setShowDropdown, isSideMenuOpen, setOpenSideMenu }) => {
    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('sidebar-active');
        } else {
            document.body.classList.remove('sidebar-active');
        }
    }, [isSideMenuOpen]);


    /* klick outside to close */

    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                // Use the received `setOpenSideMenu` prop to update state
                setOpenSideMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef, setOpenSideMenu]);



    return (
        <div>
            <div className={`navbar ${isSideMenuOpen ? 'active' : 'close'}`} ref={menuRef}>
                <ul>
                    <li>Home</li>
                    <li onClick={scrollToAboutMe}>About Me</li>
                    <li onClick={() => setShowDropdown(!showDropdown)}>My skills <IoIosArrowForward className={showDropdown ? "arrowDrp rotatedArrow" : "arrowDrp"} /></li>
                    {showDropdown && (

                        <div className="dropdown-content">
                            <p>Html<img src={Html} alt="" className='mySkils-icon' title="Html 5" /></p>
                            <p>Css<img src={Css} alt="" className='mySkils-icon' title="Css 3" /></p>
                            <p>JavaScript<img src={JavaScript} alt="" className='mySkils-icon' title="JavaScript" /></p>
                            <p>React Js<img src={ReactJS} alt="" className='mySkils-icon' title="React Js" /></p>
                            <p>React Native<img src={ReactNative} alt="" className='mySkils-icon' title="React Native" /></p>
                            <p>Git Hub<img src={GitHub} alt="" className='mySkils-icon' title="Git Hub" /></p>
                            <p>Git Bash<img src={GitBash} alt="" className='mySkils-icon' title="Git Bash" /></p>
                            <p>Figma<img src={Figma} alt="" className='mySkils-icon' title="Figma" /></p>
                            <p>Node JS<img src={NodeJS} alt="" className='mySkils-icon' title="Node JS" /></p>
                            <p>MongoDB<img src={MongoDb} alt="" className='mySkils-icon' title="MongoDB" /></p>
                            <p>PostMan<img src={PostMan} alt="" className='mySkils-icon' title="PostMan" /></p>
                            <p>Material UI<img src={MaterialU} alt="" className='mySkils-icon' title="Material UI" /></p>
                        </div>

                    )}
                    <li onClick={scrollToTimeline}>Timeline</li>
                    <li onClick={scrollToMyWork}>My work</li>
                    <li onClick={scrollToContact}>Contact me</li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar
