import urifry from "../assets/projects/uifry.jpg";
import quickyWeather from "../assets/projects/quickyWeather.jpg";
import portfolio from "../assets/projects/portfolio.png";


// Project github repo
const quickyGithub=import.meta.env.VITE_QUICKY_REPO
const uifryGithub=import.meta.env.VITE_UIFRY_REPO
const portfolioGithub=import.meta.env.VITE_PORTFOLIO_REACT_REPO

// Project Live Link
const quickyLive=import.meta.env.VITE_WEATHER_LIVE
const uifryLive=import.meta.env.VITE_UIFRY_LIVE
const portfolioLive=import.meta.env.VITE_PORTFOLIO_LIVE

export const HERO_CONTENT = `I am a passionate front-end developer with a keen eye for crafting visually stunning and artistic web applications. Although I am a fresher, I have developed strong skills in HTML, CSS, JavaScript, Tailwind CSS, and React.js. My love for creating eye-catching and innovative designs drives me to deliver exceptional user experiences. I am detail-oriented and dedicated to making websites not only functional but also aesthetically pleasing.`;

export const ABOUT_TEXT = `I am a passionate front-end developer with a flair for crafting visually captivating and artistic web applications. While I am a fresher, I have developed strong skills in HTML, CSS, JavaScript, Tailwind CSS, and React.js. I am committed to making websites eye-catching and innovative, with a focus on delivering exceptional user experiences. My keen attention to detail ensures that every project is both functional and aesthetically pleasing.`;
export const ABOUT_AIM =`Aspiring to become a senior front-end developer, I am eager to expand my expertise by learning new technologies such as Next.js, Three.js, GSAP, and Babylon.js. My goal is to leverage these advanced tools to create even more dynamic and immersive web applications.`;

export const EDUCATION=[{
  year:"2021-2023",
  degree:"Master of Computer Application (MCA)",
  insitute:"Banaras Hindu University"
},{
  year:"2017-2020",
  degree:"Bachelor in Computer Application (BCA)",
  insitute:"Anugrah Narayan College"
},{
  year:"2015-2017",
  degree:"Intermediate Science (I. Sc)",
  insitute:"College of Commerce Arts & Science"
},{
  year:"2014-2015",
  degree:"Matric",
  insitute:"St. Xavier's High School"
}
]


export const PROJECTS = [
  {
    title: "Uifry Financial Website",
    image: urifry,
    description:
      "A fully Responsive website where i shows product landing page in modern way",
    technologies: ["HTML", "CSS", "Javascript"],
    repo:quickyGithub,
    live:quickyLive
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS","Framer Motion"],
    repo:portfolioGithub,
    live:portfolioLive
  },
  {
    title: "Quicky Weather",
    image: quickyWeather,
    description:
      "A Small Project where show weather on city name and geolocation based well Responsive and Dynamic background change based on Day Night  based user current location ",
    technologies: ["HTML", "CSS", "Javasript","API"],
    repo:uifryGithub,
    live:uifryLive,
  },
  
  
];

export const CONTACT = {
  address: "Patna,Bihar India. ",
  phoneNo: "+91 8083561822 ",
  email: "vishal.bhumca21@gmail.com",
};
