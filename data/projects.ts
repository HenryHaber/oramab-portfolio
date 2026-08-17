import type { CompanyKey } from "@/data/companies";

export interface FeaturedProject {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  clientCompany?: CompanyKey;
  website?: string;
  repo?: string;
  technologies: string[];
  highlights: string[];
}

export const featuredProjects: FeaturedProject[] = [
  {
    slug: "visaguard-africa",
    title: "VisaGuard Africa",
    tagline:
      "Automated immigration technology SaaS for Nigerian travelers, delivering document verification workflows and custom payment transaction backends.",
    summary:
      "VisaGuard Africa is a secure immigration technology platform that automates visa application workflows for Nigerian travelers. The project spans end-to-end delivery — from sprint planning and document verification pipelines to real-time transaction tracking and custom payment backends.",
    role: "Technical Project Manager & Delivery Lead",
    clientCompany: "visaguard",
    website: "https://visaguardafrica.com",
    technologies: [
      "AWS",
      "TypeScript",
      "React",
      "Node.js",
      "Document Verification",
      "Payment APIs",
      "Serverless",
    ],
    highlights: [
      "Managed end-to-end delivery of a secure immigration technology SaaS for Nigerian travelers.",
      "Directed sprint planning and coordinated cross-functional delivery of verification pipelines.",
      "Integrated real-time transaction tracking APIs with custom payment transaction backends.",
      "Orchestrated a secure, serverless cloud architecture on AWS with streamlined CI/CD.",
    ],
  },
  {
    slug: "hibisxpert",
    title: "hibisXpert (Legal AI Assistant)",
    tagline:
      "NLP legal intelligence engine designed to parse legal codes and draft documents for French-speaking African jurisdictions.",
    summary:
      "hibisXpert is a specialized legal AI assistant built for French-speaking African nations. It applies natural language processing models to parse regulatory frameworks and draft legal documentation, reducing manual legal research effort.",
    role: "Technical Lead & Project Manager",
    clientCompany: "cloudfro",
    technologies: ["NLP", "AI / LLMs", "Python", "Legal Tech"],
    highlights: [
      "Led technical execution of a specialized legal AI assistant from concept to delivery.",
      "Implemented NLP models to parse regulatory frameworks and legal codes.",
      "Enabled automated drafting of legal documentation for Francophone African jurisdictions.",
    ],
  },
  {
    slug: "firmly",
    title: "Firmly (Cross-Platform Ecosystem)",
    tagline:
      "Cross-platform mobile (iOS & Android) and web application utilizing NestJS, MERN stack, React Native, and Next.js.",
    summary:
      "Firmly is a cross-platform web and mobile ecosystem built to operate seamlessly across iOS, Android, and the browser. Delivery covered the full product lifecycle using a modern JavaScript stack.",
    role: "Project Manager & Technical Lead",
    technologies: ["NestJS", "MERN", "React Native", "Next.js", "iOS", "Android"],
    highlights: [
      "Directed full lifecycle management of a cross-platform web and mobile ecosystem.",
      "Coordinated MERN stack, React Native, and Next.js delivery across platforms.",
      "Aligned product, design, and engineering teams to a single release roadmap.",
    ],
  },
  {
    slug: "etuition",
    title: "Etuition (Educational Platform)",
    tagline:
      "Learning platform with backend architecture in NestJS and administrative dashboards in Next.js/React Native.",
    summary:
      "Etuition is an educational platform delivering online learning, with a robust NestJS backend and administrative dashboards built in Next.js and React Native.",
    role: "Project Manager",
    technologies: ["NestJS", "Next.js", "React Native"],
    highlights: [
      "Managed cross-functional delivery of the learning platform across backend and dashboard teams.",
      "Oversaw backend architecture in NestJS and admin dashboards in Next.js/React Native.",
      "Kept feature delivery aligned with curriculum and instructor requirements.",
    ],
  },
  {
    slug: "bitselah",
    title: "Bitselah (Fintech/Exchange Platform)",
    tagline:
      "High-frequency trading interface using React, .NET, and Flutter.",
    summary:
      "Bitselah is a fintech/exchange platform featuring a high-frequency trading interface. The project combined architectural planning with multi-client delivery across web and mobile.",
    role: "Project Manager & Solutions Architect",
    technologies: ["React", ".NET", "Flutter", "Fintech"],
    highlights: [
      "Provided project oversight and architectural planning for the trading platform.",
      "Coordinated a high-frequency trading interface across React, .NET, and Flutter clients.",
      "Designed for reliability and low-latency trade execution.",
    ],
  },
  {
    slug: "gtext-and-associates",
    title: "Gtext and Associates (Real Estate Web & Mobile App)",
    tagline:
      "Global real estate web/mobile platform with a custom real-time commission payout engine built on React, Node.js, and AWS.",
    summary:
      "Gtext and Associates is a global real estate platform covering web and mobile, with a custom real-time commission payout engine. Built on React, Node.js, and AWS.",
    role: "Technical Project Manager",
    clientCompany: "gtext",
    technologies: ["React", "Node.js", "AWS", "Real Estate"],
    highlights: [
      "Managed contract delivery of a global real estate web and mobile platform.",
      "Oversaw a custom real-time commission payout engine.",
      "Coordinated architecture across React, Node.js, and AWS services.",
    ],
  },
  {
    slug: "stephen-akintayo-foundation",
    title: "Stephen Akintayo Foundation Digital Platform",
    tagline:
      "Global grant distribution and relief tracking web platform built with React and Node.js.",
    summary:
      "The Stephen Akintayo Foundation platform supports global grant distribution and relief tracking, providing a transparent digital workflow for the foundation's programs.",
    role: "Project Manager",
    clientCompany: "saf",
    technologies: ["React", "Node.js"],
    highlights: [
      "Delivered end-to-end project execution for the foundation's web platform.",
      "Built global grant distribution and relief tracking workflows.",
      "Coordinated React and Node.js development to meet program deadlines.",
    ],
  },
  {
    slug: "e-commerce-music-store",
    title: "E-Commerce Music Store & Mobile App",
    tagline:
      "JAMstack music store and mobile app spanning UI/UX workflows, database inventory, and multi-platform deployment.",
    summary:
      "An e-commerce music store delivered as a JAMstack web experience alongside a mobile app, covering UI/UX workflows, database inventory setup, and multi-platform deployment.",
    role: "Project Manager",
    technologies: ["WordPress", "Next.js", "React Native", "JAMstack"],
    highlights: [
      "Oversaw UI/UX project workflows and database inventory setup.",
      "Coordinated multi-platform deployment across WordPress, Next.js, and React Native.",
      "Managed the release of the storefront and companion mobile app.",
    ],
  },
  {
    slug: "showgear-websites",
    title: "Showgear Website / MakeMusicLagos / SSRT Websites",
    tagline:
      "Corporate website overhauls using Laravel and WordPress, improving site load speeds and backend management.",
    summary:
      "A portfolio of corporate website projects for Showgear, MakeMusicLagos, and SSRT, modernized with Laravel and WordPress to improve load speeds, security, and backend management.",
    role: "Fullstack Developer & Web Project Lead",
    clientCompany: "showgear",
    technologies: ["Laravel", "WordPress", "PHP"],
    highlights: [
      "Delivered project management and overhaul of corporate websites.",
      "Rebuilt sites on Laravel and WordPress, improving load speeds and maintainability.",
      "Implemented accessible, WCAG-compliant interfaces with client teams.",
    ],
  },
];