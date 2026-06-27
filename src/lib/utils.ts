import { clsx } from "clsx";

export function cn(...inputs: Parameters<typeof clsx>[0][]) {
  return clsx(...inputs);
}
