export interface ShelfItem {
  id: string;
  title: string;
  slotId: string; // matches slot
  aspectRatio: string; // e.g., "4/3", "16/9", "1/1"
  details: string; // text to reveal
  category: "experience" | "projects" | "education";
  image: string; // Image URL or placeholder
  caption: string; // Caption text for the Polaroid
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
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      caption: "Team Leadership",
    },
    {
      id: "exp-2",
      title: "Full Stack Engineer",
      slotId: "slot-exp-2",
      aspectRatio: "16/9",
      category: "experience",
      details: "Developed and maintained multiple client-facing applications. Worked with TypeScript, Next.js, and PostgreSQL. Collaborated with design teams to implement pixel-perfect UIs. Optimized application performance resulting in 40% faster load times.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=338&fit=crop",
      caption: "Full Stack Development",
    },
    {
      id: "exp-3",
      title: "Frontend Developer",
      slotId: "slot-exp-3",
      aspectRatio: "1/1",
      category: "experience",
      details: "Built responsive web interfaces using modern JavaScript frameworks. Created reusable component libraries. Worked closely with UX designers to translate mockups into interactive experiences. Improved accessibility scores by 30%.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=400&fit=crop",
      caption: "UI/UX Design",
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
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      caption: "E-Commerce Solution",
    },
    {
      id: "proj-2",
      title: "Design System",
      slotId: "slot-proj-2",
      aspectRatio: "16/9",
      category: "projects",
      details: "Created a comprehensive design system with React components, Storybook documentation, and design tokens. Used by 20+ developers across multiple projects. Reduced development time by 50% for new features.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=338&fit=crop",
      caption: "Component Library",
    },
    {
      id: "proj-3",
      title: "Mobile App",
      slotId: "slot-proj-3",
      aspectRatio: "1/1",
      category: "projects",
      details: "React Native application with offline capabilities and real-time synchronization. Features include push notifications, biometric authentication, and seamless data sync. 50,000+ downloads on app stores.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=400&fit=crop",
      caption: "Mobile Application",
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
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=300&fit=crop",
      caption: "BS Computer Science",
    },
    {
      id: "edu-2",
      title: "Web Development Bootcamp",
      slotId: "slot-edu-2",
      aspectRatio: "16/9",
      category: "education",
      details: "Intensive 6-month program covering full-stack development. Technologies: JavaScript, React, Node.js, MongoDB, Express. Built 10+ projects including a capstone application with real-world deployment.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=338&fit=crop",
      caption: "Full Stack Bootcamp",
    },
  ],
};

