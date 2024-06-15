
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
        title: "Bilmekaniker",
        location: "Zepce, Bosnien och Hercegovina",
        description:
            "Converting data to a graphical interface, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that data.",
        date: "2010-2013",
        icon: "school",
    },
    {
        id: 1,
        title: "Snickare",
        location: "Stockholm, Sverige",
        description: "Rivning av rör, vattenledningar, tidigare installationer samt byggnader. Demontering av vattencentral. Bygga altan. Renovera kök.",
        date: "2015 – 2016",
        icon: "work",
    },
    {
        id: 2,
        title: "Snickare",
        location: "Stockholm, Sverige",
        description: "Rivning av rör, vattenledningar, tidigare installationer samt byggnader. Demontering av vattencentral. Bygga altan. Renovera kök.",
        date: "2015 – 2016",
        icon: "work",
    },
    {
        id: 3,
        title: "VVS-montör och Snickare",
        location: "Stockholm, Sverige",
        description:
            "VVS-montering, riv, sanering. Montering av rör, förberedningar inför svets.",
        date: "2018 Oktober – 2019 August",
        icon: "work",
    },
    {
        id: 4,
        title: "Frontendutvecklare",
        location: "Jensen Yrkeshögskola Stockholm, Sverige",
        description:
            "College - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
        date: "2022 August - 2024 Juni",
        icon: "school",
    },
    {
        id: 5,
        title: "Frontendutvecklare, Lia Praktik",
        location: "Stockholm, Sverige",
        description:
            "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
        date: "2023 November - 2024 Maj",
        icon: "work",
    },
];

export default timelineData;