const greeting = {
  username: "Ali Raza Haider",
  resumeLink: `${process.env.PUBLIC_URL || ""}/CVALIRAZA.pdf`,
  profileImage: require("./assets/images/ME.jpeg")
};

const techStack = {
  experience: [
    {Stack: "Frontend/Design", progressPercentage: "80%"},
    {Stack: "Backend", progressPercentage: "70%"},
    {Stack: "Programming", progressPercentage: "70%"},  
    {Stack: "Version Control", progressPercentage: "60%"},
    {Stack: "Performance Optimization", progressPercentage: "70%"},
    {Stack: "SEO", progressPercentage: "70%"}

  ]
};

const workExperiences = {
  experience: [
    {
      role: "Website Developer",
      company: "BaronTech PVT LTD",
      date: "June 2021 – September 2026",
      desc: "Worked with team on multiple projects and worked on B2B projects individually. Delivered efficient web applications."
    },
    {
      role: "Website Developer",
      company: "Softnet Solutions",
      date: "January 2025 - Febuary 2026",
      desc: "Worked as a website developer and managed the website development from scratch in custom theme and plugin creation."
    },
    {
      role: "Website Developer",
      company: "Broadway City UK",
      date: "September 2024 – January 2025",
      desc: "Developing and maintaining robust and scalable websites. Ensuring seamless performance of websites through testing and optimization."
    },
    {
      role: "Co-founder / Website Developer",
      company: "Nova Nest Systems PVT LTD",
      desc: "Co-founder and website developer at the company."
    },
  ]
};

const bigProjects = {
  projects: [
    {
      image: require("./assets/images/gwadar-logo.png"),
      projectName: "Broadway City UK",
      projectDesc: "Lead Website Developer — managed company website development from scratch with custom theme and plugin creation.",
      footerLink: [{name: "Broadway City UK", url: "https://broadwaycity.co.uk/"}]
    },
    {
      image: require("./assets/images/dk_logo.webp"),
      projectName: "Dk-Indeklima",
      projectDesc: "Vital role in website development lifecycle with innovative enhancements.",
      footerLink: [{name: "DK-Indeklima", url: "http://sk-indeklima.dk/"}]
    },
    {
      image: require("./assets/images/wegrow.avif"),
      projectName: "Wegrow",
      projectDesc: "Interactive platform build with new feature rollouts and performance work.",
      footerLink: [{name: "Wegrow", url: "https://www.wegrow.design/"}]
    },
    {
      image: require("./assets/images/yabie.png"),
      projectName: "Yabie",
      projectDesc: "Storefront development focused on conversion-ready UX and reliability.",
      footerLink: [{name: "Yabie", url: "https://yabie.com/"}]
    },
    {
      image: require("./assets/images/palmbeach.png"),
      projectName: "Palmbeachtan",
      projectDesc: "Full website development lifecycle with ongoing enhancements.",
      footerLink: [{name: "Palmbeachtan", url: "https://palmbeachtan.com/"}]
    },
    {
      image: require("./assets/images/REDtone.png"),
      projectName: "Redtone",
      projectDesc: "Website development and enhancement for enterprise communications.",
      footerLink: [{name: "Redtone", url: "https://www.redtone.com/"}]
    },
    {
      image: require("./assets/images/kenny.png"),
      projectName: "Kennystevensteam",
      projectDesc: "Custom website build with performance and UX focus.",
      footerLink: [{name: "Kennystevensteam", url: "https://kennystevensteam.com/"}]
    },
    {
      image: require("./assets/images/fruitful.jpeg"),
      projectName: "Fruitful",
      projectDesc: "End-to-end build adding new features to a growing enhancement pipeline.",
      footerLink: [{name: "Fruitful", url: "https://www.fruitful.com/"}]
    },
    {
      image: require("./assets/images/lifestyle.png"),
      projectName: "Lifestylenationapp",
      projectDesc: "Full platform development with ongoing feature additions.",
      footerLink: [{name: "Lifestylenationapp", url: "https://www.lifestylenationapp.com/"}]
    },
    {
      image: require("./assets/images/chupi.png"),
      projectName: "Chupi",
      projectDesc: "E-commerce storefront build with custom functionality.",
      footerLink: [{name: "Chupi", url: "https://www.chupi.com/"}]
    },
    {
      image: require("./assets/images/prestashop.png"),
      projectName: "Prestashop",
      projectDesc: "Platform development and customization work.",
      footerLink: [{name: "Prestashop", url: "https://prestashop.com/"}]
    },
    {
      image: require("./assets/images/piot.png"),
      projectName: "Pilotthomas",
      projectDesc: "Website development with custom features and integrations.",
      footerLink: [{name: "Pilotthomas", url: "https://www.pilotthomas.com/"}]
    },
    {
      image: require("./assets/images/nordic.png"),
      projectName: "NordicNesting",
      projectDesc: "Custom website build for Nordic market.",
      footerLink: [{name: "Nordic Nesting", url: "https://nordicnesting.dk"}]
    },
    {
      image: require("./assets/images/bloomspace.webp"),
      projectName: "Bloomspace warehouse",
      projectDesc: "Created the website from start to finish singlehandedly and got the business up and running.",
      footerLink: [{name: "Bloomspace warehouse", url: "https://bloomspacewarehouse.com/"}]
    },
    {
      image: require("./assets/images/DYIMS.png"),
      projectName: "DYIMS",
      projectDesc: "Educational management system with Moodle, curriculum, and course enrolment services.",
      footerLink: [{name: "DYIMS", url: "https://dyims.edu.pk/"}]
    },
    {
      image: require("./assets/images/OLDNINEWOOD.jpg"),
      projectName: "Old Nine Wood",
      projectDesc: "Client site showcasing unique handcrafted products.",
      footerLink: [{name: "OldNineWood", url: "https://oldninewood.com/"}]
    },
    {
      image: require("./assets/images/ARKAKI.png"),
      projectName: "Arkaki",
      projectDesc: "Speed optimization, design fixes, new functionality, and security features.",
      footerLink: [{name: "Arkaki", url: "https://arkaki.com/"}]
    },
    {
      image: require("./assets/images/herbis.png"),
      projectName: "Herbismagicum",
      projectDesc: "Full website build with online coursework publication.",
      footerLink: [{name: "Herbismagicum", url: "https://herbismagicum.com/"}]
    },
    {
      image: require("./assets/images/adventurecrews.png"),
      projectName: "The Adventure Crews",
      projectDesc: "Brand website with customizations to match client requirements.",
      footerLink: [{name: "The Adventure Crews", url: "https://theadventurecrews.com/"}]
    },
    {
      image: require("./assets/images/CG.png"),
      projectName: "Veritas legal plan",
      projectDesc: "Developed for them a unique DAP platform with Dashboard and customizations to match client requirements.",
      footerLink: [{name: "Veritas legal plan", url: "https://veritaslegalplan.com/"}]
    },
    {
      image: require("./assets/images/growwithaf.webp"),
      projectName: "Grow With AF",
      projectDesc: "Developed their Accounting Website in WordPress with SEO and Performance Optimization.",
      footerLink: [{name: "Grow With AF", url: "https://growwithaf.co.uk/"}]
    },
    {
      image: require("./assets/images/growwithaf.webp"),
      projectName: "Financial CRM",
      projectDesc: "Developed Custom CRM For Grow With AF Accounting Website in Laravel.",
      footerLink: [{name: "Financial CRM", url: "https://financial-crm.growwithaf.co.uk/"}]
    },
    {
      image: require("./assets/images/whobrews.svg"),
      projectName: "Who's Brew Shop",
      projectDesc: "Developed their Brewing Website SEO and Performance Optimization.",
      footerLink: [{name: "Who's Brew Shop", url: "https://whosbrewshop.com/"}]
    },
    {
      image: require("./assets/images/SB.jpeg"),
      projectName: "SB Fashion",
      projectDesc: "Developed their Ecommerce Website did its own branding and SEO and Performance Optimization.",
      footerLink: [{name: "SB Fashion", url: "https://sb-fashion.com/"}]
    }
  ]
};

const achievementSection = {
  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani selected as Google Code-in Finalist from 4000 students across 77 countries."
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action available on 2 billion devices worldwide."
    },
    {
      title: "PWA Web App Developer",
      subtitle: "Completed certification from SMIT for PWA Web App Development."
    }
  ]
};

const contactInfo = {
  number: "+92-3200471267",
  secondaryNumber: "+92-3204041703",
  email_address: "razaalihaider703@gmail.com"
};

export {greeting, workExperiences, bigProjects, achievementSection, techStack, contactInfo};
