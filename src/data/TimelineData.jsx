
import Work from '../assets/icon/icon-worK.png';
import School from '../assets/icon/icon-school.png';

const WorkIcon = () => (
    <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '5px' }}>
        <img src={Work} alt="My Icon" style={{ width: '100%', height: '100%' }} />
    </div>
);
const SchoolIcon = () => (
    <div style={{ backgroundColor: 'white', borderRadius: '50%', padding: '5px' }}>
        <img src={School} alt="My Icon" style={{ width: '100%', height: '100%' }} />
    </div>
);


let timelineData = [
    {
        id: 0,
        title: "Frontendutvecklare",
        location: "Jensen Yrkeshögskola Stockholm, Sverige",
        description:
            "Under våra studier på Jensen Yrkeshögskola Stockholm stötte vi först på HTML och CSS. Vi lärde oss även programmering i JavaScript. I JavaScript lärde vi oss att programmera och manipulera DOM. Vi lärde oss också webbdesign UX/UI med Figma. Sedan började vi programmera i React js och React Native",
        date: "2022 August - 2024 Juni",
        icon: "school",
    },
    {
        id: 1,
        title: "Frontendutvecklare, Lia Praktik",
        company: "Gardeco Datasystem AB",
        location: "Stockholm, Sverige",
        description:
            "During my internship at Gardeco Datasystem AB, I worked on a checkout system. I worked with Html, Css, React Js, NodeJS and MongoDB. I also worked on a server that contained product data, purchase history and club members.",
        date: "2023 November - 2024 Maj",
        icon: "work",
    },
    {
        id: 2,
        title: "Frontendutvecklare, Intership",
        company: "Wacoco AB",
        location: "Stockholm, Sverige",
        description:
            "During my internship at Wacoco HQ AB, Working on wacoco website ReactJS and React node. Working on React js components and Patterns.",
        date: "2024 Juni - ",
        icon: "work",
    },
];

export default timelineData;