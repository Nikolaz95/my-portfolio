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
                    <h3 className='text-AboutMe'>Mitt namn är Nikola Zovko .</h3>
                    <p className='text-AboutMe'>Jag tog studentexamen i juni förra året och har sedan dess byggt på mina kunskaper genom en framgångsrik praktikperiod som Frontend-utvecklare på Wacoco AB. Sedan juni förra år har jag arbetat med moderna tekniker och verktyg, samtidigt som jag har utvecklat min förmåga att samarbeta i team och leverera lösningar som möter användarnas behov .</p>
                    <p className='text-AboutMe'>Mitt största intresse ligger inom Frontend-utveckling, med ett särskilt fokus på att bygga funktionella och effektiva applikationer med React JS. Jag är passionerad av att utveckla robusta och skalbara lösningar som förbättrar användarupplevelsen. Samtidigt har jag en god förståelse för designprinciper och användarvänlighet, vilket gör att jag kan skapa både tekniskt avancerade och visuellt tilltalande produkter .</p>
                    <p className='text-AboutMe'>Jag söker nu en möjlighet att använda mina kunskaper och erfarenheter i en ny utmanande roll, där jag kan fortsätta att växa och bidra till framgångsrika projekt .</p>

                    <p className='text-AboutMe'>Jag är en lagspelare som trivs med att samarbeta och lösa problem tillsammans med andra. Jag är även van att arbeta självständigt och tar gärna ansvar för att nå uppsatta mål .</p>
                    <p className='text-AboutMe'>Jag ser fram emot att höra mer om hur jag kan bidra till ert team och ert företag !</p>



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
