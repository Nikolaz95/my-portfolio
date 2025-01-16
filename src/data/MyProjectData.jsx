

//img projekts
import Projekt0 from '../assets/work-img/myPortfolio.png';
import Projekt1 from '../assets/work-img/work-5.png';
import Projekt2 from '../assets/work-img/Task-Todo-RJ.png';
import Projekt3 from '../assets/work-img/Fast-Pizza.png';
import Projekt4 from '../assets/work-img/work-6.png';
import Projekt5 from '../assets/work-img/Country-App.png';
import Projekt6 from '../assets/work-img/Space-Tourism .png';
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
import supaBase from '../assets/images/icon-supabase.png';
import rjQuery from '../assets/images/reactqury.png';
import storybook from '../assets/skill-img/Storybook.png';


const MyProjectData = [
    {
        id: 0,
        title: "My Portfolio",
        ImgProject: Projekt0,
        description: "My Portfolio project",
        skills: [Html, Css, JavaScript, ReactNative],
        demo: "https://nikolazovko-portfolio.netlify.app/",
        source: "https://github.com/Nikolaz95/my-portfolio"
    },
    {
        id: 1,
        title: "Chat App, React Native",
        ImgProject: Projekt1,
        description: "The possibility of creating a personal account, Log in, Log Out. Chat with others in real time. Possibility of changing the username, password and deleting the existing account. It is also possible to set a picture for the profile.",
        skills: [Html, Css, JavaScript, ReactNative],
        demo: "https://github.com/Nikolaz95/Chat-app",
        source: "https://github.com/Nikolaz95/Chat-app"
    },
    {
        id: 2,
        title: "Task To-Do, React JS",
        ImgProject: Projekt2,
        description: "Task To-Do, ReactJS App with Local Storage. You can store all your Tasks.",
        skills: [Html, Css, JavaScript, ReactJS],
        demo: "https://task-to-do-nikolazovko.netlify.app/",
        source: "https://github.com/Nikolaz95/todoRJ"
    },
    {
        id: 3,
        title: "Fast Pizza RJ",
        ImgProject: Projekt3,
        description: "React js APP with React Redux. ",
        skills: [JavaScript, ReactJS, rjRedux],
        demo: "https://fast-pizzarj.netlify.app/",
        source: "https://github.com/Nikolaz95/fast-pizza"
    },
    {
        id: 4,
        title: "Hotel Wild Oasis",
        ImgProject: Projekt4,
        description: "Full stack application, worked with Supabase database, Styled Components, React Quary. It is possible to create your own account, update it and also delete it. We can also make accommodation reservations, update and delete cabins in the application. We can see the attendance in the past days.",
        skills: [ReactJS, rjRedux, supaBase, rjQuery],
        demo: "https://nzhotel-wild-oasis-git-main-nikolas-projects-d50df3a6.vercel.app/login",
        source: "https://github.com/Nikolaz95/hotel-wildOasis"
    },
    {
        id: 5,
        title: "Country App",
        ImgProject: Projekt5,
        description: "If you're wanting to test your JavaScript skills this is the challenge for you. Use whichever JS framework you prefer and pull data from the REST Countries API.",
        skills: [Html, Css, JavaScript, ReactJS],
        demo: "https://react-js-country-app-git-main-nikolas-projects-d50df3a6.vercel.app/",
        source: "https://github.com/Nikolaz95/ReactJS-CountryApp/tree/main"
    },

    {
        id: 6,
        title: "Space tourism",
        ImgProject: Projekt6,
        description: "This project is a fun collaboration with Scrimba and Kevin Powell! If you like, you can follow along and watch Kevin complete the project on Scrimba.",
        skills: [Html, Css, JavaScript, ReactJS],
        demo: "https://space-tourism-ashy-eta.vercel.app/",
        source: "https://github.com/Nikolaz95/Space-Tourism/tree/main"
    },

    {
        id: 7,
        title: "Coming Soon",
        ImgProject: ComingSoon,
        description: "Description for another project...",
        skills: [],
        demo: "",
        source: "https://github.com/Nikolaz95"
    },
]

export default MyProjectData
