import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateHexColor(): string {
  // Generate random R, G, B values
  const r = Math.floor(Math.random() * 256); // Random number between 0 and 255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  // Convert RGB to hex
  const hexR = r.toString(16).padStart(2, '0'); // Convert to hexadecimal and ensure at least 2 digits
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // Concatenate and return hex color code
  return `#${hexR}${hexG}${hexB}`;
}