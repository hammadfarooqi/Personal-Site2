"use client";

import { motion } from "framer-motion";

interface ProgressIndicatorProps {
  completed: number;
  total: number;
}

export default function ProgressIndicator({
  completed,
  total,
}: ProgressIndicatorProps) {
  const percentage = (completed / total) * 100;

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm md:text-base text-text-secondary font-semibold">
          Progress
        </span>
        <span className="text-sm md:text-base text-text-secondary font-semibold">
          {completed} / {total}
        </span>
      </div>
      <div className="w-full h-3 bg-slot rounded-full overflow-hidden shadow-inset">
        <motion.div
          className="h-full bg-accent-warm rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

