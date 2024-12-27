/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Walaaa01",
  title: "Hey There, I'm Wala Eddine",
  subTitle: emoji(
    "An Eager Full Stack Software Developer, passionate about developing AI-Powered Solutions using AI/ML techniques 🚀 having an experience of building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/12mWlQW3Z_6-7TMKbo241kBC1zV9C8sfE/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/walaaa01",
  linkedin: "https://www.linkedin.com/in/wala",
  gmail: "wlaamaz55@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer / AI/ML Enthusiast",
  skills: [
    emoji(
      "⚡ Develop AI-Powered solutions using Gen AI techniques"
    ),
    emoji("⚡Develop highly interactive Front end / User Interfaces for your web applications"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Higher Institute of Informatics and Mathematics of Monastir",
      logo: require("./assets/images/isimm.png"),
      subHeader: "Licence in Software Engineering",
      duration: "September 2022 - June 2025",
      
    },
    
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Intern as a Data Analyst",
      company: "Nouvelair",
      companylogo: require("./assets/images/nouvelair.png"),
      date: "June 2023 – August 2023",
      desc: "Completed an internship focused on fine-tuning a Large Language Model (LLM) to develop a chatbot for assisting users with inquiries and facilitating flight booking. Enhanced the model's performance by customizing it for domain-specific tasks, improving user experience and operational efficiency.",
      
    },
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME OF THE PROJECTS I MADE THROUGHOUT MY CAREER AS A STUDENT",
  projects: [
    {
      image: require("./assets/images/chatbot.webp"),
      projectName: "AeroTravel Intelligent Assistant",
      projectDesc: "fine tuning an LLM to develop of a chatbot that assists with user inquiries and flight booking",
      footerLink: [
        {
          name: "Click here to check it out!",
          url: "https://github.com/walaaa01/AeroTravel-Intelligent-Assistant"
        }
      ]
    },
    {
      image: require("./assets/images/medimonitor.png"),
      projectName: "MediMonitor",
      projectDesc: "A real-time data management system that manages patients’ information and their associated diseases",
      footerLink: [
        {
          name: "Click here to check it out!",
          url: "https://github.com/walaaa01/MediMonitor"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "A glimpse of the hackathons that I've participated in / Won and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI 4 THE NEW GENERATION HACKATHON",
      subtitle:
        "Participated in a hackathon sponsored by EY Enterprise, where we developed an AI-powered system for automatic test generation, streamlining test case creation to enhance the pre-selection phase quality and efficiency. ",
      image: require("./assets/images/ey.png"),
      imageAlt: "",
      footerLink: [
        
      ]
    },
    {
      title: "E-HEALTH VALLEY HACKATHON",
      subtitle:
        "Participated in a hackathon sponsored by 'Syndicat des Pharmacies d'Officine de Tunisie' where we developed an AI-powered system to facilitate the process of taking an asthma test at a pharmacy.",
      image: require("./assets/images/e-health.jpg"),
      imageAlt: "",
      footerLink: [
        
      ]
    },

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  
};

// Talks Sections



// Podcast Section



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "51455159",
  email_address: "walamaz55@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
