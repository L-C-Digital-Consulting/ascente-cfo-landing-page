import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type PageSEO = { title: string; description: string; canonical: string };

// Fija título, meta description y canonical propios de cada página.
// La SPA comparte un único index.html: sin esto, todas las páginas heredan
// el canonical de la home y Google las trata como duplicados.
export function setPageSEO({ title, description, canonical }: PageSEO) {
  document.title = title;

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", description);

  const link = document.querySelector('link[rel="canonical"]');
  if (link) link.setAttribute("href", canonical);
}
