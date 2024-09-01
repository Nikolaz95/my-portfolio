import React from 'react'


//img projekts
import Projekt1 from '../assets/work-img/work-5.png';
import Projekt2 from '../assets/work-img/Task-Todo-RJ.png';
import Projekt3 from '../assets/work-img/Fast-Pizza.png';
import ComingSoon from '../assets/work-img/work-1.png';

// skils img 
import Html from '../assets/images/icons-html.png';
import Css from '../assets/images/icons-css3.png';
import JavaScript from '../assets/images/icon-JavaScript.gif';
import ReactJS from '../assets/images/icons-ReactJs.gif';
import ReactNative from '../assets/images/icons-react-native.png';
import GitHub from '../assets/images/icon-github.png';
import GitBash from '../assets/images/icons-git.png';
import Figma from '../assets/images/icon-Figma.gif';
import TailwindCss from '../assets/images/tailwind-css.png';
import rjRedux from '../assets/images/redux.png';


const MyProjectData = [
    {
        id: 0,
        title: "Chat App, React Native",
        ImgProject: Projekt1,
        description: "The possibility of creating a personal account, Log in, Log Out. Chat with others in real time. Possibility of changing the username, password and deleting the existing account. It is also possible to set a picture for the profile.",
        skills: [Html, Css, JavaScript, ReactNative],
        demo: "https://github.com/Nikolaz95/Chat-app",
        source: "https://github.com/Nikolaz95/Chat-app"
    },
    {
        id: 1,
        title: "Task To-Do, React JS",
        ImgProject: Projekt2,
        description: "Task To-Do, ReactJS App with Local Storage. You can store all your Tasks.",
        skills: [Html, Css, JavaScript, ReactJS],
        demo: "https://task-to-do-nikolazovko.netlify.app/",
        source: "https://github.com/Nikolaz95/todoRJ"
    },
    {
        id: 2,
        title: "Fast Pizza RJ",
        ImgProject: Projekt3,
        description: "React js APP with React Redux. ",
        skills: [JavaScript, ReactJS, rjRedux],
        demo: "https://fast-pizzarj.netlify.app/",
        source: "https://github.com/Nikolaz95/fast-pizza"
    },
    {
        id: 3,
        title: "Coming Soon",
        ImgProject: ComingSoon,
        description: "Description for another project...",
        skills: [],
        demo: "",
        source: "https://github.com/Nikolaz95"
    },
    {
        id: 4,
        title: "Coming Soon",
        ImgProject: ComingSoon,
        description: "Description for another project...",
        skills: [],
        demo: "",
        source: "https://github.com/Nikolaz95"
    },
]

export default MyProjectData
