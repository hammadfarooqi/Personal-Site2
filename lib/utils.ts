/**
 * Calculate the distance between two points
 */
export function getDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
): number {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

/**
 * Check if a point is within a threshold distance of a target
 */
export function isWithinThreshold(
  point: { x: number; y: number },
  target: { x: number; y: number },
  threshold: number = 50
): boolean {
  return getDistance(point.x, point.y, target.x, target.y) <= threshold;
}

/**
 * Get the center point of an element
 */
export function getElementCenter(element: HTMLElement): { x: number; y: number } {
  const rect = element.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

/**
 * Generate a deterministic rotation value based on a string ID
 * This ensures the same rotation is generated on both server and client
 */
export function getDeterministicRotation(id: string, min: number = -5, max: number = 5): number {
  // Simple hash function to convert string to number
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    const char = id.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Normalize hash to a value between 0 and 1
  const normalized = (Math.abs(hash) % 10000) / 10000;
  // Map to the desired range
  return min + normalized * (max - min);
}

