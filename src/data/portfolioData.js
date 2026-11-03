export const personalInfo = {
  name: "Matta Sujith Singh",
  role: "Computer Science Undergraduate & Software Developer",
  institution: "Padmasri Dr. B.V. Raju Institute of Technology (BVRIT)",
  headline: "Software developer engineering full-stack web applications and applied computer vision systems.",
  bio: "Computer Science undergraduate at BVRIT with an 8.47 CGPA. Smart India Hackathon 2024 Level 2 Qualifier. Proficient in the MERN stack, Python, and C++, with a strong foundation in Data Structures, Algorithms, and system design. Experienced in orchestrating third-party APIs, building scalable backends, and developing real-time OpenCV vehicle density estimation algorithms.",
  location: "Medak / Hyderabad, Telangana, India",
  email: "23211a05j3@bvrit.ac.in",
  phone: "+91 7032678348",
  cgpa: "8.47 / 10",
  graduationYear: "2027",
  period: "Aug 2023 – 2027",
  status: "Available for Internships & Projects",
  avatarUrl: "/sujith_avatar.jpg",
  avatarCasualUrl: "/sujith_avatar_casual.jpg",
  resumeUrl: "/Matta_Sujith_Singh_Resume.pdf",
  socials: {
    github: "https://github.com/sujithsinghh",
    linkedin: "https://www.linkedin.com/in/matta-sujith-singh-1a815a293",
    leetcode: "https://leetcode.com/u/sujith_singh/",
    smartinterviews: "https://smartinterviews.in/profile/sujith_singh",
  }
};

export const verifiedMetrics = [
  { kicker: "Academic Standing", value: "8.47 / 10", detail: "B.Tech CSE @ BVRIT Autonomous (2023–2027)" },
  { kicker: "National Competition", value: "SIH Level 2", detail: "Smart India Hackathon 2024 Qualifier (Traffic Algorithm)" },
  { kicker: "Higher Secondary", value: "98.0%", detail: "Narayana Junior College (TS EAMCET Rank 13,182)" },
  { kicker: "Language Certification", value: "C1 Advanced", detail: "EF SET English Certificate (Listening 71 C2 Proficient)" }
];

export const projects = [
  {
    id: "tourist-guide",
    number: "01",
    title: "Smart Tourist Guide and Budget Planner",
    period: "Jun 2025 – Jul 2025",
    category: "Full-Stack MERN Application",
    featured: true,
    tagline: "Full-stack travel intelligence platform generating budget-optimized itineraries, real-time venue discovery, and localized dining.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Google Maps API",
      "Google Places API",
      "Weather API",
      "JWT Auth",
      "Tailwind CSS"
    ],
    github: "https://github.com/sujithsinghh/Tourist_Guide",
    liveDemo: null,
    summary: "Built a full-stack MERN application recommending personalized activities, dining options, and hotels based on user budget bounds and real-time location. Engineered modular backend services with MongoDB persistence for saved trips and automated cost estimation.",
    bulletPoints: [
      {
        lead: "Multi-Source API Pipeline",
        text: "Integrated Google Maps API, Google Places API, and Weather API to deliver real-time venue coordinates, place details, and trip conditions."
      },
      {
        lead: "Scalable Backend & Data Layer",
        text: "Developed Node.js and Express RESTful services backed by MongoDB for itinerary saving, budget tracking, and persistent user profile management."
      },
      {
        lead: "Route & Budget Optimization",
        text: "Implemented real-time cost estimation algorithms and route ordering to improve planning efficiency, balanced tourist density, and trip personalization."
      }
    ],
    architectureDetails: {
      client: "React.js modular single-page interface with dynamic form controls, itinerary timeline cards, and interactive cost summaries.",
      server: "Node.js & Express RESTful services orchestrating third-party API data normalizations with error-fallback boundaries.",
      database: "MongoDB Atlas document schemas storing user profiles, hashed credentials, and saved multi-day itineraries.",
      auth: "Stateless JSON Web Token (JWT) authentication with bcrypt password hashing."
    }
  },
  {
    id: "traffic-optimization",
    number: "02",
    title: "Traffic Signal Optimization using Computer Vision",
    period: "Aug 2024 – Oct 2024",
    category: "Edge Vision & Proportional Control",
    featured: true,
    tagline: "Real-time density-driven signal timing pipeline using OpenCV background subtraction to eliminate fixed-cycle traffic congestion.",
    technologies: [
      "Python",
      "OpenCV (MOG2)",
      "Flask REST API",
      "NumPy",
      "Pandas",
      "Adaptive Timing"
    ],
    github: "https://github.com/sujithsinghh",
    liveDemo: "#simulator",
    summary: "Developed a computer vision pipeline using OpenCV to detect vehicle density from intersection camera feeds and dynamically allocate proportional green light timings. Frontend lead for the Smart India Hackathon 2024 Level 2 national qualifier project.",
    bulletPoints: [
      {
        lead: "Computer Vision Pipeline",
        text: "Engineered real-time vehicle detection using OpenCV Background Subtractor MOG2 and morphological contour filtering to calculate instantaneous lane queue density."
      },
      {
        lead: "Adaptive Timing Algorithm",
        text: "Applied dynamic ratio algorithms to compute signal duration: allocating green time proportionally based on congestion while enforcing safe clearance windows (10s floor, 90s cap)."
      },
      {
        lead: "Academic Presentation & Recognition",
        text: "Smart India Hackathon (SIH 2024) Level 2 national qualifier; co-authored and presented technical paper at BVRIT Engineering College."
      }
    ],
    architectureDetails: {
      cvPipeline: "Camera feed intake -> OpenCV MOG2 background subtractor -> morphological opening -> contour detection for real-time vehicle density per lane.",
      algorithm: "Adaptive density ratio: GreenTime = max(10, round(Density / Total * 90)) with standby zero-traffic safety state.",
      dashboard: "Flask REST API serving live JSON metrics (/get-traffic-data) to the monitoring console."
    }
  },
  {
    id: "urban-mobility-paper",
    number: "03",
    title: "Urban Mobility Optimization Through Deep Learning",
    period: "2024",
    category: "Technical Research & Publication",
    featured: false,
    tagline: "Co-authored research paper investigating AlexNet deep convolutional architecture for predictive urban traffic congestion modeling.",
    technologies: ["Deep Learning", "AlexNet CNN", "Python", "Spatial-Temporal Traffic Modeling"],
    github: "https://github.com/sujithsinghh",
    summary: "Presented technical research at BVRIT examining the limitations of rigid fixed-time signal controllers and modeling vehicular throughput using convolutional neural network adaptations."
  },
  {
    id: "mazetilt-vr",
    number: "04",
    title: "MazeTilt — Interactive VR Physics Simulation",
    period: "2024",
    category: "Virtual Reality & Game Dev",
    featured: false,
    tagline: "Physics-based spatial prototype exploring 3D controller tilt mapping and rigid-body mechanics.",
    technologies: ["Unity Engine", "C#", "VR Interaction System", "Rigid-Body Physics"],
    github: "https://github.com/sujithsinghh",
    summary: "Interactive virtual reality prototype translating user hand pitch and roll into virtual maze tilting with realistic angular acceleration and spatial audio feedback."
  }
];

export const skillsIndex = [
  {
    categoryNumber: "01",
    categoryName: "Programming Languages",
    items: [
      { name: "C++", context: "Data Structures, Algorithmic Optimization, Memory Handling" },
      { name: "Python", context: "OpenCV Computer Vision, Flask REST APIs, Data Modeling" },
      { name: "JavaScript (ES6+)", context: "Asynchronous Node.js, Modern React, Full-Stack Architecture" }
    ]
  },
  {
    categoryNumber: "02",
    categoryName: "Web & Backend Engineering",
    items: [
      { name: "React.js", context: "Modular Component Hierarchy, Hooks, State Management" },
      { name: "Node.js & Express.js", context: "RESTful Service Design, Routing Pipelines, Middleware" },
      { name: "HTML5 & CSS3", context: "Semantic DOM, Responsive Flexbox & Grid, Modern Layouts" },
      { name: "Tailwind CSS", context: "Design Tokens, Fluid Typography, Minimalist Styling" }
    ]
  },
  {
    categoryNumber: "03",
    categoryName: "Databases & Vision Systems",
    items: [
      { name: "MongoDB Atlas", context: "NoSQL Document Modeling, Collections, Aggregation" },
      { name: "Database Management Systems (DBMS)", context: "Relational Queries, Normalization, SQL Integrity" },
      { name: "OpenCV", context: "Background Subtractor MOG2, Morphological Contours, Thresholding" },
      { name: "Third-Party REST APIs", context: "Google Maps, Google Places, OpenWeather API Integration" }
    ]
  },
  {
    categoryNumber: "04",
    categoryName: "Computer Science Core & Practices",
    items: [
      { name: "Data Structures & Algorithms", context: "Active Problem Solver on LeetCode & HackerRank" },
      { name: "Object-Oriented Programming (OOP)", context: "Inheritance, Polymorphism, Abstraction, Encapsulation" },
      { name: "Git & GitHub", context: "Version Control, Branch Management, Pull Requests" },
      { name: "Soft Skills", context: "Leadership (SIH '24 Lead), Teamwork, Adaptability, Time Management" }
    ]
  }
];

export const educationHistory = [
  {
    institution: "Padmasri Dr. B.V. Raju Institute of Technology (BVRIT)",
    location: "Medak, Telangana, India",
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "Aug 2023 – 2027 (Expected)",
    score: "CGPA: 8.47 / 10",
    details: "Autonomous institute accredited by NBA & NAAC. Comprehensive coursework in Data Structures, Algorithms, Database Systems, Computer Networks, Operating Systems, and Machine Learning."
  },
  {
    institution: "Narayana Junior College",
    location: "Hyderabad, Telangana, India",
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    period: "2021 – 2023",
    score: "Percentage: 98.0%",
    details: "Secured top academic tier with distinction in Mathematics and Physical Sciences."
  },
  {
    institution: "State Engineering Entrance (TS EAMCET)",
    location: "Telangana, India",
    degree: "State Competitive Examination — Engineering Stream",
    period: "2023",
    score: "State Rank: 13,182",
    details: "Secured top percentile state rank with 68.30 normalized marks in Mathematics, Physics, and Chemistry, qualifying for merit-based B.Tech CSE seat."
  }
];

export const certificationsHistory = [
  {
    title: "Programming Essentials in C++ & Python",
    issuer: "Cisco Networking Academy",
    date: "Certified",
    score: "Verified Completion",
    details: "Core algorithmic logic, memory handling, syntax, and object-oriented programming."
  },
  {
    title: "Basics in C and Python Programming",
    issuer: "Infosys Springboard",
    date: "Certified",
    score: "Verified Completion",
    details: "Procedural programming paradigms, data structures, and foundational computer science."
  },
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    date: "December 2025",
    score: "Credential ID: 7198308",
    verifyUrl: "https://sforce.co/verifycerts",
    details: "Autonomous AI agents, enterprise workflow architecture, and validation standards."
  },
  {
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF Standard English Test",
    date: "December 2025",
    score: "67 / 100 (CEFR C1 Advanced)",
    verifyUrl: "https://cert.efset.org/XCjjmD",
    details: "C2 Proficient in Listening (71/100) and C1 Advanced in Reading (62/100)."
  }
];
