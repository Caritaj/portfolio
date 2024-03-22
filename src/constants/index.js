import {
    starbucks,
    tesla,
    ica,
    minam,
    fondo1,
    fondo2,
    fondo3,
    proj2
} from "../assets";


const experiences = [

    {
        title: "Asistente Desarollador Web Frontend",
        company_name: "Sotech",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "Enero 2023 - Abril 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Desarrollador FullStack",
        company_name: "Gnsis",
        icon: starbucks,
        iconBg: "#383E56",
        date: "Mayo 2023 - Julio 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Asistente Desarollador Web Frontend",
        company_name: "Caja Ica",
        icon: ica,
        iconBg: "#383E56",
        date: "Agosto 2023 - Diciembre 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Practicante Profesional",
        company_name: "Ministerio del Ambiente",
        icon: minam,
        iconBg: "#E6DEDD",
        date: "Octubre 2022 - Presente",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const menuItems = [
    {
        id: 1,
        title: 'Home',
        link: '#home'
    },
    {
        id: 2,
        title: 'About',
        link: '#about'
    },
    {
        id: 3,
        title: 'Work',
        link: '#work'
    },
    {
        id: 4,
        title: 'Experience',
        link: '#experience'
    },
    {
        id: 5,
        title: 'Contact',
        link: '#contact'
    },
]

const work = [
    {
        id: 1,
        title: 'data table',
        link: 'https://sinia.minam.gob.pe/portal/dialogos-socioambientales/',
        image: fondo3,
        class: 'group h-48 overflow-hidden rounded-lg shadow-lg md:h-80',
    },
    {
        id: 2,
        title: 'sinia',
        link: 'https://sinia.minam.gob.pe/',
        image: fondo1,
        class: 'group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'
    },
    {
        id: 3,
        title: 'caja ica',
        link: 'https://workflowproject.vercel.app/',
        image: fondo2,
        class: 'group h-48 overflow-hidden rounded-lg shadow-lg md:col-span-2 md:h-80'
    },
    {
        id: 4,
        title: 'gnsis',
        link: 'https://github.com/Caritaj',
        image: proj2,
        class: 'group h-48 overflow-hidden rounded-lg shadow-lg md:h-80',
    }
]

export { experiences, menuItems, work };