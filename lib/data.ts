export interface ShelfItem {
  id: string;
  title: string;
  slotId: string; // matches slot
  aspectRatio: string; // e.g., "4/3", "16/9", "1/1"
  details: string; // text to reveal
  category: "experience" | "projects" | "education";
}

export const shelfData: Record<string, ShelfItem[]> = {
  experience: [
    {
      id: "exp-1",
      title: "Senior Developer",
      slotId: "slot-exp-1",
      aspectRatio: "4/3",
      category: "experience",
      details: "Led a team of 5 developers in building scalable web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 60%. Mentored junior developers and established coding standards.",
    },
    {
      id: "exp-2",
      title: "Full Stack Engineer",
      slotId: "slot-exp-2",
      aspectRatio: "16/9",
      category: "experience",
      details: "Developed and maintained multiple client-facing applications. Worked with TypeScript, Next.js, and PostgreSQL. Collaborated with design teams to implement pixel-perfect UIs. Optimized application performance resulting in 40% faster load times.",
    },
    {
      id: "exp-3",
      title: "Frontend Developer",
      slotId: "slot-exp-3",
      aspectRatio: "1/1",
      category: "experience",
      details: "Built responsive web interfaces using modern JavaScript frameworks. Created reusable component libraries. Worked closely with UX designers to translate mockups into interactive experiences. Improved accessibility scores by 30%.",
    },
  ],
  projects: [
    {
      id: "proj-1",
      title: "E-Commerce Platform",
      slotId: "slot-proj-1",
      aspectRatio: "4/3",
      category: "projects",
      details: "A full-stack e-commerce solution built with Next.js, Stripe integration, and a custom admin dashboard. Features include real-time inventory management, user authentication, and payment processing. Handles 10,000+ daily transactions.",
    },
    {
      id: "proj-2",
      title: "Design System",
      slotId: "slot-proj-2",
      aspectRatio: "16/9",
      category: "projects",
      details: "Created a comprehensive design system with React components, Storybook documentation, and design tokens. Used by 20+ developers across multiple projects. Reduced development time by 50% for new features.",
    },
    {
      id: "proj-3",
      title: "Mobile App",
      slotId: "slot-proj-3",
      aspectRatio: "1/1",
      category: "projects",
      details: "React Native application with offline capabilities and real-time synchronization. Features include push notifications, biometric authentication, and seamless data sync. 50,000+ downloads on app stores.",
    },
  ],
  education: [
    {
      id: "edu-1",
      title: "Computer Science",
      slotId: "slot-edu-1",
      aspectRatio: "4/3",
      category: "education",
      details: "Bachelor of Science in Computer Science. Focused on software engineering, algorithms, and data structures. Graduated with honors. Relevant coursework: Distributed Systems, Machine Learning, Database Design.",
    },
    {
      id: "edu-2",
      title: "Web Development Bootcamp",
      slotId: "slot-edu-2",
      aspectRatio: "16/9",
      category: "education",
      details: "Intensive 6-month program covering full-stack development. Technologies: JavaScript, React, Node.js, MongoDB, Express. Built 10+ projects including a capstone application with real-world deployment.",
    },
  ],
};

