export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  href: string;
  cta: string;
  highlight?: string;
  features?: string[];
  /** Editorial cover treatment — no fabricated product screenshots. */
  cover: "network" | "route" | "system";
  flow: string[];
};

export const projects: Project[] = [
  {
    number: "01",
    title: "Connexus",
    category: "Full-Stack · Social Platform",
    description:
      "A professional networking platform inspired by LinkedIn, built from the ground up with authentication, profiles, networking functionality and a modern social experience.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "JavaScript"],
    href: "https://github.com/sahils1201/Connexus-LinkedIn-Clone",
    cta: "View on GitHub",
    cover: "network",
    flow: ["People", "Connections", "Network"],
  },
  {
    number: "02",
    title: "Quicko",
    category: "Full-Stack · E-Commerce",
    description:
      "A full-stack quick-commerce platform inspired by modern instant-delivery experiences, built to explore scalable e-commerce architecture and real-time user experiences.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript"],
    href: "https://github.com/sahils1201/Quicko",
    cta: "View on GitHub",
    cover: "route",
    flow: ["Discover", "Order", "Deliver"],
  },
  {
    number: "03",
    title: "LISA",
    category: "AI · Product · Learning Technology",
    description:
      "An AI-first Learning Experience Platform designed to help organizations create, deliver and analyze learning experiences at scale.",
    highlight: "AI-powered learning ecosystem",
    features: [
      "AI Tutors",
      "Content Studio",
      "Pulse Analytics",
      "JIT Learning",
      "Enterprise Integrations",
    ],
    technologies: ["AI Tutors", "Content Studio", "Pulse Analytics", "JIT Learning"],
    href: "https://lisaapp.in/",
    cta: "Visit LISA",
    cover: "system",
    flow: ["Create", "Learn", "Analyze"],
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Community", href: "#community" },
  { label: "Beyond", href: "#beyond" },
  { label: "Contact", href: "#contact" },
];

export const socials = {
  github: "https://github.com/sahils1201",
  linkedin: "https://www.linkedin.com/in/sahilsable/",
};

export type Experience = {
  org: string;
  role: string;
  points: string[];
  impact?: string;
  tags: string[];
};

export const experiences: Experience[] = [
  {
    org: "LetsUpgrade",
    role: "BD & Tech / Technology Intern",
    points: [
      "Built and improved the company website",
      "Created n8n automation workflows",
      "Automated business development processes",
      "Built AI calling workflows",
      "Worked on lead nurturing systems",
    ],
    impact: "Impact — reduced manual operational effort by approximately 40%.",
    tags: ["n8n", "AI Calling", "Firebase", "Web Development", "API Integrations"],
  },
  {
    org: "GDG Cloud Mumbai",
    role: "Media Head",
    points: [
      "Lead media and content for a technology-focused developer community",
      "Coordinate social media and content around community initiatives",
      "Communicate technical events and sessions to a wider audience",
      "Support event coverage and post-event storytelling",
      "Work with organizers and speakers to shape clear community communication",
    ],
    tags: ["Media", "Content", "Community", "Communication", "Events"],
  },
];

export type Volunteering = {
  org: string;
  role: string;
  context: string;
  highlights: string[];
};

export const volunteering: Volunteering[] = [
  {
    org: "Mumbai HACKS",
    role: "Volunteer",
    context: "Generative AI hackathon and technology community event.",
    highlights: [
      "Event support",
      "Community participation",
      "Technology ecosystem exposure",
      "Supporting participants and organizers",
    ],
  },
  {
    org: "FlutterFlow Developer Group Mumbai",
    role: "Community / Event Volunteer",
    context: "FlutterFlow Developer Group Mumbai Community Day.",
    highlights: [
      "Event volunteering",
      "Community engagement",
      "Supporting developer events",
      "Exposure to builders and technology communities",
    ],
  },
  {
    org: "GDG Cloud Mumbai",
    role: "Community Contributor",
    context: "Ongoing contribution to a developer community as part of the media team.",
    highlights: [
      "Content and communication support",
      "Event coverage",
      "Helping community initiatives reach a wider audience",
    ],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["C", "C++", "Python", "Java", "JavaScript"] },
  { title: "Frontend", items: ["React", "HTML", "CSS", "Tailwind CSS", "Redux", "Vite"] },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "n8n", "Jenkins", "Docker", "AWS", "GCP", "Firebase"],
  },
  {
    title: "AI / Automation",
    items: [
      "AI Agents",
      "LLM Workflows",
      "Workflow Automation",
      "AI Calling",
      "API Integrations",
    ],
  },
];

export const exploring = [
  "AI Agents",
  "Product Engineering",
  "Decision Intelligence",
  "Automation Systems",
  "Cloud Infrastructure",
  "Developer Experience",
];

export const pipeline = [
  { label: "Lead Database", note: "Structured lead capture and enrichment as the entry point." },
  { label: "Automation Engine", note: "n8n workflows orchestrating each step end to end." },
  { label: "AI Voice Agent", note: "AI calling agent that reaches out and holds the first conversation." },
  { label: "Qualification", note: "Responses scored and routed based on intent." },
  { label: "Follow-up", note: "WhatsApp, SMS and email sequences triggered automatically." },
  { label: "Conversion", note: "Qualified leads handed over with full context." },
];

export const pillars = [
  { key: "Build", note: "Software and products." },
  { key: "Automate", note: "Systems and workflows." },
  { key: "Lead", note: "Communities and events." },
  { key: "Explore", note: "Mountains, roads and unfamiliar places." },
  { key: "Learn", note: "From every environment I enter." },
];

export const beyondItems = [
  "Public speaking",
  "Event hosting",
  "Leadership",
  "Hackathons",
  "Community volunteering",
  "Theatre / stage experience",
  "Sports",
  "Travel",
  "Mountaineering",
];

export const mountainLessons = [
  {
    title: "Preparation beats confidence.",
    note: "Confidence gets you started. Preparation gets you through.",
  },
  {
    title: "Progress is rarely linear.",
    note: "There are climbs, descents, wrong turns and long stretches where nothing seems to change.",
  },
  {
    title: "Discomfort is information.",
    note: "Being uncomfortable doesn't automatically mean you should stop.",
  },
  {
    title: "Respect the terrain.",
    note: "Whether it's a mountain, a road or a technical problem — understanding the environment matters.",
  },
  {
    title: "You don't need to see the entire route.",
    note: "Sometimes you only need to know what the next safe step is.",
  },
  {
    title: "Keep moving.",
    note: "You don't always need to know exactly where the journey ends to take the next step.",
  },
];

export const expeditionTimeline = [
  { name: "Kedarkantha", note: "~4,000m" },
  { name: "Spiti", note: "Solo expedition" },
  { name: "Ladakh", note: "Umling La · 5,800m / 19,024ft" },
];
