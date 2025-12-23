"use client";

import { motion } from "framer-motion";

type ShelfCategory = "experience" | "projects" | "education";

interface TabNavigationProps {
  activeCategory: ShelfCategory;
  onCategoryChange: (category: ShelfCategory) => void;
}

const categories: { id: ShelfCategory; label: string }[] = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];

export default function TabNavigation({
  activeCategory,
  onCategoryChange,
}: TabNavigationProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="bg-shelf-light rounded-lg p-2 shadow-lg inline-flex gap-2 flex-wrap justify-center">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`
              relative px-6 py-3 rounded-md font-semibold text-sm md:text-base
              transition-colors duration-200
              ${
                activeCategory === category.id
                  ? "text-text-primary"
                  : "text-text-secondary hover:text-text-primary"
              }
            `}
          >
            {activeCategory === category.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-shelf-dark rounded-md shadow-sm"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

