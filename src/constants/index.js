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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Vision And Mission",
    icon: web,
  },
  {
    title: "Supportive Environment",
    icon: mobile,
  },
  {
    title: "Focus On Feedback",
    icon: backend,
  },
  {
    title: "Value Added Workshop",
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
    title: " Vision And Mission",
    company_name: "NIT Kolkata",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "I'll be there to help you with your studies, organize study groups, and provide study resources.",
      "I believe everyone's voice should be heard. I'll work to make sure everyone feels included and valued.",
      "I'll keep you informed about college events and important news through regular updates . ",
      " I'll be easy to reach and approachable, always available to listen to your concerns and ideas",
    ],
  },
  {
    title: "Skill Development",
    company_name: "NIT Kolkata",
    icon: tesla,
    iconBg: "#E6DEDD",
      points: [
      "Launch skill development programs focusing on technical skills required in the AI & ML field Which Will Be Very Benificial For Students .",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers I Personnaly Will Guide All.",
    ],
  },
  {
    title: "Admin Of Social Media Group",
    company_name: "Whatsapp",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "I'm also the admin of social media groups that bring students together. ",
      "These groups help you make friends, share ideas, and support each other.",
      "Let's create a strong online community where we can connect, learn, and grow together Our Vision Basically Building Student Friendships ",
    
    ],
  },
  {
    title: "Inclusivity and Diversity",
    company_name: "NIT Kolkata",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "I believe in a college where every student, regardless of their background, feels welcome and included.",
      "I'll work to celebrate our diversity and ensure that all voices are heard and valued in our college community.",
      "College is not just about academics; it's about making lifelong memories and friendships. I'll organize engaging activities and events to bring students together.",
      "I'll listen to your ideas and work to implement them, making sure your college experience is enjoyable and fulfilling.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Raubins has always possessed a visionary approach, just like our great leaders. His ability to see the bigger picture and set ambitious goals is truly inspiring.",
    name: "Ramesh Sharma",
    designation: "AI/ML 2nd Year",
     image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've witnessed Raubins's empathetic leadership firsthand. He listens to everyone's concerns and is genuinely concerned about their well-being, much like a compassionate leader should be.",
    name: "Priya Patel",
   image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Raubins doesn't hesitate when it comes to making important decisions. His decisive action, much like our strong leaders of the past, ensures that progress is made.",
    name: " Aarav Kapoor",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
