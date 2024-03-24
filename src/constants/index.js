import {
    tesla,
    ica,
    minam,
    fondo1,
    fondo2,
    fondo3,
    fondo4,
    gnsis,
    angular,
    css,
    docker,
    figma,
    git,
    html,
    javascript,
    nodejs,
    reactjs,
    redux,
    tailwind,
    typescript,
} from "../assets";


const experiences = [

    {
        title: "Front End Web Developer Assistant",
        company_name: "Sotech",
        icon: tesla,
        iconBg: "#E6DEDD",
        date: "January 2023 - April 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "FullStack Developer Assistant",
        company_name: "Gnsis",
        icon: gnsis,
        iconBg: "#383E56",
        date: "May 2023 - July 2023",
        points: [
            "Product stock management was improved through the implementation of product series, to have greater control over the products that are bought, sold and transferred between warehouses and stores.",
            "The MySQL database was created and redesigned to adapt the requirement.",
            "Updates and creation of new services were developed in the back with PHP 7.",
            "The interfaces were redesigned, as well as the creation of new interfaces with Javascript, Ext JS and CSS.",
        ],
    },
    {
        title: "Front End Web Developer Assistant",
        company_name: "Caja Ica",
        icon: ica,
        iconBg: "#383E56",
        date: "August 2023 - March 2024",
        points: [
            "Design and creation of user interfaces for the workflow platform.",
            "Angular 12 and Tailwind to develop interactive and stylized components that integrate with the rest of the platform.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "UI integration with REST API.",
        ],
    },
    {
        title: "Professional practitioner",
        company_name: "Ministry of the Environment",
        icon: minam,
        iconBg: "#E6DEDD",
        date: "October 2022 - Present",
        points: [
            "An interactive tool was created to visualize statistical indicators by themes and departments of Peru in the SINIA.",
            "Angular 15 and Sass to design and create user interfaces",
            "Design and creation of web pages in Drupal 9 with HTML5, CSS & Javascript",
            "Design and creation of web pages (portals) with Wordpress.",
            "INEA update (National Environmental Policy added) with PHP. Design and form with HTML5 & Sass."
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
        title: 'Tech',
        link: '#tech'
    },
    {
        id: 5,
        title: 'Experience',
        link: '#experience'
    },
    {
        id: 6,
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
        image: fondo4,
        class: 'group h-48 overflow-hidden rounded-lg shadow-lg md:h-80',
    }
]

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Docker",
        icon: docker,
    }
];

export { experiences, menuItems, work, technologies };