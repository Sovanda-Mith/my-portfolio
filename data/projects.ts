export type Project = {
  title: string;
  period: string;
  organization: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  sourceUrl?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio",
    period: "Ongoing",
    organization: "Personal Project",
    description:
      "My continuously evolving portfolio, built with Next.js and Tailwind CSS. It also integrates with Medium to display my latest articles.",
    technologies: ["Next.js", "React", "Tailwind CSS"],
    imageUrl: "/portfolio.png",
    liveUrl: "https://mith-sovanda.vercel.app/",
    sourceUrl: "https://github.com/Sovanda-Mith/my-portfolio.git",
  },
  {
    title: "E-Commerce Website",
    period: "Apr 2024 — May 2024",
    organization: "Personal Project",
    description:
      "Designed and built a product-purchasing experience with Stripe payments, email receipts and purchase history through Resend, and an authenticated admin panel for managing product availability.",
    technologies: ["Next.js", "React", "PostgreSQL", "Prisma ORM", "Stripe"],
  },
  {
    title: "Bank Financial Report System",
    period: "Aug 2024 — Oct 2024",
    organization: "Inklusivity TECH · Internship",
    description:
      "Implemented RESTful APIs for banking-sector reports covering growth, market share, non-performing loans, sector lending, and deposits. Added JWT authentication and role-based authorization.",
    technologies: ["Vue.js", "Laravel", "PHP", "MySQL", "Nginx"],
  },
  {
    title: "Articles Hosting Site (Bloggist)",
    period: "Feb 2025 — Jun 2025",
    organization: "Team Project",
    description:
      "Built APIs for articles and categories alongside likes, comments, author following, and the backend services required for account settings.",
    technologies: ["Laravel", "PHP", "Vue.js", "MySQL", "Docker", "Figma"],
  },
  {
    title: "Wedding Service Provider (Pkar Sla)",
    period: "May 2025 — Jun 2025",
    organization: "Team Project",
    description:
      "Built backend services for users and wedding-service providers, implemented role-based authentication, contributed to the Flutter interface, and enabled real-time messaging with WebSockets.",
    technologies: ["NestJS", "Flutter", "PostgreSQL", "WebSocket", "Figma"],
  },
  {
    title: "Bank Financial Report System",
    period: "Jan 2025 — Sep 2025",
    organization: "Inklusivity TECH · Freelance",
    description:
      "Expanded the reporting platform with profitability, detail, and financial-ratio reports, including debt-to-equity and debt-to-assets, while modernizing the reporting interface.",
    technologies: ["Laravel", "PHP", "Vue.js", "MySQL"],
  },
  {
    title: "Note Taking & Notification Bot",
    period: "May 2025 — Jun 2025",
    organization: "Personal Project",
    description:
      "Created a Telegram bot that lets users save notes and schedule notifications directly from their conversations.",
    technologies: ["Python", "PostgreSQL", "Telegram Bot API"],
  },
  {
    title: "Real-Time Traffic Detection",
    period: "Jun 2025 — Feb 2026",
    organization: "POMA Media Co., Ltd.",
    description:
      "Delivered a real-time traffic monitoring dashboard using WebSockets and centralized security-camera alarm data. Implemented CI/CD, Nginx, SSL, DNS, MQTT, and optimized scheduled data retrieval.",
    technologies: ["Python", "TypeScript", "PostgreSQL", "Vue.js", "Docker", "Nginx", "MQTT", "GitHub CI/CD"],
  },
  {
    title: "Card System Reporting",
    period: "Feb 2026 — Present",
    organization: "Advanced Bank of Asia Limited",
    description:
      "Developing and optimizing enterprise reports with a focus on performance, reliability, security, static analysis, and resilient database infrastructure.",
    technologies: ["PHP", "JavaScript", "jQuery", "Oracle PL/SQL", "GitLab CI", "SonarQube"],
  },
];

export default projects;
