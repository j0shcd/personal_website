const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Killian Hinard | Portfolio",
  description:
    "A Data Science practitioner who thrives to leverage startups with AI based solutions with a blend of UI/UX",
  og: {
    title: "Killian Portfolio",
    type: "website",
    url: "http://rohankokkula.ml/",
  },
};

//Home Page
const greeting = {
  title: "Bonjour!",
  sub: "Killian Hinard",
  logo_name: "Killian Hinard",
  resumeLink: "www.google.com",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/rohankokkula",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/rohankokkula01",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    // {
    //   siteName: "LinkedIn",
    //   iconifyClassname: "simple-icons:linkedin",
    //   style: {
    //     color: "#0077b5",
    //   },
    //   profileLink: "https://www.linkedin.com/in/rohankokkula/",
    // },
    // {
    //   siteName: "HashNode",
    //   iconifyClassname: "simple-icons:hashnode",
    //   style: {
    //     color: "#2962ff",
    //   },
    //   profileLink: "",
    // },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(T5-Transformer & OpenAI)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis) & Voice Cloning",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3, BootStrap5, ReactJS & NodeJS",
        "⚡ Creating application backend in Node, Flask & Streamlit",
        "⚡ Having experience in Domain & Hosting using Netlify, Vercel, Heroku & Hostinger",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interfaces for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "simple-icons:adobephotoshop",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TEATH",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://teath.herokuapp.com ",
      code: "https://github.com/rohankokkula/TEATH",
      linkcolor: "white",
    },

    {
      title: "Voice Gender Detection",
      img_path: "voice.gif",
      description:
        "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "tensorflow",
          color: "#4257f5",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "NeuralViz",
      img_path: "neural.gif",
      description:
        "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "numpy",
          color: "#8700b0",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://neuralviz.herokuapp.com/",
      code: "https://github.com/rohankokkula/neuralviz",
      linkcolor: "white",
    },
    {
      title: "Semantic Search APP",
      img_path: "project-03.png",
      description:
        "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
      tags: [
        {
          lang: "ongoing",
          color: "red",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Youtube Thumbnail Generator & AutoUploader",
      img_path: "project-02.png",
      description:
        "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
      tags: [
        {
          lang: "internal project",
          color: "red",
        },
        {
          lang: "youtube v3 api",
          color: "red",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    {
      title: "Newsearcher",
      img_path: "news.gif",
      description:
        "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "newspaper3k",
          color: "#303030",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "nltk",
          color: "#051c61",
        },
      ],
      link: "https://newsearcher.herokuapp.com/",
      code: "https://github.com/rohankokkula/Newsearcher",
      linkcolor: "white",
    },
    {
      title: "ActiWeight",
      img_path: "acti.gif",
      description:
        "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "matplotlib",
          color: "#c47206",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
      code: "https://github.com/rohankokkula/Actiweight",
      linkcolor: "white",
    },
  ],
};

const resumeleft = {
  left: {
    title: ["Education"],
    data: [
      {
        title: "MSc in Robotics with a minor in Data Science",
        subtitle:
          "École polytechnique Fédérale de Lausanne (EPFL), Lausanne, Switzerland",
        date: "September 2022 - present",
        content: [
          "Technical Coursework and Projects in Machine Learning, Deep Learning, Computer Vision, Reinforcement learning, Mechanical Engineering, Multivariable Control, Automatic, Model Predictive Control, Evolutive and Genetic Algorithms, Intelligent Agent, DevOps.",
          "Minor in Data Science with courses in Applied Data Analysis, Computer Networks, Data Visualisation, Database, Large-scale data management and analysis, Data cleaning",
          "🔸 current GPA: 5.35/6",
        ],
      },
      {
        title: "Academic Exchange",
        subtitle: "Royal Institute of Technology (KTH), Stockholm, Sweden",
        date: "August 2021 - June 2022",
        content: [
          "Signal/Stochastic Processing, Embedded and real-time systems, Automatic Control, MEMS, Sensor based systems, Machine Learning and Neuroscience.",
        ],
      },
      {
        title: "BSc in Microengineering",
        subtitle:
          "École polytechnique Fédérale de Lausanne (EPFL), Lausanne, Switzerland",
        date: "September 2019 - June 2022",
        content: [
          "Basic sciences (Physics, Linear Algebra, Calculus, Chemistry), Object Oriented Programming (C++), Experimental Statistics, Computer Science Theory, Analog Devices, Micro-Mechanical engineering, Basic of Electronics.",
          "🔸 GPA: 4.99/6",
        ],
      },
      {
        title: "Baccalaureate in Science",
        subtitle:
          "High School, Lycée Madame de Staël, Saint-Julien-en-Genevois, France",
        date: "September 2016 - July 2019",
        content: [
          "High School Diploma with a focus on Sciences (Mathematics, Physics, Chemistry, Biology).",
          "🔸 Grade: 18.28/20, Congratulations from the jury",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Professional Experience"],
      data: [
        {
          title:
            "Teaching assistant in Mathematics for Criminal Sciences students",
          subtitle: "Université de Lausanne (UNIL), Lausanne, Switzerland",
          date: "September 2022 - present",
          content: [
            "Assist the teacher in explaining to student mathematical concept.",
            "Help student during exercises session.",
            "Help the teacher with examination surveillance.",
          ],
        },
        {
          title:
            "Teaching assistant in Mathematics for Bioscience and Pharmaceutical student at UNIL",
          subtitle: "Université de Lausanne (UNIL), Lausanne, Switzerland",
          date: "September 2023 - present",
          content: [
            "Assist the teacher in explaining to student mathematical concept.",
            "Help student during exercises session.",
            "Help the teacher with examination surveillance.",
          ],
        },
        {
          title: "Laboratory assistant",
          subtitle: "Geneva Hospital (HUG), Geneva, Switzerland",
          date: "Summer 2022 and 2023",
          content: [
            "Reception of medical samples, applying the necessary treatments before analysis",
            "Distribution to the correct laboratories in the central laboratory building of the hospital",
            "Preparation of laboratory equipment orders, and deliveries to the right laboratories.",
          ],
        },
      ],
    },
    {
      title: ["Extracurricular Activities"],
      data: [
        {
          title: "Board Member, Webmaster ESN EPFL",
          subtitle: "Erasmus Student Network Association (ESN) of EPFL",
          date: "January 2024 - present",
          content: [
            "Managing of the Erasmus Student Network (ESN) website and digital resources, ensuring efficient operation and user accessibility.",
            "Contribute to the strategic leadership of the association, participating actively in decision-making processes and organizational management.",
            "Collaborated with the communication team to ensure the quality and accuracy of event descriptions published on the website.",
          ],
        },
        {
          title: "Committee Member ESN EPFL",
          subtitle: "Erasmus Student Network Association (ESN) of EPFL",
          date: "September 2023 - January 2024",
          content: [
            "Organized events for Erasmus students, overseeing all aspects including budget management, ticket pricing, promotional activities, and staff recruitment.",
            "Actively engaged in the association's life, participating in weekly meetings",
          ],
        },
        {
          title: "Member of Robopoly",
          subtitle: "Robopoly, Robotics association of EPFL",
          date: "September 2019 - June 2020",
          content: [
            "Developing hands on project on the subject of robotic and embedded systems, soldering, creating PCB and 3D-printing.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
// const certifications = {
//   certifications: [
//     {
//       title: "Tableau Analyst",
//       subtitle: "Tableau",
//       logo_path: "tabana-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Consumer",
//       subtitle: "Tableau",
//       logo_path: "tabcon-01.png",
//       certificate_link:
//         "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
//       alt_name: "Tableau",
//       color_code: "#000000",
//     },
//     {
//       title: "Problem solving",
//       subtitle: "HackerRank",
//       logo_path: "problem-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Python",
//       subtitle: "HackerRank",
//       logo_path: "python-01.png",
//       certificate_link: "https://www.hackerrank.com/rohankokkula",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Certificate of Merit",
//       subtitle: "Summer Analytics | IIT Guwahati",
//       logo_path: "iitg-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "IITG",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Desktop Qualified Associate",
//       subtitle: "SimpliLearn",
//       logo_path: "simplilearn-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Simplilearn",
//       color_code: "#000000",
//     },
//     {
//       title: "Question Generation using Transformers",
//       subtitle: "Udemy",
//       logo_path: "udemy-01.png",
//       certificate_link:
//         "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
//       alt_name: "Udemy",
//       color_code: "#000000",
//     },
//     {
//       title: "Machine Learning",
//       subtitle: "Stanford University",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "Stanford University",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Visualization",
//       subtitle: "University of Michigan",
//       logo_path: "coursera-01.png",
//       certificate_link:
//         "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
//       alt_name: "University of Michigan",
//       color_code: "#000000",
//     },
//     {
//       title: "Data Scientist Career Track",
//       subtitle: "DataCamp",
//       logo_path: "datacamp-01.png",
//       certificate_link:
//         "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
//       alt_name: "DataCamp",
//       color_code: "#000000",
//     },
//     {
//       title: "PowerBI Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//     {
//       title: "Tableau Masters",
//       subtitle: "iNeuron.ai",
//       logo_path: "ineuron-01.png",
//       certificate_link:
//         "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
//       alt_name: "HackerRank",
//       color_code: "#000000",
//     },
//   ],
// };

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "If you have any questions or would like to discuss potential opportunities, please don't hesitate to contact me. I'm always open to new connections and look forward to hearing from you!",
  },
  addressSection: {
    title: "Current Address",
    subtitle: "Lausanne, Switzerland",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/yseoo",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:killian.hd@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  //certifications,
  resumeleft,
  resumeright,
};
