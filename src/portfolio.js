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
    username: "Ali Raza Haider",
    title: "Hi all, I'm Ali Raza",
    subTitle: emoji(
        "A passionate Full Stack Software Developer 🚀 having more than 7 years of experience in building Web applications with Wordpress Shopify, PHP, Laravel, JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
    ),
    resumeLink: "https://drive.google.com/file/d/1rUNbyW37sCxJZJ0VO4iTFEzrViP2q0Id/view?usp=sharing", // Set to empty to hide the button
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/SARHD",
    linkedin: "https://www.linkedin.com/in/ali-raza-haider-69a901208/",
    gmail: "razaalihaider703@gmail.com",
    gitlab: "https://gitlab.com/razaalihaider703",
    facebook: "#",
    medium: "#",
    stackoverflow: "https://stackoverflow.com/users/28311500/ali-raza",
    // Instagram, Twitter and Kaggle are also supported in the links!
    // To customize icons and social links, tweak src/components/SocialMedia
    display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
    title: "What I do",
    subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "HTML",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "SASS",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "Reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "Nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "Swift",
            fontAwesomeClassname: "fab fa-swift"
        },
        {
            skillName: "Npm",
            fontAwesomeClassname: "fab fa-npm"
        },
        {
            skillName: "EJS",
            fontAwesomeClassname: "fab fa-vuejs"
        },
        {
            skillName: "SQL",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "AWS",
            fontAwesomeClassname: "fab fa-aws"
        },
        {
            skillName: "Firebase",
            fontAwesomeClassname: "fas fa-fire"
        },
        {
            skillName: "Python",
            fontAwesomeClassname: "fab fa-python"
        },
        {
            skillName: "Docker",
            fontAwesomeClassname: "fab fa-docker"
        },
        {
            skillName: "Wordpress",
            fontAwesomeClassname: "fab fa-wordpress"
        },
        {
            skillName: "Shopify",
            fontAwesomeClassname: "fab fa-shopify"
        },
        {
            skillName: "Speed Optmization",
            fontAwesomeClassname: "fab fa-google"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [
        {
            schoolName: "BeaconHouse School System",
            logo: require("./assets/images/beaconhouse.jpg"),
            subHeader: "Matriculation in Computer Science",
            duration: "2005 - 2015",
            desc: "Inter School IT Competition",
            // descBullets: [
            //     "CCNA Certified RedHat Linux For Routing and Switching",
            //     "CISCO RedHat Ethical Hacking with Linux"
            // ]
        },
        {
            schoolName: "Crescent Model High Secondary School",
            logo: require("./assets/images/crescent.png"),
            subHeader: "Intermediate in Computer Science",
            duration: "Fall 2015 - 2017",
            desc: "Participated in Junior Computer scientist",
            // descBullets: [
            //     "CCNA Certified RedHat Linux For Routing and Switching",
            //     "CISCO RedHat Ethical Hacking with Linux"
            // ]
        },
        {
            schoolName: "University of Managment And Technology",
            logo: require("./assets/images/university-of-management-and-technology-logo-1BBBD77558-seeklogo.com.png"),
            subHeader: "Bachelors of Science in Computer Science",
            duration: "Fall 2017 - 2021",
            desc: "Participated in the research of Networking with CISCO and published 3 papers.",
            descBullets: [
                "CCNA Certified RedHat Linux For Routing and Switching",
                "CISCO RedHat Ethical Hacking with Linux"
            ]
        },
        {
            schoolName: "Information Technology University",
            logo: require("./assets/images/images.jpeg"),
            subHeader: "Masters of Science in Computer Science",
            duration: "Spring 2022 - 2024",
            desc: "AI in Daily Life program. Took courses about Software Engineering, Web Security, Operating Systems, Machine Learning",
            descBullets: ["Worked on Python for Diverse Daily Life AI usages and how to improve them."]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "90%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "70%"
        },
        {
            Stack: "Programming",
            progressPercentage: "60%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, // Set it to true to show workExperiences Section
    experience: [
        {
            role: "Website Developer",
            company: "Broadway City Gwadar",
            companylogo: require("./assets/images/gwadar-logo.png"),
            date: "September 2024 – January 2025",
            desc: "Developing and maintaining robust and scalable websites. Ensuring seamless performance of websites through testing and optimization. Custom theme and plugin development and functionality manipulation."
        },
        {
            role: "Full-Stack Developer",
            company: "Astute Solutions",
            companylogo: require("./assets/images/astute.jpg"),
            date: "September 2023 – September 2024",
            desc: "Created full-stack solutions for diverse projects. Collaborated with teams to deliver efficient web applications. Worked on multiple international projects simultaneously."
        },
        {
            role: "Website Developer",
            company: "BaronTech PVT LTD",
            companylogo: require("./assets/images/barontech.webp"),
            date: "June 2021 – Present",
            desc: "Worked with team on multiple projects and worked on B2B projects individually. Collaborated with teams to deliver efficient web applications. Worked on multiple C2C projects.",
            // descBullets: [
            //     "Took Technical (Front-End) Assessments and Interviews for the Company for international B2B and C2C project gain."
            // ]
        },
        {
            role: "Website Developer",
            company: "Dk-Indeklima",
            companylogo: require("./assets/images/dk_logo.webp"),
            date: "November 2022 – December 2024",
            desc: "Help team in building the store functionality. Enhanced website functionalities for improved user engagement."
        },
        {
            role: "Website Developer",
            company: "Inovation.io",
            companylogo: require("./assets/images/innovationio.png"),
            date: "September 2020 – October 2021",
            desc: "Designed dynamic, interactive websites. Enhanced website functionalities for improved user engagement."
        },
        {
            role: "Website Developer",
            company: "Pixtor",
            companylogo: require("./assets/images/pixtor.png"),
            date: "March 2019 – September 2020",
            desc: "Gained hands-on experience with CMS platforms and dynamic coding. Worked with SQL and CodeIgniter for CRUD operations."
        },
        {
            role: "Website Developer",
            company: "Sojo Realty",
            companylogo: require("./assets/images/sojo.png"),
            date: "June 2021 – December 2021",
            desc: "Worked with company as lead software developer and created website with Wordpress and added functionality of MLS and IDX"
        },
        {
            role: "Website Developer",
            company: "Upwork",
            companylogo: require("./assets/images/upwork.png"),
            date: "2017 – 2025",
            desc: "Gained Additional Experience in C2C and B2B platform and aquired work form the freelancing platform for additional growth in terms of learning and career building."
        },
        {
            role: "Co-founder / Website Developer",
            company: "Nova Nest Systems PVT LTD",
            companylogo: require("./assets/images/novanest.png"),
            date: "2022 – 2024",
            desc: "Co-founder and Website developer at Company"
        },
        {
            role: "Intern Game Developer",
            company: "MashTech GAMES",
            companylogo: require("./assets/images/mashtech.png"),
            date: "June 2017 – September 2017",
            desc: "Intern at the company for Game Development with unity3D"
        }
    ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Recent Projects",
    subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
    projects: [{
        image: require("./assets/images/gwadar-logo.png"),
        projectName: "Broadway City UK",
        projectDesc: "Worked as the Lead Website Developer and managed company website development from scratch in custom theme and plugin creation.",
        footerLink: [{
                name: "Broadway City UK",
                url: "https://broadwaycity.co.uk/"
            }
            //  you can add extra buttons here.
        ]
    },{
            image: require("./assets/images/dk_logo.webp"),
            projectName: "Dk-Indeklima",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "DK-Indeklima",
                    url: "http://sk-indeklima.dk/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/wegrow.avif"),
            projectName: "Wegrow",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Wegrow",
                    url: "https://www.wegrow.design/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/yabie.svg"),
            projectName: "Yabie",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Yabie",
                    url: "https://yabie.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/palmbeach.svg"),
            projectName: "Palmbeachtan",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Palmbeachtan",
                    url: "https://palmbeachtan.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/REDtone.png"),
            projectName: "Redtone",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Redtone",
                    url: "https://www.redtone.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/kenny.svg"),
            projectName: "Kennystevensteam",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Kennystevensteam",
                    url: "https://kennystevensteam.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/fruitful.jpeg"),
            projectName: "Fruitful",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Fruitful",
                    url: "https://www.fruitful.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/piot.png"),
            projectName: "Pilotthomas",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Pilotthomas",
                    url: "https://www.pilotthomas.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/chupi.svg"),
            projectName: "Chupi",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Chupi",
                    url: "https://www.chupi.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/dk_logo.webp"),
            projectName: "Prestashop",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Prestashop",
                    url: "https://prestashop.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/piot.png"),
            projectName: "Pilotthomas",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Pilotthomas",
                    url: "https://www.pilotthomas.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/dk_logo.webp"),
            projectName: "NordicNesting",
            projectDesc: "Played a viatl role in website development life cycle and added new innovative ways for website enhancement and uprising.",
            footerLink: [{
                    name: "Nordic Nesting",
                    url: "https://nordicnesting.dk"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/bloomspace.webp"),
            projectName: "Bloomspace warehouse",
            projectDesc: "Created the website from start to finish singlehandedly and mate the business up and running.",
            footerLink: [{
                    name: "Bloomspace warehouse",
                    url: "https://bloomspacewarehouse.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/bloomspace.webp"),
            projectName: "DYIMS",
            projectDesc: "Created the educationl managment system with its Moodle and cericulam and course enrolment services.",
            footerLink: [{
                    name: "DYIMS",
                    url: "https://dyims.edu.pk/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/herbis.png"),
            projectName: "Arkaki",
            projectDesc: "Assisted in helping this website get better results on speed optmization and fix website design layout and addded new functionality to the existing site added some extra security features to the site.",
            footerLink: [{
                    name: "Arkaki",
                    url: "https://arkaki.com/"
                }
                //  you can add extra buttons here.
            ]
        },{
            image: require("./assets/images/herbis.png"),
            projectName: "Herbismagicum",
            projectDesc: "Created the website from start to finish singlehandedly and mate the business up and running with its online course work publication.",
            footerLink: [{
                    name: "Herbismagicum",
                    url: "https://herbismagicum.com/"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/adventurecrews.png"),
            projectName: "The Adventure Crews",
            projectDesc: "Worked as website developer for the brand and added customization to get the required outcome that the client desired.",
            footerLink: [{
                name: "The Adventure Crews",
                url: "https://theadventurecrews.com/"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: "Google Code-In Finalist",
            subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
            image: require("./assets/images/codeInLogo.webp"),
            imageAlt: "Google Code-In Logo",
            footerLink: [{
                    name: "Certification",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
                },
                {
                    name: "Award Letter",
                    url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
                },
                {
                    name: "Google Code-in Blog",
                    url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
                }
            ]
        },
        {
            title: "Google Assistant Action",
            subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
            image: require("./assets/images/googleAssistantLogo.webp"),
            imageAlt: "Google Assistant Action Logo",
            footerLink: [{
                name: "View Google Assistant Action",
                url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
            }]
        },

        {
            title: "PWA Web App Developer",
            subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
            image: require("./assets/images/pwaLogo.webp"),
            imageAlt: "PWA Logo",
            footerLink: [
                { name: "Certification", url: "" },
                {
                    name: "Final Project",
                    url: "https://pakistan-olx-1.firebaseapp.com/"
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
    title: "Blogs",
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
    displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
    title: "TALKS",
    subtitle: emoji(
        "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
    ),

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
    display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
    title: emoji("Podcast 🎙️"),
    subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

    // Please Provide with Your Podcast embeded Link
    podcast: [
        ""
    ],
    display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
    title: "Resume",
    subtitle: "Feel free to download my resume",

    // Please Provide with Your Podcast embeded Link
    display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92-3200471267",
    email_address: "razaalihaider703@gamil.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails,
    isHireable,
    resumeSection
};