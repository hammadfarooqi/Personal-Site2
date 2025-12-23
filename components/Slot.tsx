"use client";

import { ShelfItem } from "@/lib/data";

interface SlotProps {
  item: ShelfItem;
  isFilled: boolean;
  width: number;
  height: number;
  onSnap?: () => void;
}

export default function Slot({ item, isFilled, width, height, onSnap }: SlotProps) {
  return (
    <div
      id={item.slotId}
      className={`
        relative
        ${isFilled ? "opacity-0" : "opacity-100"}
        transition-opacity duration-300
      `}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Recessed cutout with inset shadow - exact size of Polaroid */}
      <div
        className={`
          w-full h-full
          border-2 border-dashed border-slot-outline
          bg-slot rounded-lg
          shadow-inset
          ${isFilled ? "border-transparent" : ""}
        `}
      />
    </div>
  );
}

