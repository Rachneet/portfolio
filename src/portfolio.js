/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Rachneet Sachdeva",
  title: "Hi all, I'm Rachneet",
  subTitle: emoji(
    "Passionate software engineer having 3+ years of experience in leveraging machine\n" +
      "learning for real-world text and audio processing tasks. Helped organizations\n" +
      "automate workfows and boost efficiency."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LHvwXKOJyY0OH5coEigfs2ZNlMMvjspq/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rachneet",
  linkedin: "https://www.linkedin.com/in/rachneetsachdeva/",
  gmail: "rachneet1993@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  medium: "https://rachneetsachdeva.medium.com/",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/rachneet.sachdeva/',
  twitter: 'https://twitter.com/rachneet4',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Natural Language Processing :)",
  skills: [
    emoji(
      "⚡ Develop SOTA NLP algorithms for machine translation, text summarization\n" +
        "and question answering tasks."
    ),
    emoji("⚡ Develop systems to understand the working of AI algorithms."),
    emoji(
      "⚡ Automate workflows for machine learning deployments."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Machine & Deep Learning",
      fontAwesomeClassname: "fas fa-brain"
    },
      {
      skillName: "Data Science & Analytics",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      fontAwesomeClassname: "fab fa-google"
    },
      {
      skillName: "MySQL, NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
       {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Selenium",
      fontAwesomeClassname: "fas fa-scroll"
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RWTH Aachen University",
      logo: require("./assets/images/rwth_logo_.png"),
      subHeader: "Master of Science in Communications Engineering",
      duration: "September 2017 - Present",
      desc: "Electrical engineering with a focus on machine learning and telecommunications.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Panjab University",
      logo: require("./assets/images/pu_logo.png"),
      subHeader: "Bachelor of Engineering in Electronics & Communications",
      duration: "August 2011 - May 2015",
      desc:
        "Ranked top 10% in the program. Took courses about software engineering, programming, electronics, and " +
          "communications.",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Pytorch",
      progressPercentage: "80%"
    },
    {
      Stack: "NLP",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer",
      company: "Convaise",
      companylogo: require("./assets/images/convaise_logo.png"),
      date: "February 2021 – Present",
      desc:
        "Solving NLP one commit at a time.",
      descBullets: [
       "Developing SOTA NLP algorithms for machine translation, text summarization and question answering tasks.",
       "Developing a centralized hub to house all the deep learning models."
      ]
    },
    {
      role: "Student Research Assistant",
      company: "RWTH Aachen University",
      companylogo: require("./assets/images/rwth_logo_.png"),
      date: "May 2018 – December 2020",
      descBullets: [
        "Developed machine learning algorithms to analyze gender bias effects on online social platforms.",
        "Developed deep learning algorithms that make future wireless technologies more efficient.",
        "Set up workstation networking to help students manage their projects."]
    },
    {
      role: "Systems Engineer",
      company: "Infosys Limited",
      companylogo: require("./assets/images/infy_logo.png"),
      date: "June 2015 – August 2017",
      descBullets:[
        "Worked in an agile environment to automate workflows from development to testing using DevOps.",
        "Developed automated test cases using Selenium to find potential flaws in organization workflows."
    ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "Rachneet", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://medium.com/swlh/all-you-need-to-know-about-handling-high-dimensional-data-7197b701244d",
      title: "All You Need to Know About Handling High Dimensional Data",
      description:
        "Customer Segmentation using Unsupervised and Supervised Learning"
    },
    {
      url: "https://rachneetsachdeva.medium.com/exploring-trends-on-airbnb-to-help-you-plan-your-next-vacation-38e1be993c9f",
      title: "Exploring trends on Airbnb to help you plan your next vacation",
      description: "Analyze future booking trends, factors affecting prices and sentiments of people on Airbnb."
          }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+49 176 47194617",
  email_address: "rachneetsachdeva@yahoo.com"
};

// Twitter Section

const twitterDetails = {
  userName: "rachneet4", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
