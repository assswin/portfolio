import htmlIcon from '../assets/html.svg';
import cssIcon from '../assets/css.svg';
import jsIcon from '../assets/javascript.svg';
import sqlIcon from '../assets/sql.svg';
import pythonIcon from '../assets/python.svg';
import javaIcon from '../assets/java.svg';

import project1Img from '../assets/download.jpg';
import project2Img from '../assets/download (1).jpg';
import project3Img from '../assets/download (4).png';
import f1AppImg from '../assets/f1-app.png';
import syasImg from '../assets/syas-startup.png';

export const portfolioData = {
  about: "A brief introduction about yourself, your passions, and what you offer.",
  skills: [
    { name: "HTML", description: "Semantic, accessible markup for modern web apps.", icon: htmlIcon },
    { name: "CSS", description: "Responsive layouts, Flexbox, Grid, and animations.", icon: cssIcon },
    { name: "JavaScript", description: "Basic functions, operators, and control flow.", icon: jsIcon },
    { name: "SQL", description: "Basic code of DDL, TCL, and DML.", icon: sqlIcon },
    { name: "Python", description: "Problem solving, data structures.", icon: pythonIcon },
    { name: "Java", description: "Functions, OOP concepts.", icon: javaIcon }
  ],
  services: [
    { title: "Web Development", description: "Front-end and back-end development using modern JavaScript frameworks, responsive layouts, and accessible markup." },
    { title: "UI/UX Design", description: "User-centered interfaces, wireframes, and high-fidelity prototypes focused on usability and conversion." },
    { title: "Website Maintenance", description: "Ongoing updates, performance optimization, backups, and security monitoring to keep sites healthy." },
    { title: "E‑commerce Development", description: "Store setup, payment integration, and conversion-focused product pages for online sales." }
  ],
  projects: [
    { title: "F1 Racing Dashboard", description: "A real-time Formula 1 racing dashboard featuring live race data, driver standings, lap-by-lap analytics, and interactive circuit maps — built for the ultimate motorsport fan experience.", image: f1AppImg, link: "https://f1-app-2p9b.vercel.app/" },
    { title: "SYAS — Startup Platform", description: "A modern startup company platform connecting entrepreneurs with resources, mentorship, and funding opportunities — designed to accelerate early-stage ventures from idea to launch.", image: syasImg, link: "https://syas-alpha.vercel.app" },
    { title: "Code Review AI using Firebase Studio", description: "AI-powered code review platform leveraging Firebase Studio for real-time collaboration and feedback.", image: project1Img, link: "#" },
    { title: "ATM Simulation (Basic Python)", description: "A simple ATM simulation project built with Python, demonstrating basic banking operations and logic.", image: project2Img, link: "#" },
    { title: "n8n AI Agent", description: "Automated AI agent workflows using n8n for task automation, integration, and intelligent decision making.", image: project3Img, link: "#" }
  ],
  contact: {
    email: "aswin200rshree@gmail.com",
    phone: "93605337379",
    linkedin: "SHREE ASWIN"
  }
};
