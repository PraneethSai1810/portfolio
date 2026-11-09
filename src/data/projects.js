import legalseg from "../assets/projects/legalseg.png";
import scenesolver from "../assets/projects/scenesolver.png";
import diwali from "../assets/projects/diwali.png";
import supportticket from "../assets/projects/supportticket.png";

const projects = [
  {
    id: "legalseg",
    title: "LegalSeg",
    badge: "NLP System",
    description:
      "Classifies rhetorical roles in Indian legal judgements to help structure arguments faster. Built modular REST APIs with JWT auth and async polling for a HuggingFace Transformer pipeline (~15–20s per document). Deployed on Render + Vercel with <1s response time on non-ML endpoints.",
    image: legalseg,
    tags: ["React", "Node.js", "MongoDB", "Transformers", "JWT Auth", "Express"],
    github: "https://github.com/PraneethSai1810/LegalSeg",
    live: "https://legalseg-frontends.vercel.app/",
    featured: true,
  },
  {
    id: "scenesolver",
    title: "SceneSolver",
    badge: "Computer Vision",
    description:
      "Crime scene analysis tool that identifies objects and context from uploaded images using YOLOv8 and Vision Transformer. FastAPI backend handles ML inference (~12–13s per image) with REST endpoints averaging ~1s for auth and retrieval. Full pipeline from upload to structured MongoDB storage.",
    image: scenesolver,
    tags: ["React", "FastAPI", "MongoDB", "YOLOv8", "ViT", "Python"],
    github: "https://github.com/PraneethSai1810/SceneSolver",
    live: "https://scene-solver-eight.vercel.app/",
    featured: false,
  },
 {
  id: "support-ticket-system",
  title: "Support Ticket System",
  badge: "Backend Development",
  description:
    "Backend support ticket management system built with Django REST Framework and PostgreSQL. Developed REST APIs for ticket creation, management, and tracking, containerized the application using Docker and Docker Compose, and integrated the Gemini API for AI-powered functionality.",
  image: supportticket,
  tags: ["Python", "Django", "DRF", "PostgreSQL", "Docker", "Gemini API"],
  github: "https://github.com/PraneethSai1810/support-ticket-system",
  featured: false,
},
  {
    id: "diwali",
    title: "Diwali Web App",
    badge: "Interactive UI",
    description:
      "Interactive quiz app that generates personalised Diwali greeting cards based on user responses. Built with a component-driven React architecture featuring dynamic state management, conditional rendering logic, and a fully responsive layout using Tailwind CSS utility classes.",
    image: diwali,
    tags: ["React", "Tailwind CSS", "Component Architecture", "Dynamic State"],
    github: "https://github.com/PraneethSai1810/Diwali-app",
    live: "https://diwali-app.vercel.app/",
    featured: false,
  },
];

export default projects;