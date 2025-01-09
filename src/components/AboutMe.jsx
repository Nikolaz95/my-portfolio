import React from 'react'


//import css
import "./AboutMe.css"

//impor data

import dataSkills from "../data/MySkills"

//import pic
import Ja from '../assets/images/ja1.png';




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
                            {dataSkills.map((skills) => (
                                <div className="linkbox" key={skills.id}>
                                    <img src={skills.skillImg} alt={skills.title} className='skils-icon' title={skills.title} />
                                </div>
                            ))}


                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AboutMe
