import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat("ko-KR").format(num);
}

export function formatCurrency(num: number, unit: string = "원"): string {
  return `${formatNumber(num)}${unit}`;
}
