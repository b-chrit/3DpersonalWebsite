import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  universityLogo,
  websiteImage,
  volunteering,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
];

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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Student",
    company_name: "Concordia University",
    icon: universityLogo,
    iconBg: "#383E56",
    date: "september 2022 - present",
    points: [
      "Applied principles of data structures and algorithms to real-world coding challenges.",
      "Contributed to the development of system hardware projects, gaining hands-on experience.",
      "Utilized Python, C, C++, Java, JavaScript, HTML, CSS, Clojure, and Erlang in various projects.",
      "Collaborated with cross-functional teams to integrate mathematical concepts into software solutions.",
    ],
  },
  {
    title: "Pet Adoption Website",
    company_name: "school project",
    icon: websiteImage,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - april 2023",
    points: [
      "Designed and implemented a user-friendly pet adoption platform using JavaScript, HTML, CSS, and PHP.",
      "Developed a secure login form to enhance user access control and authentication.",
      "Collaborated with peers, incorporating feedback to improve the website's functionality and design.",
      "Ensured responsive design and compatibility across different browsers for a seamless user experience.",
    ],
  },
  {
    title: "Volunteer",
    company_name: "Clothes giveaway",
    icon: volunteering,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Collaborated within a diverse team to organize and facilitate clothes giveaway events, fostering teamwork and interpersonal skills.",
      "Demonstrated effective communication and coordination while working alongside designers, volunteers, and event managers.",
      "Gained valuable experience in event planning, community engagement, and building meaningful connections.",
      "Contributed to creating a positive impact on the community by providing essential clothing items to those in need.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Personal Website",
    description:
      "A digital oasis brought to life through the synergy of JavaScript, HTML, and CSS—my personal website stands as a testament to creativity in code. Crafted meticulously, this virtual haven isn't just about programming languages; it's a showcase where technology and innovation meld harmoniously, offering an immersive and engaging experience.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/b-chrit",
  },
  {
    name: "Snake Game",
    description:
      "Created a Snake game entirely using Java programming. This project greatly enhanced my grasp of object-oriented programming concepts, as I meticulously designed and implemented various elements of the game. It was an invaluable experience that bolstered my coding abilities and problem-solving skills.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/b-chrit",
  },
  {
    name: "Todo list",
    description:
      "Developed a comprehensive to-do list website using the trifecta of JavaScript, HTML, and CSS. Through this project, I not only honed my web development prowess but also deepened my understanding of frontend scripting, structuring, and styling techniques. It was an enriching endeavor that expanded my skill set significantly.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/b-chrit",
  },
];

export { services, technologies, experiences, testimonials, projects };
