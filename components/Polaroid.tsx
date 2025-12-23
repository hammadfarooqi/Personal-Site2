"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { ShelfItem } from "@/lib/data";
import { useEffect, useRef, useState } from "react";
import { getElementCenter, isWithinThreshold } from "@/lib/utils";

interface PolaroidProps {
  item: ShelfItem;
  isSlotted: boolean;
  initialRotation: number;
  onSnap?: () => void;
  fixedWidth?: number;
  fixedHeight?: number;
  initialY?: number; // Initial Y position for gravity fallback
}

export default function Polaroid({
  item,
  isSlotted,
  initialRotation,
  onSnap,
  fixedWidth,
  fixedHeight,
  initialY = 0,
}: PolaroidProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [snapped, setSnapped] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const polaroidRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(initialY);

  useEffect(() => {
    if (isSlotted) {
      setSnapped(true);
    }
  }, [isSlotted]);

  const handleDragEnd = (event: any, info: any) => {
    setIsDragging(false);
    if (!polaroidRef.current || !onSnap) return;

    const slotElement = document.getElementById(item.slotId);
    if (!slotElement) return;

    // Get current absolute position
    const polaroidRect = polaroidRef.current.getBoundingClientRect();
    const slotRect = slotElement.getBoundingClientRect();
    
    const polaroidCenter = {
      x: polaroidRect.left + polaroidRect.width / 2,
      y: polaroidRect.top + polaroidRect.height / 2,
    };
    
    const slotCenter = {
      x: slotRect.left + slotRect.width / 2,
      y: slotRect.top + slotRect.height / 2,
    };

    if (isWithinThreshold(polaroidCenter, slotCenter, 100)) {
      // Calculate relative offset to snap to slot center
      const currentX = x.get();
      const currentY = y.get();
      const offsetX = slotCenter.x - polaroidCenter.x;
      const offsetY = slotCenter.y - polaroidCenter.y;
      
      x.set(currentX + offsetX);
      y.set(currentY + offsetY);
      
      setSnapped(true);
      setShowFlash(true);
      setTimeout(() => {
        setShowFlash(false);
      }, 600);
      setTimeout(() => {
        onSnap();
      }, 300);
    } else {
      // Fall straight down from current horizontal position with gravity
      // Keep X where it is, only animate Y down to initial position
      // Use lower stiffness and damping for more natural gravity feel
      animate(y, initialY, {
        type: "spring",
        stiffness: 100, // Lower stiffness for slower, more natural fall
        damping: 15, // Lower damping to allow more acceleration
        mass: 2, // Heavier mass for more gravity effect
        velocity: info.velocity.y || 0, // Use the drag velocity for more natural feel
      });
      // X stays at current position (wherever it was released)
    }
  };

  const scale = useTransform(x, [-100, 0, 100], [1.05, 1.1, 1.05]);

  if (isSlotted && snapped) {
    const width = fixedWidth || 200;
    const height = fixedHeight || 200;
    
    return (
      <motion.div
        ref={polaroidRef}
        className="w-full h-full"
        style={{ width: `${width}px`, height: `${height}px` }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-full h-full bg-polaroid border-4 border-polaroid-border rounded-sm shadow-polaroid p-2 flex flex-col items-center justify-center">
          <p className="font-handwritten text-lg md:text-xl text-text-primary text-center">
            {item.title}
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={polaroidRef}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={handleDragEnd}
      style={{
        x,
        y,
        scale: isDragging ? scale : 1,
        rotate: snapped ? 0 : initialRotation,
        zIndex: isDragging ? 50 : 1,
      }}
      className="cursor-grab active:cursor-grabbing"
      whileDrag={{ scale: 1.1, zIndex: 50 }}
      animate={{
        rotate: snapped ? 0 : initialRotation,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 25,
        mass: 1.2, // Slightly heavier for more gravity feel
      }}
    >
      <div className="relative">
        {showFlash && (
          <motion.div
            className="absolute inset-0 bg-accent-glow rounded-sm opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.2, 1] }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ filter: "blur(10px)" }}
          />
        )}
        <div
          className={`
            relative bg-polaroid border-4 border-polaroid-border rounded-sm shadow-polaroid p-2 md:p-3
            flex flex-col items-center justify-center
            ${snapped ? "shadow-glow" : ""}
            transition-shadow duration-300
          `}
          style={{
            width: fixedWidth ? `${fixedWidth}px` : "150px",
            height: fixedHeight ? `${fixedHeight}px` : undefined,
            aspectRatio: fixedWidth && fixedHeight ? undefined : item.aspectRatio,
            minWidth: fixedWidth ? undefined : "120px",
          }}
        >
          <p className="font-handwritten text-base md:text-lg text-text-primary text-center">
            {item.title}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

