export const personalInfo = {
  name: "Matta Sujith Singh",
  title: "Computer Science Undergraduate & Software Developer",
  subheading: "B.Tech CSE student at BVRIT building full-stack web applications and exploring applied AI & computer vision.",
  bio: "I am a 3rd-year Computer Science undergraduate at BVRIT with a strong foundation in Data Structures, Algorithms, and full-stack engineering. Experienced in building production-grade MERN applications, integrating multi-source external APIs, and developing computer vision solutions for smart urban mobility.",
  location: "Hyderabad / Medak, Telangana, India",
  email: "23211a05j3@bvrit.ac.in",
  phone: "+91 7032678348",
  cgpa: "8.6 / 10",
  graduationYear: "2027",
  status: "Available for Internships & Projects",
  avatarUrl: "/sujith_avatar.jpg",
  resumeUrl: "/Matta_Sujith_Singh_Resume.pdf",
  socials: {
    github: "https://github.com/sujithsinghh",
    linkedin: "https://www.linkedin.com/in/matta-sujith-singh-1a815a293",
    leetcode: "https://leetcode.com/u/sujith_singh/",
    smartinterviews: "https://smartinterviews.in/profile/sujith_singh",
  }
};

export const verifiedMetrics = [
  { label: "B.Tech CGPA", value: "8.6 / 10", detail: "BVRIT Autonomous (CSE 2023–2027)" },
  { label: "Hackathon Qualifier", value: "SIH 2024", detail: "Level 2 National Qualifier (Smart Traffic)" },
  { label: "English Proficiency", value: "C1 Advanced", detail: "EF SET Certificate (67/100, Listening 71 C2)" },
  { label: "API Integrations", value: "6+ Services", detail: "Amadeus, OpenWeather, Foursquare, etc." }
];

export const projects = [
  {
    id: "tourist-guide",
    title: "Smart Tourist Guide & Travel Planner (WanderAI)",
    shortDescription: "Full-stack travel planning platform generating personalized day-by-day itineraries, real-time hotel pricing, live weather, and dynamic budget breakdowns.",
    category: "Full-Stack Web Application",
    featured: true,
    tagline: "End-to-end MERN application powered by 6 real-world external APIs and AI recommendations.",
    technologies: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT Auth",
      "Amadeus API",
      "OpenWeather API",
      "Foursquare Places API",
      "Visual Crossing API",
      "Wikipedia API",
      "Tailwind CSS"
    ],
    github: "https://github.com/sujithsinghh/Tourist_Guide",
    liveDemo: null,
    architectureDetails: {
      client: "React 18 Single Page Application with modular component hierarchy (DayCard, HotelCard, CostSummary, PlanningForm).",
      server: "Node.js & Express RESTful API with dedicated service layers: hotelService, weatherService, and itineraryGenerator.",
      database: "MongoDB Atlas with Mongoose ODM storing user profiles, hashed credentials, and saved travel itineraries.",
      auth: "Stateless JWT token authentication with bcryptjs password hashing and route-level protection middleware."
    },
    keyFeatures: [
      "Custom day-by-day itinerary generation tailored to duration, group size, and travel style.",
      "Real-time hotel availability and live pricing via Amadeus Hotel API integration.",
      "Live and multi-day forecasted weather alerts via OpenWeather and Visual Crossing APIs.",
      "Curated culinary and points-of-interest discovery via Foursquare Places API.",
      "Automated budget breakdown calculating lodging, transit, food, and activity allocations.",
      "Secure user authentication with saved trip history persisted in MongoDB."
    ],
    challenges: [
      "Aggregating and normalizing data from 6 asynchronous APIs with varying rate limits and payload formats into a unified sub-2s client response.",
      "Handling edge-case budget distributions when destination lodging prices exceeded the target threshold."
    ]
  },
  {
    id: "traffic-optimization",
    title: "Smart Traffic Signal Optimization using Computer Vision",
    shortDescription: "Real-time density-driven traffic control pipeline using OpenCV background subtraction to dynamically allocate green light durations per lane.",
    category: "Computer Vision & Smart Cities",
    featured: true,
    tagline: "Smart India Hackathon 2024 Level 2 National Qualifier Project.",
    technologies: [
      "Python",
      "OpenCV",
      "MOG2 Subtractor",
      "Flask",
      "NumPy",
      "Pandas",
      "HTML5 / CSS3",
      "JavaScript",
      "REST API"
    ],
    github: "https://github.com/sujithsinghh",
    liveDemo: null,
    achievements: "Smart India Hackathon (SIH) 2024 — Level 2 National Qualifier; Presented at BVRIT Engineering College.",
    architectureDetails: {
      cvPipeline: "Camera feed intake $\\rightarrow$ OpenCV MOG2 background subtractor $\\rightarrow$ morphological opening $\\rightarrow$ contour detection for real-time vehicle density per lane.",
      algorithm: "Adaptive timing algorithm calculating density ratios across North, South, East, and West lanes to allocate proportional green light timings.",
      dashboard: "Flask web server serving real-time JSON metrics (`/get-traffic-data`) to an interactive monitoring dashboard updating every 5 seconds."
    },
    keyFeatures: [
      "Real-time vehicle counting per lane using contour area filtering and thresholding.",
      "Adaptive signal allocation algorithm eliminating fixed-timer idle delays at empty intersections.",
      "Interactive monitoring dashboard displaying live lane vehicle densities and allocated signal percentages.",
      "Fail-safe minimum threshold ensuring pedestrian crossing time across all intersection legs."
    ],
    challenges: [
      "Filtering out shadows and illumination shifts using OpenCV morphological operators without missing smaller vehicles (two-wheelers).",
      "Ensuring sub-100ms video processing loop to prevent latency between vehicle detection and signal timing updates."
    ]
  },
  {
    id: "urban-mobility-paper",
    title: "Urban Mobility Optimization Through Deep Learning",
    shortDescription: "Research paper investigating the AlexNet deep convolutional architecture for predictive urban traffic congestion management.",
    category: "Technical Research & Publication",
    featured: false,
    tagline: "Co-authored technical research presented at B.V. Raju Institute of Technology.",
    technologies: [
      "Deep Learning",
      "AlexNet Architecture",
      "Python",
      "Convolutional Neural Networks",
      "Traffic Data Modeling"
    ],
    github: "https://github.com/sujithsinghh",
    keyFeatures: [
      "Theoretical framework modeling urban traffic flow constraints and rigid fixed-time signal deficiencies.",
      "AlexNet convolutional neural network adaptation for spatial-temporal traffic congestion prediction.",
      "Comparative analysis showing enhanced vehicular throughput and reduced congestion bottlenecks in simulated urban corridors."
    ]
  },
  {
    id: "mazetilt-vr",
    title: "MazeTilt — Interactive VR Physics Simulation",
    shortDescription: "Virtual reality game prototype exploring spatial motion, controller orientation, and physics-driven labyrinth navigation in 3D.",
    category: "Virtual Reality & Game Dev",
    featured: false,
    tagline: "Physics-based spatial interaction prototype built with Unity and C#.",
    technologies: [
      "Unity Engine",
      "C#",
      "VR Interaction System",
      "Physics Engine",
      "3D Spatial Math"
    ],
    github: "https://github.com/sujithsinghh",
    keyFeatures: [
      "Realistic rigid-body physics simulation reflecting real-world angular acceleration and restitution.",
      "Dynamic controller tilt mapping translating user hand pitch and roll to the virtual maze plane.",
      "Spatial audio feedback and progressive obstacle mechanics."
    ]
  }
];

export const skillsData = {
  languages: [
    { name: "Python", context: "Computer Vision (OpenCV), Flask, AI Scripting" },
    { name: "C++", context: "Data Structures, Algorithmic Problem Solving" },
    { name: "Java", context: "Object-Oriented Programming, Academic Core" },
    { name: "JavaScript (ES6+)", context: "Full-Stack Web Dev, Async/Await, DOM" },
    { name: "TypeScript", context: "Modern Typed React & Next.js Components" }
  ],
  frontend: [
    { name: "React.js (v18)", context: "Component Architecture, Hooks, Context API" },
    { name: "Next.js", context: "App Router, SSR, Client/Server Component Boundary" },
    { name: "Tailwind CSS", context: "Utility-First Responsive Styling, Custom Tokens" },
    { name: "HTML5 & CSS3", context: "Semantic DOM, Flexbox, CSS Grid, Responsive Design" },
    { name: "Framer Motion", context: "Spring Physics, Gesture & Scroll Animations" },
    { name: "Axios", context: "REST API Integration, Interceptors, Error Handling" }
  ],
  backend: [
    { name: "Node.js", context: "Event Loop, Modular Server Architecture, Async I/O" },
    { name: "Express.js", context: "Middleware Pipelines, Routing, REST API Design" },
    { name: "Python (Flask)", context: "Lightweight Microservices, Real-Time Data Endpoints" },
    { name: "JWT & bcryptjs", context: "Stateless Authentication, Password Hashing" },
    { name: "REST API Design", context: "CRUD Operations, Endpoint Architecture, Status Codes" }
  ],
  databaseCloud: [
    { name: "MongoDB & Mongoose", context: "Document Modeling, Aggregations, Schema Validation" },
    { name: "MongoDB Atlas", context: "Cloud Cluster Management, Connection Pools" },
    { name: "MySQL", context: "Relational Queries, Normalization, Foreign Keys" },
    { name: "Vercel & Render", context: "Continuous Deployment, Environment Secrets, Hosting" }
  ],
  machineLearning: [
    { name: "OpenCV", context: "Background Subtraction (MOG2), Contour Detection" },
    { name: "NumPy & Pandas", context: "Array Operations, Dataset Preprocessing, Vector Math" },
    { name: "AlexNet / CNNs", context: "Deep Learning Traffic Pattern Modeling" },
    { name: "Model Deployment", context: "Integrating Python ML Pipelines with Web Endpoints" }
  ],
  toolsPractices: [
    { name: "Git & GitHub", context: "Version Control, Branching, PRs, Issue Tracking" },
    { name: "VS Code", context: "Primary IDE, Extensions, Debugger Integration" },
    { name: "Postman", context: "API Testing, Payload Validation, Route Inspection" },
    { name: "DSA Problem Solving", context: "Active on LeetCode & SmartInterviews" }
  ]
};

export const educationData = [
  {
    institution: "Padmasri Dr. B.V. Raju Institute of Technology (BVRIT)",
    location: "Medak, Telangana, India",
    degree: "Bachelor of Technology in Computer Science and Engineering (CSE)",
    period: "August 2023 – 2027 (Expected)",
    score: "CGPA: 8.6 / 10",
    details: "Autonomous institute accredited by NBA & NAAC. Coursework in Data Structures & Algorithms, Database Systems, Computer Networks, Operating Systems, Software Engineering, and Machine Learning."
  },
  {
    institution: "Narayana Junior College",
    location: "Hyderabad, Telangana, India",
    degree: "Intermediate — MPC (Mathematics, Physics, Chemistry)",
    period: "2021 – 2023",
    score: "Percentage: 98.0%",
    details: "Top tier academic score with distinction in Mathematics and Physical Sciences."
  }
];

export const certificationsData = [
  {
    title: "Salesforce Certified Agentforce Specialist",
    issuer: "Salesforce",
    credentialId: "7198308",
    date: "December 16, 2025",
    verifyUrl: "https://sforce.co/verifycerts",
    highlight: "Autonomous AI Agents & Enterprise Architecture"
  },
  {
    title: "EF SET English Certificate — C1 Advanced",
    issuer: "EF Standard English Test",
    score: "67 / 100 (CEFR C1 Advanced)",
    subscore: "Listening: 71/100 (C2 Proficient) | Reading: 62/100 (C1 Advanced)",
    date: "December 28, 2025",
    verifyUrl: "https://cert.efset.org/XCjjmD",
    highlight: "Fluent Technical & Professional Communication"
  },
  {
    title: "AI - DevOps Engineer Certificate Programme",
    issuer: "Reliance Foundation Skilling Academy",
    credentialId: "RFSA000629837",
    date: "September 27, 2026",
    highlight: "Cloud Deployment & AI Workflow Automation"
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Simplilearn",
    credentialId: "9075690",
    date: "September 30, 2025",
    highlight: "LLMs, Prompt Engineering & Model Foundations"
  },
  {
    title: "Programming Essentials in C++ & Python",
    issuer: "Cisco Networking Academy",
    date: "Certified",
    highlight: "Core Algorithm & Language Fundamentals"
  }
];
