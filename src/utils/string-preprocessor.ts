export default function stringPreprocessor(text: string) {
  text = text
    .replaceAll("[", "<span class='text-primary text-base max-lg:text-xs font-semibold'>")
    .replaceAll("]", "</span>")
    .replaceAll("\n", "<br>");

  if (text.startsWith(":")) return "<ul>";
  if (text.startsWith("-")) return `<li class="text-white text-base max-lg:text-xs">${text}</li>`;
  if (text.startsWith(";")) return "</ul>";
  return `<p class="text-white text-base max-lg:text-xs">${text}</p>`;
}
