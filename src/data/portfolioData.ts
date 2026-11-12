export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  stack: string[];
  metrics: string[];
  features: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  degreeOrLevel: string;
  period: string;
  honors: string;
  location: string;
  highlights: string[];
}

export interface AwardItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  category: 'sports' | 'arts' | 'academic' | 'special';
  badge: string;
  description: string;
}

export interface SkillItem {
  name: string;
  category: 'languages' | 'frameworks' | 'database' | 'hardware' | 'tools';
  proficiency: number; // 0 - 100
  experience: string;
  description: string;
  keyProjects: string[];
}

export const PERSONAL_INFO = {
  fullName: "James Andrei U. Reyes",
  preferredName: "Jaja",
  age: 20,
  birthDate: "July 07, 2006",
  luckyNumber: "07",
  location: "Niog 1, Bacoor City, Cavite, Philippines",
  role: "3rd-Year Computer Science Student",
  specialization: "Aspiring AI Developer & Full-Stack Technologist",
  institution: "Cavite State University - Bacoor Campus",
  email: "jajareyes72@gmail.com",
  phone: "09940381683",
  facebookUrl: "https://facebook.com",
  facebookName: "Jaja Reyes",
  githubUrl: "https://github.com",
  philosophyQuote: "There's no AI that can replace the human; it can just help human to make the works easier and emphasize the thinking of others.",
  favoriteFood: "Sinigang na Baboy",
  favoriteColor: "Electric Cobalt & Deep Obsidian Blue",
  hobbies: ["Basketball", "Billiards", "Late-Night Coding", "Lo-Fi Music Listening"],
};

export const PROJECTS: Project[] = [
  {
    id: "portfolio-3d",
    title: "Flagship 3D Developer Portfolio",
    category: "Creative Technology / WebGL",
    tagline: "High-performance WebGL portfolio with procedural 3D neural core & zero-latency architecture",
    description: "James Andrei's flagship 1st project. Built using React, Three.js, Tailwind CSS, and Framer Motion. Features a custom procedural icosahedron core, 407 reactive particle nodes honoring lucky number 07, studio PBR lighting, and a 60+ FPS performance budget.",
    image: "/src/assets/images/bento_night_coding_1794502781497.jpg",
    stack: ["React", "Three.js", "TypeScript", "Tailwind CSS", "WebGL"],
    metrics: ["60+ FPS Performance", "0 External Asset 404s", "407 Particle Nodes"],
    features: [
      "Custom 3D procedural neural core with interactive orbital rings and vertex displacement",
      "Interactive Human + AI Symbiosis playground visualizer",
      "Collapsible Zen Mode HUD adhering to strict non-occlusion guidelines",
      "Real Web Audio lo-fi tone synthesizer and interactive Python code execution runner"
    ],
    githubUrl: "https://github.com/jajareyes72/portfolio-3d",
    liveUrl: "https://portfolio-jajareyes.vercel.app",
    featured: true
  },
  {
    id: "smart-iot-irrigation",
    title: "Smart IoT Irrigation Hypervisor",
    category: "Hardware & Embedded Systems",
    tagline: "Automated microclimate and soil moisture control system with real-time web telemetry",
    description: "An integrated precision agriculture prototype utilizing Arduino microcontrollers and calibrated capacitive soil moisture and electrical conductivity (EC) sensors. Regulates solenoid water valves automatically to optimize water consumption while preventing root rot.",
    image: "/src/assets/images/project_iot_irrigation_1794502779932.jpg",
    stack: ["Arduino C++", "ESP32", "Python", "MQTT", "Node.js", "Chart.js"],
    metrics: ["38% Water Savings", "<500ms Sensor Telemetry", "100% Automated Actuation"],
    features: [
      "Multi-zone capacitive soil moisture probing and threshold-driven valve actuation",
      "Wireless telemetry broadcasting via MQTT to a centralized web dashboard",
      "Automated pump failure detection and emergency shutoff logic",
      "Historical moisture tracking with statistical drift analysis"
    ],
    githubUrl: "https://github.com/jajareyes72/smart-iot-irrigation",
    liveUrl: "https://github.com/jajareyes72/smart-iot-irrigation",
    featured: true
  },
  {
    id: "gaming-stats-hub",
    title: "Polyglot Gaming Telemetry & Trophy Hub",
    category: "Full-Stack & Data Visualization",
    tagline: "Comprehensive competitive esports analytics dashboard with holographic achievement badges",
    description: "A centralized match analytics and stats tracking hub for competitive multiplayer games. Ingests player telemetry data, calculates K/D ratios, headshot efficiency, win streaks, and renders 3D polygonal achievement trophies in real time.",
    image: "/src/assets/images/project_gaming_hub_1794502780562.jpg",
    stack: ["TypeScript", "React", "Node.js", "MongoDB", "Tailwind CSS", "Canvas API"],
    metrics: ["<120ms API Response", "15+ Game Metrics Tracked", "Interactive 3D Trophies"],
    features: [
      "Real-time game session logging with automated statistical summaries",
      "Holographic interactive trophy cards with 3D tilt illumination",
      "Comparative teammate synergy analysis and performance radar charts",
      "Scalable REST API with robust MongoDB aggregation pipelines"
    ],
    githubUrl: "https://github.com/jajareyes72/gaming-telemetry-hub",
    liveUrl: "https://github.com/jajareyes72/gaming-telemetry-hub",
    featured: true
  },
  {
    id: "arngren-redesign",
    title: "Arngren.net UI/UX Modernization",
    category: "Frontend Architecture & UX",
    tagline: "Transforming the famous chaotic catalog into a razor-sharp modern cyber e-commerce experience",
    description: "A comprehensive design engineering case study and frontend overhaul of the notoriously cluttered vintage website Arngren.net. Reimagined into a streamlined, high-contrast catalog featuring categorized navigation, fuzzy search, and accessible dark-mode UI.",
    image: "/src/assets/images/bento_night_coding_1794502781497.jpg",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    metrics: ["99 Lighthouse Accessibility", "3.2x Faster Browsing", "Instant Client Filter"],
    features: [
      "Structured product taxonomy replacing unstructured image links",
      "Instant multi-attribute search and category filters",
      "Accessible keyboard navigation and WCAG AA contrast compliance",
      "Clean cyber-industrial aesthetics preserving the quirky retro tech catalog spirit"
    ],
    githubUrl: "https://github.com/jajareyes72/arngren-redesign",
    liveUrl: "https://github.com/jajareyes72/arngren-redesign",
    featured: false
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "college",
    institution: "Cavite State University - Bacoor Campus",
    degreeOrLevel: "Bachelor of Science in Computer Science (BSCS)",
    period: "2023 - Present (Currently 3rd Year)",
    honors: "2nd Year Dean's Lister",
    location: "Bacoor City, Cavite",
    highlights: [
      "Recognized on the Dean's List for exemplary academic performance in core Computer Science curriculum",
      "Specialized coursework in Data Structures, Algorithms, Automata, Object-Oriented Programming, and Web Systems",
      "Active participant in campus tech events and extracurricular cultural triumphs"
    ]
  },
  {
    id: "shs",
    institution: "Senior High School within Bacoor Elementary School",
    degreeOrLevel: "Senior High School — STEM Track",
    period: "2021 - 2023",
    honors: "Graduated with Consistent Honors",
    location: "Bacoor City, Cavite",
    highlights: [
      "Maintained consistent academic honors across all terms",
      "Excelled in Advanced Mathematics, Physics, and introductory programming coursework",
      "Collaborated on group science research initiatives and peer tutoring"
    ]
  },
  {
    id: "jhs",
    institution: "laVlaize Integrated Science School",
    degreeOrLevel: "Junior High School",
    period: "2017 - 2021",
    honors: "Graduated with Consistent Honors",
    location: "Bacoor City, Cavite",
    highlights: [
      "Awarded Certificate of Graduation with Consistent Academic Honors",
      "Built a strong foundation in science, analytical thinking, and mathematics",
      "Participated actively in science fairs and institutional competitions"
    ]
  },
  {
    id: "elem",
    institution: "Gov. P.F. Espiritu Elementary School",
    degreeOrLevel: "Elementary Education",
    period: "2011 - 2017",
    honors: "Foundational Academic Excellence",
    location: "Bacoor City, Cavite",
    highlights: [
      "Completed primary education with strong academic and leadership participation",
      "Sparked lifelong curiosity for computers, science, and creative arts"
    ]
  }
];

export const AWARDS: AwardItem[] = [
  {
    id: "award-zumba",
    title: "Champion in NSTP Zumba",
    organization: "Cavite State University - Bacoor Campus",
    year: "2024",
    category: "sports",
    badge: "1st Place Trophy",
    description: "Led team to first place victory in the competitive NSTP university-wide Zumba fitness championship, combining rhythm, high energy, and coordinated athletic movement."
  },
  {
    id: "award-choreo",
    title: "Best in Choreography",
    organization: "Cavite State University - Bacoor Campus",
    year: "2024",
    category: "arts",
    badge: "Special Recognition",
    description: "Honored with the Best in Choreography award for stage direction, movement timing, and innovative dance routine design during collegiate performances."
  },
  {
    id: "award-cramer",
    title: "Certificate of Most Cramer",
    organization: "Academic & Cohort Recognition",
    year: "2023",
    category: "special",
    badge: "Distinction Certificate",
    description: "Celebrated among peers for intense, high-output preparation and unmatched focus during critical academic deadlines and project sprints."
  },
  {
    id: "award-jhs",
    title: "Certificate of Graduation with Honors",
    organization: "laVlaize Integrated Science School",
    year: "2021",
    category: "academic",
    badge: "Honor Graduate",
    description: "Formal certification of completion of Junior High School education maintaining consistent academic honor standing across all four years."
  }
];

export const SKILLS: SkillItem[] = [
  {
    name: "Python",
    category: "languages",
    proficiency: 88,
    experience: "3+ Years",
    description: "Core language for AI experimentation, data analysis, automation scripts, and backend prototyping.",
    keyProjects: ["AI Neural Playground", "Automated Irrigation Logic", "Data Analysis Scripts"]
  },
  {
    name: "JavaScript & TypeScript",
    category: "languages",
    proficiency: 85,
    experience: "3+ Years",
    description: "Primary language for responsive modern web applications, interactive UI, and asynchronous services.",
    keyProjects: ["3D Developer Portfolio", "Gaming Telemetry Hub", "Interactive Web Apps"]
  },
  {
    name: "C#",
    category: "languages",
    proficiency: 76,
    experience: "2 Years",
    description: "Object-oriented software development, .NET fundamentals, and algorithmic problem solving.",
    keyProjects: ["Desktop Application Systems", "Algorithm Implementations"]
  },
  {
    name: "React & Vite",
    category: "frameworks",
    proficiency: 86,
    experience: "2+ Years",
    description: "Modern component architecture, custom hooks, state management, and high-performance SPA bundling.",
    keyProjects: ["3D Developer Portfolio", "Arngren Redesign", "Gaming Hub"]
  },
  {
    name: "Three.js & WebGL",
    category: "frameworks",
    proficiency: 80,
    experience: "1+ Year",
    description: "3D scene construction, procedural geometries, PBR studio lighting, shaders, and particle dynamics.",
    keyProjects: ["Flagship 3D Portfolio Core", "3D Polygonal Trophies"]
  },
  {
    name: "Tailwind CSS",
    category: "frameworks",
    proficiency: 92,
    experience: "2+ Years",
    description: "Utility-first design systems, responsive dark-mode UI, custom typography scales, and micro-interactions.",
    keyProjects: ["All Modern Web Projects", "Design System Implementation"]
  },
  {
    name: "MySQL",
    category: "database",
    proficiency: 82,
    experience: "2 Years",
    description: "Relational database design, normalized schemas, complex joins, indexing, and transactional integrity.",
    keyProjects: ["Student Management DB", "Inventory Systems"]
  },
  {
    name: "MongoDB",
    category: "database",
    proficiency: 78,
    experience: "1.5 Years",
    description: "NoSQL document modeling, JSON pipelines, aggregation queries, and flexible data schemas.",
    keyProjects: ["Gaming Telemetry Hub", "Player Profiles Store"]
  },
  {
    name: "Arduino & IoT",
    category: "hardware",
    proficiency: 80,
    experience: "2 Years",
    description: "Microcontroller programming, sensor integration (soil moisture, temperature, EC), relays, and actuators.",
    keyProjects: ["Smart IoT Irrigation Hypervisor", "Sensor Telemetry Rig"]
  },
  {
    name: "UI/UX & Figma",
    category: "tools",
    proficiency: 84,
    experience: "2 Years",
    description: "Wireframing, high-fidelity responsive interface mockups, interaction choreography, and typography pairing.",
    keyProjects: ["Portfolio Design System", "Arngren.net Overhaul"]
  },
  {
    name: "Git & GitHub",
    category: "tools",
    proficiency: 85,
    experience: "3 Years",
    description: "Version control workflows, branching, commits, release management, and GitHub deployments.",
    keyProjects: ["All Software Repositories"]
  }
];
