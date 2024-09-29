import type { ImageMetadata } from "astro";

export default function imageReader(path: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/**/*.{jpeg,jpg,png,gif}");

  if (!images[`/src/assets${path}`]) {
    throw new Error(`Image not found: ${path}`);
  }
  return images[`/src/assets${path}`]?.();
}
