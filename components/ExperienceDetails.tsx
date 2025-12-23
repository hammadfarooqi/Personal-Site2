"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ShelfItem } from "@/lib/data";

interface ExperienceDetailsProps {
  item: ShelfItem | null;
}

export default function ExperienceDetails({ item }: ExperienceDetailsProps) {
  return (
    <AnimatePresence mode="wait">
      {item && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="
            fixed right-2 md:right-4 top-1/2 -translate-y-1/2
            w-[calc(100vw-1rem)] sm:w-80 md:w-96
            bg-shelf-light rounded-lg p-4 md:p-6 shadow-xl
            border-2 border-slot-outline
            max-h-[80vh] overflow-y-auto
            z-40
            hidden lg:block
          "
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4 font-handwritten">
            {item.title}
          </h3>
          <p className="text-text-secondary leading-relaxed text-sm md:text-base">
            {item.details}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

