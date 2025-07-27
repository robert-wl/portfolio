import type { ImageMetadata } from "astro";

export default function imageReader(path: string) {
  const images = import.meta.glob<{ default: ImageMetadata }>("/src/assets/**/*.{jpeg,jpg,png,gif}");

  const imageData = images[`/src/assets${path}`]?.();

  if (!imageData) {
    throw new Error(`Image not found: ${path}`);
  }

  return imageData;
}
