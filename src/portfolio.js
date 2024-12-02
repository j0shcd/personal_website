// import { link } from "fs";

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Joshua Cohen-Dumani | Portfolio",
  description:
    "A Data Science and Product Management practitioner who thrives by helping businesses and startups leverage AI based solutions with a blend of UI/UX and product sense",
  og: {
    title: "Josh Portfolio",
    type: "website",
    url: "joshuacohendumani.com",
  },
};

//Home Page
const greeting = {
  title: "Bonjour!",
  sub: "Joshua Cohen-Dumani",
  logo_name: "Joshua Cohen-Dumani",
  // resumeLink: "www.google.com",
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
      profileLink: "https://github.com/j0shcd",
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
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/joshua-cohen-dumani/",
    },
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
      title: "Machine Learning & AI",
      fileName: "FullStackImg",
      skills: [
        "⚡ Designing and implementing machine learning models that drive results using PyTorch, TensorFlow and Scikit-learn.",
        "⚡ Applying advanced machine learning algorithms like CNNs, LSTMs and Autoencoders for anomaly detection, prognostics and regression tasks.",
        "⚡ Developing and integrating computer vision systems into applications, enhancing user interaction and automation.",
        "⚡ Applying transfer learning and feature extraction techniques to leverage pre-trained models for rapid development and improved performance in domain-specific tasks.",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "devicon:pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
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
          skillName: "Rust",
          fontAwesomeClassname: "logos-rust",
          style: {
            backgroundColor: "#B7410E",
          },
        },
        {
          skillName: "Scikit-Learn",
          fontAwesomeClassname: "devicon:scikitlearn",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Cuda",
          fontAwesomeClassname: "vscode-icons:file-type-cuda",
          style: {
            backgroundColor: "transparent",
            color: "red",
          },
        },
      ],
    },
    {
      title: "Product Sense and Leadership",
      fileName: "DesignImg",
      skills: [
        "⚡ Sourcing and evaluating deep-tech and SaaS startups with leading pre-seed Fund Founderful as Managing Partner for Founderful Campus.",
        "⚡ Experience founding and leading new projects from conception to launch, focused on answering user needs.",
        "⚡ Led multiple teams spanning several domains from pure engineering sub-systems (teams of 6-7) to President of an association with 35+ members and multiple sub-teams.",
        "⚡ Multidisciplinary background combining engineering and technical experience with business and product know-how.",
      ],
      softwareSkills: [
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "logos-python",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "C",
        //   fontAwesomeClassname: "logos-c",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "C++",
        //   fontAwesomeClassname: "simple-icons:cplusplus",
        //   style: {
        //     backgroundColor: "transparent",
        //     color: "#00599C",
        //   },
        // },
        // {
        //   skillName: "MatLab",
        //   fontAwesomeClassname: "devicon:matlab",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Arduino",
        //   fontAwesomeClassname: "logos-arduino",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
        // {
        //   skillName: "Raspberry Pi",
        //   fontAwesomeClassname: "logos-raspberry-pi",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
      ],
    },
    {
      title: "Data Science & Software Engineering",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in programming languages such as Python and SQL for data manipulation, analysis and visualization.",
        "⚡ Skilled in statistical analysis, hypothesis testing, and experiment design for drawing insights from data.",
        "⚡ Experience with data preprocessing, cleaning, and feature engineering to prepare datasets for modeling and analysis.",
        "⚡ Knowledgable in working with and pre-processing heavily imbalanced datasets.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos-python",
          style: {
            backgroundColor: "transparent",
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
          skillName: "SQL",
          fontAwesomeClassname: "tabler:sql",
          style: {
            backgroundColor: "transparent",
            color: "#F29111",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "fa-git",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#00599C",
          },
        },
        {
          skillName: "MatLab",
          fontAwesomeClassname: "devicon:matlab",
          style: {
            backgroundColor: "transparent",
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
    "Welcome! Here you’ll find a collection of projects that blend data science, machine learning, mechanical designs, sensor based systems and a range of other topics. Please feel free to explore and don’t hesitate to contact me if you have any questions or are interested in collaboration.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "MEMS Project",
      img_path: "mems.gif",
      date: "Winter 2021",
      description:
        "The project focused on developing a MEMS device capable of manipulating a micro-mirror within optical fiber paths. The device included a laterally moving actuator with locking capabilities at extended and retracted positions. The process encompassed design, simulation via COMSOL, fabrication in clean rooms and evaluation to address performance discrepancies like stiction.",
      tags: [
        {
          lang: "Mechanical Design",
          color: "#e60909",
        },
        {
          lang: "Micro-tech",
          color: "#00a100",
        },
        {
          lang: "Microfabrication",
          color: "#0974e6",
        },
      ],
      link: "pdfs/mems.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Rust Arbitrage Bot",
      img_path: "rust.gif",
      date: "Fall 2023",
      description:
        "This project done in collaboration with a protocol on Fuel blockchain was done to pilot an arbitrage bot algorithm they had developed internally. This is a simplified version with a simple algorithm, made to test and measure performance when trying to exploit arbitrage opportunities between Binance and OKX for the LDO/USDT pair.",
      tags: [
        {
          lang: "Real-time trading",
          color: "#00a100",
        },
        {
          lang: "Rust",
          color: "#7f09e6",
        },
        {
          lang: "API integration",
          color: "#e6a009",
        },
        {
          lang: "Financial Programming",
          color: "#0961e6",
        },
      ],
      link: "",
      code: "https://github.com/j0shcd/rust_arbitrage_bot",
      linkcolor: "white",
    },
    {
      title: "SileX project",
      img_path: "silex.png",
      date: "Spring 2021",
      description:
        "The SileX project, part of the second-year 'Conception de Mécanisme' course at EPFL, aims to create a dynamically balanced mechanism with two degrees of freedom in roll and pitch. This mechanism facilitates the movement of a mirror that reflects a laser in microfabrication processes.",
      tags: [
        {
          lang: "Mechanical Design",
          color: "#e60909",
        },
        {
          lang: "flexible mechanism",
          color: "#00a100",
        },
        {
          lang: "microfabrication",
          color: "#0974e6",
        },
      ],
      link: "pdfs/silex.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Logical Circuit Multifunction Clock",
      img_path: "syslog.gif",
      date: "Autumn 2020",
      description:
        "Designed a digital watch using only logical circuits, featuring an adjustable clock, alarm, stopwatch, timer, and timezone adjustments. Made from scratch in the context of 'Système Logique' course at EPFL in 2nd year, it included intuitive controls and audio notifications.",
      tags: [
        {
          lang: "Logical Circuit",
          color: "#e60909",
        },
        {
          lang: "Microcontroller",
          color: "#c47206",
        },
      ],
      link: "pdfs/syslog.pdf",
      code: "",
      linkcolor: "white",
    },
    // {
    //   title: "Anomaly Detection on Acoustic Data",
    //   img_path: "pedestrian.gif",
    //   date: "Fall 2024",
    //   description:
    //     "This project revolved around detecting anomalies on acoustic data of a pump/valve system. From residual-based methods like measuring the reconstruction error from an autoencoder, or comparing isolation forests, and one-class SVMs, with PCA and Autoencoder features.",
    //   tags: [
    //     {
    //       lang: "Anomaly Detection",
    //       color: "#00a100",
    //     },
    //     {
    //       lang: "Python",
    //       color: "#0961e6",
    //     },
    //     {
    //       lang: "PyTorch",
    //       color: "#Ed3437",
    //     },
    //   ],
    //   link: "",
    //   code:
    //     "https://github.com/j0shcd/ml4pm/blob/main/assignment_2/assignment_2.ipynb",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Bitcoin 'Risk Metric'",
    //   img_path: "planner.gif",
    //   date: "Fall 2023",
    //   description:
    //     "Developed a bitcoin risk metric as a side project to practice acquiring data from multiple sources, using statistical methods, manipulating data.",
    //   tags: [
    //     {
    //       lang: "Data Science",
    //       color: "#00a100",
    //     },
    //     {
    //       lang: "API integrations",
    //       color: "#303030",
    //     },
    //     {
    //       lang: "Python",
    //       color: "#0961e6",
    //     },
    //     {
    //       lang: "Model development",
    //       color: "#Ed3437",
    //     },
    //   ],
    //   link: "",
    //   code: "https://github.com/j0shcd/risk-metric",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Gaze-based snake game",
    //   img_path: "proto_farm.png",
    //   date: "Spring 2022",
    //   description:
    //     "Developed a gaze sensor capable of measuring the orientation of the eye, which sends the information to an arduino board and a custom PCB, in order to play a snake game using the gaze.",
    //   tags: [
    //     {
    //       lang: "Sensor based system",
    //       color: "#00a100",
    //     },
    //     {
    //       lang: "Prototyping",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Arduino",
    //       color: "#0961e6",
    //     },
    //   ],
    //   link: "pdfs/sensor.pdf",
    //   code: "",
    //   linkcolor: "white",
    // },
    {
      title: "Archipelago City Maker",
      img_path: "archipelago.png",
      date: "Spring 2020",
      description:
        "This project developed an application to build island cities with houses, production sites, and transport nodes on interconnected islands. Users can create, save and load city layouts, ensuring logical setups. The application evaluates cities based on distance to work, balance between living and working spaces and population capacity.",
      tags: [
        {
          lang: "Application",
          color: "#00a100",
        },
        {
          lang: "C++",
          color: "#004782",
        },
      ],
      link: "",
      code: "https://github.com/j0shcd/Archipelago",
      linkcolor: "white",
    },
    {
      title: "Mechanical Design of a Seeder",
      img_path: "semoir.png",
      date: "Spring 2020",
      description:
        "This project was developed for the first-year course 'Construction mécannique' at EPFL. We were tasked with designing a seeder from scratch, adhering to specific requirements.",
      tags: [
        {
          lang: "Mechanical Design",
          color: "#e60909",
        },
      ],
      link: "pdfs/semoir.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Airplane prognostics",
      img_path: "prognostics.png",
      date: "Spring 2024",
      description:
        "Developed and compared multiple models to estimate remaining useful life of airplanes using 1d CNNs, CNN-LSTM and dilated CNNs. We used the Commercial Modular Aero-Propulsion System Simulation (C-MAPSS) dataset from NASA.",
      tags: [
        {
          lang: "Machine Learning",
          color: "#1809e6",
        },
        {
          lang: "Anomaly Detection",
          color: "#00a100",
        },
        {
          lang: "Deep Learning",
          color: "#e6a009",
        },
        {
          lang: "PyTorch",
          color: "#Ed3437",
        },
      ],
      link: "",
      code:
        "https://github.com/j0shcd/ml4pm/blob/main/assignment_3/Josh_03-assignment_1dcnn_prognostics.ipynb",
      linkcolor: "white",
    },
    {
      title: "Valedictorian Graduation Speech",
      img_path: "grad.gif",
      date: "May 2019",
      description:
        "This is my valedictorian speech, that I gave at the graduation ceremony in front of over 1000 people as the representative of my year.",
      tags: [
        // {
        //   lang: "Robotics",
        //   color: "#1809e6",
        // },
        // {
        //   lang: "Computer Vision",
        //   color: "#00a100",
        // },
        // {
        //   lang: "Control",
        //   color: "#e60909",
        // },
        // {
        //   lang: "Python",
        //   color: "#0961e6",
        // },
      ],
      link: "https://www.youtube.com/watch?v=a6YrTL-Uz4Y",
      code: "",
      linkcolor: "white",
    },
    {
      title: "A Tale of Acting Careers",
      img_path: "ada.webp",
      date: "Winter 2023",
      description:
        "We developed a data analysis project that included creating a data storytelling website to provide insights through meaningful analysis and visualizations of the IMDB movie and CMU movie and character datasets. The project involved data cleaning, analysis and visualization.",
      tags: [
        {
          lang: "Data Science",
          color: "#00a100",
        },
        {
          lang: "Data Visualization",
          color: "#303030",
        },
        {
          lang: "Python",
          color: "#0961e6",
        },
        {
          lang: "Web Development",
          color: "#ff4b4b",
        },
      ],
      link: "https://yseoo.github.io/las-empanadas-story/",
      // code: "https://github.com/epfl-ada/ada-2023-project-lasempanadas",
      linkcolor: "white",
    },
    {
      title: "Rocket Recovery Ejection System",
      img_path: "ejection.JPEG",
      date: "Spring 2022",
      description:
        "Development of the complete recovery ejection system of the Vostok rocket. It involved designing a robust system including a custom-made altimeter connected to our custom PCB and extensive testing to ensure correct separation of the rocket during flight. The rocket successfully ccompleted a nominal flight in Summer 2022.",
      tags: [
        {
          lang: "System Design",
          color: "#c47206",
        },
        {
          lang: "Testing",
          color: "#0974e6",
        },
        {
          lang: "Electronics",
          color: "#e60909",
        },
      ],
      link: "pdfs/parachutes.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title:
        "Could the example of the Gotthard Base Tunnel inspire Thailand to reshape the future of Southeast Asia?",
      img_path: "ogi.png",
      date: "Spring 2024",
      description:
        "Research project conducted for the Swiss Maturité, on the topic of evaluating the geopolitical and economic impact on countries building large projects aimed at improving international trade routes. Conducted several interviews, including with former Swiss President and Transport Minister Adolf Ogi (pictured). ",
      tags: [
        {
          lang: "Research",
          color: "#00a100",
        },
        {
          lang: "Geopolitics",
          color: "#303030",
        },
        {
          lang: "Writing",
          color: "#0961e6",
        },
        {
          lang: "Interviewing",
          color: "#ff4b4b",
        },
      ],
      link: "pdfs/TM.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Rocket Recovery Parachute",
      img_path: "rocket.gif",
      date: "Spring 2022",
      description:
        "Conception of the drogue chute for the competition project Bella Lui II of EPFL Rocket Team (which ended up winning the European Rocketry Challenge (EUROC) that year. Conducted the whole development cycle leading the recovery subsystem for the Space Race project 'Vostok', from theory to traction tests, drop tests and integration tests.",
      tags: [
        {
          lang: "System Design",
          color: "#c47206",
        },
        {
          lang: "Testing",
          color: "#0974e6",
        },
        {
          lang: "Simulation",
          color: "#e60909",
        },
      ],
      link: "pdfs/parachutes.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Founder's Retreat",
      img_path: "retreat.jpg",
      date: "Spring 2024",
      description:
        "Founded and led hackathon centered around helping students overcome the biggest hurdle in creating valuable products: actually talking to people. The event was a huge success and our event attendance tripled for the rest of the semester. Our team also grew 30% directly after the event from participants who joined the club afterwards.",
      tags: [
        {
          lang: "Market Research",
          color: "#c47206",
        },
        {
          lang: "Writing",
          color: "#0974e6",
        },
        {
          lang: "Sustainability modelling",
          color: "#e60909",
        },
      ],
      link: "pdfs/founders.pdf",
      code: "https://www.ec-epfl-unil.org/founders-retreat",
      linkcolor: "white",
    },
    {
      title: "Temperature Controller in Assembly",
      img_path: "micro.png",
      date: "Spring 2021",
      description:
        "Our app, developed entirely in assembly for the second-year 'Microcontrôleurs' course at EPFL, allow the user to control room temperatures. It measures temperature, adjusts a vent via a servo motor based on user-set thresholds on an LCD interface and alerts users with an alarm if the temperature exceeds these limits, facilitating manual adjustment.",
      tags: [
        {
          lang: "Microcontroller",
          color: "#c47206",
        },
        {
          lang: "Assembly",
          color: "#0974e6",
        },
        {
          lang: "Electronics",
          color: "#e60909",
        },
      ],
      link: "pdfs/micro.pdf",
      code: "",
      linkcolor: "white",
    },
    {
      title: "Uzucarto SWOT Analysis",
      img_path: "uzucarto.png",
      date: "Spring 2024",
      description:
        "Conducted an in-depth SWOT analysis of Uzucarto, a new pilot product of Uzufly, an EPFL spin-off. Conducted ~20 user interviews and performed market research on the Geographic Information System (GIS) and BIM software market.",
      tags: [
        {
          lang: "Strategy",
          color: "#c47206",
        },
        {
          lang: "SWOT analysis",
          color: "#0974e6",
        },
        {
          lang: "User Interviews",
          color: "#e60909",
        },
      ],
      link: "pdfs/swot.pdf",
      code: "",
      linkcolor: "white",
    },
    // {
    //   title: "A trip to Mars and back",
    //   img_path: "micro.png",
    //   date: "Spring 2024",
    //   description:
    //     "Mini project conducted in the course with esteemed professor and past ESA Astronaut Claude Nicollier. The project mostly focused on conducting several calculations using Hohmann Transfers.",
    //   tags: [
    //     {
    //       lang: "Space Mission Design",
    //       color: "#c47206",
    //     },
    //   ],
    //   link: "pdfs/space.pdf",
    //   code: "",
    //   linkcolor: "white",
    // },
    {
      title: "Cool choices in a heating world",
      img_path: "ipat.png",
      date: "Spring 2024",
      description:
        "In-depth research project to model and evaluate the challenges and promise of the cooling industry from an emissions perspective. The project focused on analyzing the shift in emissions since the Montreal Protocol, discussing potential levers to reduce said emissions (mostly in HFCs) and offering a critical view of the strategies and proposals made during COP28 (2023) on cooling.",
      tags: [
        {
          lang: "Market Research",
          color: "#c47206",
        },
        {
          lang: "Writing",
          color: "#0974e6",
        },
        {
          lang: "Sustainability modelling",
          color: "#e60909",
        },
      ],
      link: "pdfs/cooling.pdf",
      code: "",
      linkcolor: "white",
    },
    // {
    //   title: "Inverse Optimization Project",
    //   img_path: "micro.png",
    //   date: "Spring 2024",
    //   description:
    //     "Mini-project from our convex and linear optimisation course ('Optimal Decision Making') focused on solving inverse (linear) optimisation problems.",
    //   tags: [
    //     {
    //       lang: "Optimization",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Python",
    //       color: "#0974e6",
    //     },
    //     {
    //       lang: "CVXPY",
    //       color: "#e60909",
    //     },
    //   ],
    //   link: "",
    //   code: "https://github.com/j0shcd/ODM/blob/main/ODM2024_CourseProject_InverseOptimization.ipynb",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Steel Billet OCR",
    //   img_path: "micro.png",
    //   date: "Fall 2023",
    //   description:
    //     "End to end data science project involving building an OCR model to help recognise steel billet reference numbers (we used a CNN), dat aaugmentation (using Keras), and a multitude of analyses from Discounted Cash Flow (DCF) analysis of the project, market research, quantitative cost-benefit analysis, go to market strategy, and project timeline.",
    //   tags: [
    //     {
    //       lang: "Data Science for Business",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Deep Learning",
    //       color: "#0974e6",
    //     },
    //     {
    //       lang: "Discounted Cash Flow (CDF) analysis",
    //       color: "#e60909",
    //     },
    //     {
    //       lang: "Project Management",
    //       color: "#00a100",
    //     },
    //   ],
    //   link: "pdfs/dsfb.pdf",
    //   code: "https://github.com/j0shcd/ODM/blob/main/ODM2024_CourseProject_InverseOptimization.ipynb",
    //   linkcolor: "white",
    // },
  ],
};

// const resumeleft = {
//   left: {
//     title: ["Education"],
//     data: [
//       {
//         title:
//           "MSc in Technology Management and Data Science, with a Robotics and Microengineering minor",
//         subtitle:
//           "École polytechnique Fédérale de Lausanne (EPFL) - Lausanne, Switzerland",
//         date: "Sep 2023 - Present",
//         content: [
//           "Coursework and Projects in Machine Learning, Deep Learning, Anomaly Detection, Modern Natural Language Processing, Optimisation and Optimal Decision Making, DevOps, Applied Data Analysis, Data Visualisation, Data cleaning, AI Product Management, Business Law, Applied Probability, Stochastic Processes and Markov Chains, Financial and Cost Accounting, Econometrics, Principles of Finance & Microeconomics.",
//           "🔸 current GPA: 5.3/6",
//         ],
//       },
//       {
//         title: "Academic Exchange",
//         subtitle: "Royal Institute of Technology (KTH) - Stockholm, Sweden",
//         date: "Aug 2021 - Jun 2022",
//         content: [
//           "Signal/Stochastic Processing, Intro to Robotics & ROS, Automatic Control, MEMS, Sensor based systems, Machine Learning and Deep Learning, Matlab.",
//         ],
//       },
//       {
//         title: "BSc in Microengineering",
//         subtitle:
//           "École polytechnique Fédérale de Lausanne (EPFL) - Lausanne, Switzerland",
//         date: "Sep 2019 - Jun 2022",
//         content: [
//           "Linear Algebra, Calculus I-IV, Physics (Mechanics, Thermodynamics, Electromagnetism), Chemistry, Object Oriented Programming (C++), Experimental Statistics, Computer Science Theory, Analog Devices, Micro-Mechanical engineering, Electronics, Material Science, Embedded Systems, Mechanism Design.",
//           "🔸 GPA: 4.73/6",
//         ],
//       },
//       {
//         title: "Maturité Fédérale, Physics and Applied Mathematics Orientation",
//         subtitle: "Collège Du Léman - Versoix, Switzerland",
//         date: "Sep 2016 - Jul 2019",
//         content: [
//           "Competitive Swiss High School Diploma with an orientation in Physics and Applied Maths. French C2, English C2, and German B1.",
//           "Valedictorian (2019); delivering graduation speech to an audience of over 1'000.",
//           "Awarded Scholarship of Academic Merit (4 recipients out of 1200 students).",
//           "Participated in 5 Model United Nations around Europe, finalist spot in the BruMUN declamation contest.",
//           "🔸 Grade: 5.58/6, highest score for class of 2019.",
//         ],
//       },
//     ],
//   },
// };

// const resumeright = {
//   right: [
//     {
//       title: ["Professional Experience"],
//       data: [
//         {
//           title:
//             "Teaching assistant in Programming (C++ and Python) for EPFL 1st year students",
//           subtitle: "EPFL - Lausanne",
//           date: "Aug 2023 - Feb 2024",
//           content: [
//             "Assist professor in explaining Computer Science and programming concepts to students and examination surveillance.",
//             "Help students during exercise sessions and project support sessions",
//             "C++ for Microengineering and Electrical Engineering students (~40 students)",
//             "Python for Civil Engineering and Material Science students (~80 students)",
//           ],
//         },
//         {
//           title: "Software Engineer",
//           subtitle: "Space Domain (Swiss Army) - Bern, Switzerland",
//           date: "Summer 2023 and 2024, Winter 2024-25",
//           content: [
//             "Launching features working with Java, version control, TDD and performance testing.",
//           ],
//         },
//         {
//           title: "Research Software Engineer (Internship)",
//           subtitle: "Intel Labs - Munich (remote)",
//           date: "Aug 2022 - Jan 2023 (6 months)",
//           content: [
//             "Implemented an IO pipeline using Test-Driven Development (TDD) principles, increasing throughput by 80%.",
//             "Developed a Python-based interface for on-chip experimentation using event-based data for our researcher community.",
//             "Led performance testing efforts for the legacy and newly developed IO pipeline.",
//             "Contributed to an event-based hand tracking algorithm on Loihi 2’s Open Source Neuromorphic Framework Lava, with heavy use of Git and Unix.",
//           ],
//         },
//         {
//           title: "Business Development (Part-time)",
//           subtitle: "DAAV - Lausanne",
//           date: "Mar 2021 - Sep 2021",
//           content: [
//             "Worked at EPFL spin-off DAAV alongside my studies at EPFL to develop new and valuable skills and learn more about real-world applications of robotics.",
//             "Established working relationships with Geneva airport, AVASAD, and SiLab, allowing DAAV to gain valuable business relationships, conduct their first real-world test and explore certification options.",
//             "Conducted a dozen user interviews and compiled a report providing the founding team user insights and market validation.",
//           ],
//         },
//       ],
//     },
//     {
//       title: ["Extracurricular Activities"],
//       data: [
//         {
//           title: "President",
//           subtitle: "EPFL-UNIL Entrepreneur Club",
//           date: "Sept 2023 - Present",
//           content: [
//             "Founded and led the Founder’s Retreat from conception to launch, a hackathon weekend focused on market validation. Received 120+ applications, significantly boosted visibility among students and expanded sponsorships.",
//             "Grew team from 15 to 35, resulting in a dozen events and 2x larger average attendance than previous years.",
//             "Tripled our annual budget by securing 14k CHF in additional sponsorships.",
//             "Put in place documentation practices and onboarding processes to ensure sustainable quality and reduce rework.",
//           ],
//         },
//         {
//           title: "Student Managing Partner",
//           subtitle: "Founderful Campus",
//           date: "Jan 2024 - Present",
//           content: [
//             "Handpicked by Founderful management to lead the EPFL team as Managing Partner after 2 months.",
//             "Led a team of 7 student partners, increasing the number of sourced startups by 50%.",
//             "Oversaw investments of Founderful Campus’ 25k CHF convertible loan in Helix Robotics and Circelec.",
//             "Sourced 75+ eligible startups, leading 42 startup calls.",
//             "Evaluated startups by analyzing market trends, competition and user requirements to inform investment decisions.",
//             "Fellow in the baby VC 2024 DACH cohort, a 10-week fellowship with top European VCs and a community of tech enthusiasts.",
//           ],
//         },
//         {
//           title: "Blockchain Student Association member",
//           subtitle: "",
//           date: "Sep 2023 - Jan 2024",
//           content: [
//             "Started working on an arbitrage bot coded in Rust for a project with a protocol on the Fuel blockchain.",
//           ],
//         },
//         {
//           title: "Recover Team Leader",
//           subtitle: "EPFL Rocket Team",
//           date: "Sep 2020 - Sep 2021",
//           content: [
//             "Successfully completed a nominal flight, contributing to a 1st-place finish in the European Rocketry Challenge.",
//             "Designed & manufactured parachute and ejection system of a L2 dual event rocket from scratch, using custom PCB and C++ code. Organized drop tests in Crans-Montana and Sion airport.",
//             "Led a team of 7 to build out a complete recovery system, coordinating with other subsystems (structure, avionics).",
//           ],
//         },
//       ],
//     },
//   ],
// };

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
    name: "Linkedin",
    link: "https://www.linkedin.com/in/joshua-cohen-dumani/",
    iconifyClassname: "simple-icons:linkedin",
    fontAwesomeIcon: "fa-linkedin", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "Gmail",
    link: "mailto:joshua@cohendumani.com",
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
  // resumeleft,
  // resumeright,
};
