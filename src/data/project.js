import smartEducationImage from '/Users/kumardivyachaitanya/Documents/web devlopment/portfolio-1/src/assets/smart_education.png';
import weatherspp from '/Users/kumardivyachaitanya/Documents/web devlopment/portfolio-1/src/assets/weather_icon.png';
import travelplanner from '/Users/kumardivyachaitanya/Documents/web devlopment/portfolio-1/src/assets/tour_planner.png';
import courseselector from '/Users/kumardivyachaitanya/Documents/web devlopment/portfolio-1/src/assets/course_selector.png';
import passwordgenerator from '/Users/kumardivyachaitanya/Documents/web devlopment/portfolio-1/src/assets/password_generator.jpeg';
import githubdetect from '/Users/kumardivyachaitanya/Documents/web devlopment/portfolio-1/src/assets/githubdevdetective.png';
import container from '/Users/kumardivyachaitanya/Documents/web devlopment/portfolio-1/src/assets/container.jpeg';

const project = [
    {
        key: 1,
        img: smartEducationImage,
        name: "Smart Education Classroom",
        description: "StudyNotion aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. Additionally, the platform serves as a platform for instructors to showcase their expertise and connect with learners across the globe.",
        techStack: ['Node.js', 'Express.js', 'EJS', 'API Documentation', 'React JS','HTML','CSS'],
        complete: true,
        liveDeploy: "https://studynotion-frontend.vercel.app/",
        sourceCode: "https://github.com/kumardivyachaitanya/my-Smart-Education-site"
    },
    {
        key: 2,
        img: weatherspp,
        name: "Weather App",
        description: "A weather app grants access to chech the temperature,wind speed and cloud status humidity for a particular location on the world",
        techStack: ['Node.js', 'React JS', 'HTML','CSS','JAVASCRIPT'],
        complete: true,
        liveDeploy: "https://weather-app-olive-eight-52.vercel.app/",
        sourceCode: "https://github.com/kumardivyachaitanya/weather-App"
    },
    {
        key: 3,
        img: travelplanner,
        name: "Travel Planner",
        description: "The Travel Planner App is a comprehensive tool designed to simplify the process of planning and managing trips. Whether you're a frequent traveler or planning a once-in-a-lifetime adventure",
        techStack: ['HTML','CSS','JAVASCRIPT','React JS'],
        components: ['Schema', 'React JS', 'JAVASCRIPT', 'CSS'],
        complete: true,
        liveDeploy: "https://tour-planner-1ox6.vercel.app/",
        sourceCode: "https://github.com/kumardivyachaitanya/Tour-Planner"
    },
    {
        key: 4,
        img: courseselector,
        name: "Top-Courses-Selector",
        description: "Top Courses Selector is a web application that allows users to browse, filter, and select the best courses available online. The application provides a user-friendly interface to search for courses based on various criteria such as category, rating, and popularity.",
        techStack: ['HTML','CSS','React JS','Javascript'],
        complete: true,
        liveDeploy: "https://top-courses-selector.vercel.app/",
        sourceCode: "https://github.com/kumardivyachaitanya/Top-Courses-Selector"
    },
    {
        key: 5,
        img: passwordgenerator,
        name: "Password Creator",
        description: "The Password Creator App is a simple and secure tool designed to help users generate strong, random passwords. This app allows users to create passwords of varying lengths and complexities, ensuring their online accounts remain safe from unauthorized access.",
        techStack: ['HTML','CSS','Javascript','React JS','API Integration'],
        complete: true,
        liveDeploy: "https://password-creater-mu.vercel.app/",
        sourceCode: "https://github.com/kumardivyachaitanya/password_creater?tab=readme-ov-file"
    },
    {
        key: 6,
        img: githubdetect,
        name: "Githhub DevDetection App",
        description: "DevDetective is a web application that allows users to search for GitHub profiles by username. It fetches data from the GitHub API and displays user information such as their avatar, name, bio, repositories, followers, following, and more. The app also includes a dark mode feature for improved user experience.",
        techStack: ['HTML','CSS','Javascript','REACT JS','Api Integration'],
        complete: true,
        liveDeploy: "https://git-hub-detective-app.vercel.app/",
        sourceCode: "https://github.com/kumardivyachaitanya/GitHub-Detective-App"
    }
]

const otherProjects = [
    {
        key: 1,
        link: "https://counter-app-one-delta.vercel.app/",
        img: container,
        name: "Counter App"
    },
    {
        key: 8,
        link: "https://github.com/kumardivyachaitanya/Tic-Tac-Toe-game",
        img: container,
        name:"Tic-Tac-Toe Game"
    },
    {
        key: 9,
        link: "https://github.com/kumardivyachaitanya/Discord-Clone",
        img: container,
        name:"Discord Clone"
    },
    {
        key: 10,
        link: "https://github.com/kumardivyachaitanya/URL-SHORTNER",
        img: container,
        name:"Url Shortner"
    },
    {
        key: 11,
        link: "https://github.com/kumardivyachaitanya/razor_pay_01",
        img: container,
        name:"Razon Pay Clone"
    },
    {
        key: 12,
        link: "https://github.com/kumardivyachaitanya/paralax_effect?tab=readme-ov-file",
        img: container,
        name:"Paralax Effect"
    },

    
    
    
]

const data = { project, otherProjects }
export default data;
