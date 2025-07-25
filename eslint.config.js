import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginImport from "eslint-plugin-import";
import eslintConfigPrettierFlat from "eslint-config-prettier/flat";

export default [
  {
    ignores: ["dist/**", "node_modules/**", ".vercel/**", ".astro/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettierFlat,
  {
    files: ["**/*.{js,mjs,cjs,ts,astro}"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "unused-imports": pluginUnusedImports,
      import: pluginImport,
    },
    rules: {
      // Custom overrides
      "no-console": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "off",
      "import/order": [
        "off",
        {
          groups: ["type", "builtin", "object", "external", "internal", "parent", "sibling", "index"],
          pathGroups: [
            {
              pattern: "~/**",
              group: "external",
              position: "after",
            },
          ],
          "newlines-between": "always",
        },
      ],
      "padding-line-between-statements": [
        "off",
        {
          blankLine: "always",
          prev: "*",
          next: "return",
        },
        {
          blankLine: "always",
          prev: ["const", "let", "var"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },
      ],

      // Astro specific rules (uncomment/modify as needed)
      // 'astro/no-set-html-directive': 'error',
      // 'astro/no-unused-define-vars-in-style': 'error',
      // 'astro/prefer-class-list-directive': 'warn',
      // 'astro/prefer-split-class-list': 'warn',
    },
  },
  {
    // Specific overrides for .astro files
    files: ["**/*.astro"],
    rules: {
      // Disable React-specific rules for .astro files (not needed in Astro-only config)
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
