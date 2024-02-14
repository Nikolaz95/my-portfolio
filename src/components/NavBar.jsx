import React, { useEffect } from 'react'


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

//import icon react
import { IoIosArrowForward } from "react-icons/io";

const NavBar = ({ showDropdown, setShowDropdown, isSideMenuOpen, }) => {
    useEffect(() => {
        if (isSideMenuOpen) {
            document.body.classList.add('sidebar-active');
        } else {
            document.body.classList.remove('sidebar-active');
        }
    }, [isSideMenuOpen]);


    return (
        <div>
            <div className={`navbar ${isSideMenuOpen ? 'active' : 'close'}`}>
                <ul>
                    <li>Home</li>
                    <li /* onClick={scrollToAboutMe} */>About Me</li>
                    <li onClick={() => setShowDropdown(!showDropdown)}>My skills <IoIosArrowForward className={showDropdown ? "arrowDrp rotatedArrow" : "arrowDrp"} /></li>
                    {/* <IoIosArrowForward className={showDropdown ? "arrowDrp rotatedArrow" : "arrowDrp"} /> */}
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
                        </div>

                    )}
                    <li /* onClick={scrollToMyWork} */>My work</li>
                    <li /* onClick={scrollToContact} */>Contact me</li>
                </ul>
            </div>

        </div>
    )
}

export default NavBar
