import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'


//import pic
import Ja from '../assets/images/ja1.png';
import LinkeDin from '../assets/images/icon-linkedin.png';
import Gmail from '../assets/images/icon-gmail.png';
import GitHub from '../assets/images/icon-github.png';


//import css
import "./Content.css"

const Content = () => {
    const [text] = useTypewriter({
        words: [' Frontend Utvecklare', ' Webbdesigner'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40,
    })
    return (
        <main className="main-content">
            <div className="tekst left-content">
                <p className='anime-tekst'>Hej test</p>
                <p className='anime-tekst'>Jag heter Nikola Zovko</p>
                <div className='tekstAnime'>
                    <span className='anime-tekst'>Jag är<span>{text}
                        <span><Cursor cursorStyle="|"></Cursor> </span>
                    </span></span>
                </div>

                <div className="social-media">
                    <div className="linkbox">
                        <a href="https://www.linkedin.com/in/nikola-zovko-a50779247/" target='_blank'>
                            <img src={LinkeDin} alt="" className='socialMedia-icon' title="Linkedin" />
                        </a>
                    </div>
                    <div className="linkbox">
                        <a href="mailto:nikolajoe95@gmail.com" target='_blank'>
                            <img src={Gmail} alt="" className='socialMedia-icon' title="Gmail" />
                        </a>
                    </div>
                    <div className="linkbox">
                        <a href="https://github.com/Nikolaz95" target='_blank'>
                            <img src={GitHub} alt="" className='socialMedia-icon' title="Git Hub" />
                        </a>
                    </div>
                </div>
            </div>


            <img src={Ja} alt="here should be a image" className='profile-img' />
        </main>
    )
}

export default Content
