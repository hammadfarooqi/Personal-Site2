"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShelfItem } from "@/lib/data";

interface ExperienceDetailsProps {
  item: ShelfItem | null;
  shelfHeight: number;
}

export default function ExperienceDetails({ item, shelfHeight }: ExperienceDetailsProps) {
  return (
    <AnimatePresence mode="wait">
      {item && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            flex-1 ml-4 md:ml-6
            bg-shelf-light rounded-lg p-3 md:p-4 shadow-lg
            border-2 border-slot-outline
            overflow-y-auto
            relative z-10
          "
          style={{ 
            maxHeight: `${shelfHeight}px`,
            minHeight: `${shelfHeight}px`,
          }}
        >
          <h3 className="text-lg md:text-xl font-bold text-text-primary mb-2 md:mb-3 font-handwritten">
            {item.title}
          </h3>
          <p className="text-text-secondary leading-relaxed text-xs md:text-sm">
            {item.details}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

