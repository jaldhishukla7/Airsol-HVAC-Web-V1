import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatNumber = (n: number, maxFractionDigits = 0) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: maxFractionDigits }).format(n);
