"use client";

import { ShelfItem } from "@/lib/data";
import Slot from "./Slot";
import Polaroid from "./Polaroid";
import ProgressIndicator from "./ProgressIndicator";
import { getDeterministicRotation } from "@/lib/utils";

interface ShelfProps {
  items: ShelfItem[];
  slottedItems: Set<string>;
  onItemSlot: (itemId: string) => void;
}

// Base height for each shelf row
const SHELF_HEIGHT = 200; // px

// Calculate width from aspect ratio string (e.g., "4/3" -> 1.333)
function getAspectRatioValue(aspectRatio: string): number {
  const [width, height] = aspectRatio.split("/").map(Number);
  return width / height;
}

// Calculate Polaroid width based on shelf height and aspect ratio
function getPolaroidWidth(item: ShelfItem, shelfHeight: number): number {
  const aspectRatio = getAspectRatioValue(item.aspectRatio);
  return shelfHeight * aspectRatio;
}

export default function Shelf({ items, slottedItems, onItemSlot }: ShelfProps) {
  const unslottedItems = items.filter((item) => !slottedItems.has(item.id));

  return (
    <div className="w-full min-h-screen p-4 md:p-8 lg:p-12">
      {/* Main Shelf Area */}
      <div className="max-w-6xl mx-auto">
        {/* Shelf Surface - One Big Bookshelf */}
        <div className="bg-shelf-dark rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg matte-surface">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6 text-center">
            Organize the Archive
          </h2>

          <ProgressIndicator
            completed={slottedItems.size}
            total={items.length}
          />

          {/* Individual Shelf Rows - One per experience */}
          <div className="space-y-4 md:space-y-6 mb-8 md:mb-12 pb-32 md:pb-40">
            {items.map((item) => {
              const polaroidWidth = getPolaroidWidth(item, SHELF_HEIGHT);
              const isFilled = slottedItems.has(item.id);
              
              return (
                <div
                  key={item.slotId}
                  className="relative w-full flex items-center px-4"
                  style={{ height: `${SHELF_HEIGHT}px` }}
                >
                  {/* Shelf Row Background - Full width shelf */}
                  <div className="absolute inset-0 bg-shelf-dark rounded-lg border-2 border-slot-outline/30 shadow-sm" />
                  
                  {/* Slot Cutout - Full height, exact Polaroid width, positioned on left */}
                  <div
                    className="relative flex items-center justify-center"
                    style={{
                      width: `${polaroidWidth}px`,
                      height: `${SHELF_HEIGHT}px`,
                    }}
                  >
                    <Slot
                      item={item}
                      isFilled={isFilled}
                      width={polaroidWidth}
                      height={SHELF_HEIGHT}
                    />
                    {/* Render slotted Polaroid on top of slot */}
                    {isFilled && (
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          width: `${polaroidWidth}px`,
                          height: `${SHELF_HEIGHT}px`,
                        }}
                      >
                        <Polaroid
                          item={item}
                          isSlotted={true}
                          initialRotation={0}
                          fixedWidth={polaroidWidth}
                          fixedHeight={SHELF_HEIGHT}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Polaroid Pile Area - Fixed to bottom, partially visible (peeking up) */}
      {unslottedItems.length > 0 && (
        <div 
          className="fixed bottom-0 left-0 right-0 z-50 pointer-events-none overflow-visible" 
          style={{ height: `${SHELF_HEIGHT * 0.75}px` }}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-8 h-full flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 items-end">
            {unslottedItems.map((item) => {
              const polaroidWidth = getPolaroidWidth(item, SHELF_HEIGHT);
              // Position so about 3/4 of the Polaroid is visible above bottom edge
              return (
                <div 
                  key={item.id} 
                  className="pointer-events-auto" 
                  style={{ 
                    transform: `translateY(${SHELF_HEIGHT * 0.25}px)`,
                  }}
                >
                  <Polaroid
                    item={item}
                    isSlotted={false}
                    initialRotation={getDeterministicRotation(item.id)}
                    onSnap={() => onItemSlot(item.id)}
                    fixedWidth={polaroidWidth}
                    fixedHeight={SHELF_HEIGHT}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

