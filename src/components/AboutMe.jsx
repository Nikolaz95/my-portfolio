import React from 'react'


//import css
import "./AboutMe.css"

//import pic
import Ja from '../assets/images/ja1.png';
/* import LinkeDin from '../assets/images/icon-linkedin.png';
import Gmail from '../assets/images/icon-gmail.png';
import GitHub from '../assets/images/icon-github.png'; */

import Html from '../assets/images/icons-html.png';
import Css from '../assets/images/icons-css3.png';
import JavaScript from '../assets/images/icon-JavaScript.gif';
import ReactJS from '../assets/images/icons-ReactJs.gif';
import ReactNative from '../assets/images/icons-react-native.png';
import Figma from '../assets/images/icon-Figma.gif';
import NodeJS from '../assets/images/icon-nodejs.png';
import MongoDb from '../assets/images/mongodb.png';
import PostMan from '../assets/images/icon-postman.png';
import MaterialUI from '../assets/images/material-UI.png';





const AboutMe = ({ aboutMeRef }) => {
    return (
        <main className="main-AboutContent" ref={aboutMeRef}>
            <div className="aboutMe-mainContent">
                <div className="aboutMe-left">
                    <img src={Ja} alt="here should be a image" className='profile-img' />
                </div>

                <div className="aboutMContent-right">
                    <h1 className='title-AboutMe'>About me</h1>
                    <p className='text-AboutMe'>Mitt namn är Nikola Zovko. Jag är en driven student som strävar efter att lära sig nya saker
                        varje dag. Jag har stor interesse inom Frontendutvecklare och jag tror att jag är rätt person
                        för en praktikplats på ert företag. Dessutom är jag en lagspelare som trivs med att samarbeta
                        med andra för att nå gemensamma mål.
                    </p>


                    <div className="myskills-content">
                        <h1 className='title-MySkills'>My skills:</h1>

                        <div className="mySkills">
                            <div className="linkbox">
                                <img src={Html} alt="" className='skils-icon' title="Html 5" />
                            </div>
                            <div className="linkbox">
                                <img src={Css} alt="" className='skils-icon' title="Css 3" />
                            </div>
                            <div className="linkbox">
                                <img src={JavaScript} alt="" className='skils-icon' title="JavaScript" />
                            </div>

                            <div className="linkbox">
                                <img src={ReactJS} alt="" className='skils-icon' title="React Js" />
                            </div>

                            <div className="linkbox">
                                <img src={ReactNative} alt="" className='skils-icon' title="React Native" />
                            </div>

                            <div className="linkbox">
                                <img src={Figma} alt="" className='skils-icon' title="Figma" />
                            </div>

                            <div className="linkbox">
                                <img src={NodeJS} alt="" className='skils-icon' title="Node JS" />
                            </div>

                            <div className="linkbox">
                                <img src={MongoDb} alt="" className='skils-icon' title="Mongo DB" />
                            </div>

                            <div className="linkbox">
                                <img src={PostMan} alt="" className='skils-icon' title="PostMan" />
                            </div>

                            <div className="linkbox">
                                <img src={MaterialUI} alt="" className='skils-icon' title="Material UI" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe
