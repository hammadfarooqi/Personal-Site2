"use client";

import { useState } from "react";
import { shelfData } from "@/lib/data";
import Shelf from "@/components/Shelf";
import TabNavigation from "@/components/TabNavigation";

type ShelfCategory = "experience" | "projects" | "education";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<ShelfCategory>("experience");
  const [slottedItems, setSlottedItems] = useState<Set<string>>(new Set());

  const currentItems = shelfData[activeCategory];

  const handleItemSlot = (itemId: string) => {
    setSlottedItems((prev) => {
      const newSet = new Set(prev);
      newSet.add(itemId);
      return newSet;
    });
  };

  const handleCategoryChange = (category: ShelfCategory) => {
    setActiveCategory(category);
    // Optionally reset slotted items when switching categories
    // setSlottedItems(new Set());
  };

  return (
    <main className="min-h-screen bg-shelf">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 font-handwritten">
            The Archivist&apos;s Shelf
          </h1>
          <p className="text-lg md:text-xl text-text-secondary">
            Organize your journey, one Polaroid at a time
          </p>
        </header>

        <TabNavigation
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
        />

        <Shelf
          items={currentItems}
          slottedItems={slottedItems}
          onItemSlot={handleItemSlot}
        />
      </div>
    </main>
  );
}

