import React from 'react'


//img projekts
import Projekt1 from '../assets/work-img/work-5.png';
import Projekt2 from '../assets/work-img/work-1.png';

// skils img 
import Html from '../assets/images/icons-html.png';
import Css from '../assets/images/icons-css3.png';
import JavaScript from '../assets/images/icon-JavaScript.gif';
import ReactJS from '../assets/images/icons-ReactJs.gif';
import ReactNative from '../assets/images/icons-react-native.png';
import GitHub from '../assets/images/icon-github.png';
import GitBash from '../assets/images/icons-git.png';
import Figma from '../assets/images/icon-Figma.gif';

const MyProjectData = [
    {
        id: 0,
        title: "Chat App React Native",
        ImgProject: Projekt1,
        description: "The possibility of creating a personal account, Log in, Log Out. Chat with others in real time. Possibility of changing the username, password and deleting the existing account. It is also possible to set a picture for the profile.",
        skills: [Html, Css, JavaScript, ReactNative],
        demo: "https://github.com/Nikolaz95/Chat-app",
        source: "https://github.com/Nikolaz95/Chat-app"
    },
    {
        id: 1,
        title: "Coming Soon",
        ImgProject: Projekt2,
        description: "Description for another project...",
        skills: [Html, Css, JavaScript],
        demo: "",
        source: "https://github.com/Nikolaz95/Another-project"
    },
    {
        id: 2,
        title: "Coming Soon",
        ImgProject: Projekt2,
        description: "Description for another project...",
        skills: [Html, Css, JavaScript],
        demo: "",
        source: "https://github.com/Nikolaz95/Another-project"
    },
    {
        id: 3,
        title: "Coming Soon",
        ImgProject: Projekt2,
        description: "Description for another project...",
        skills: [Html, Css, JavaScript],
        demo: "",
        source: "https://github.com/Nikolaz95/Another-project"
    },
    {
        id: 4,
        title: "Coming Soon",
        ImgProject: Projekt2,
        description: "Description for another project...",
        skills: [Html, Css, JavaScript],
        demo: "",
        source: "https://github.com/Nikolaz95/Another-project"
    },
]

export default MyProjectData
