import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function publicUrl(pathFromPublicRoot: string): string {
  const base = import.meta.env.BASE_URL || '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = pathFromPublicRoot.startsWith('/')
    ? pathFromPublicRoot
    : `/${pathFromPublicRoot}`;
  return `${normalizedBase}${normalizedPath}`;
}