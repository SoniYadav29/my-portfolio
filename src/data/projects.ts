export interface Project {
  id: number;
  emoji: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    emoji: "💼",
    title: "Job Portal",
    category: "Web Application",
    description:
      "A responsive job portal designed to simplify recruitment by allowing users to browse jobs through a clean and intuitive interface.",

    features: [
      "Job Listings",
      "Job Details",
      "Search",
      "Filtering",
      "Responsive Layout",
      "Company Profiles",
    ],

    tech: ["Next.js", "React", "Tailwind CSS"],

    image: "/techstack/hireblog.png",

    github: "#",
    live: "#",
  },

  {
    id: 2,
    emoji: "📝",
    title: "Blog Admin Panel",
    category: "Dashboard",

    description:
      "A clean admin dashboard built for managing blog content with reusable components and responsive layouts.",

    features: [
      "Dashboard Overview",
      "Blog Management",
      "Create & Edit Posts",
      "Category Management",
      "Responsive Admin",
      "Reusable Components",
    ],

    tech: ["Next.js", "React", "Tailwind CSS"],

    image: "/techstack/adminpanel.png",

    github: "#",
    live: "#",
  },

  {
    id: 3,
    emoji: "🏢",
    title: "Surekha IT Solutions",
    category: "Business Website",
    description:
      "A modern corporate website developed to showcase company services, technologies, and business solutions with a clean UI and responsive design.",

    features: [
      "Modern Landing Page",
      "Company Overview",
      "Services Section",
      "Technology Showcase",
      "Careers Section",
      "Contact Form",
      "Responsive Design",
      "Optimized Performance",
    ],

    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],

    image: "/techstack/surekhaItsolutions.png",

    github: "#",
    live: "#",
  },

  {
    id: 4,
    emoji: "👨‍💻",
    title: "Portfolio Website",
    category: "Personal Portfolio",

    description:
      "A modern portfolio website showcasing projects, skills and experience with beautiful animations and responsive layouts.",

    features: [
      "Animated Hero",
      "Project Showcase",
      "Skills",
      "Contact Form",
      "Resume Download",
      "Responsive Design",
    ],

    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],

    image: "/techstack/portfolio.png",

    github: "#",
    live: "#",
  },

  {
    id: 5,
    emoji: "💅",
    title: "Petal Polish",
    category: "E-Commerce Website",
    description:
      "Petal Polish is a modern beauty and cosmetics website designed to showcase premium nail polish collections through an elegant and responsive user interface. The project focuses on creating a visually appealing shopping experience with clean layouts, intuitive navigation, and product-focused design.",

    features: [
      "Modern Landing Page",
      "Product Showcase",
      "Category-Based Browsing",
      "Featured Collections",
      "Responsive Design",
      "Interactive UI Components",
      "Smooth Navigation",
      "Mobile-Friendly Layout",
    ],

    tech: ["Next.js", "React", "Tailwind CSS", "JavaScript"],

    image: "/techstack/nailsalon.png",

    github: "#",
    live: "#",
  },
];
