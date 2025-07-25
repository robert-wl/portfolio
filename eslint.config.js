import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginUnusedImports from "eslint-plugin-unused-imports";
import pluginImport from "eslint-plugin-import";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettierFlat from "eslint-config-prettier/flat";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  ...eslintPluginAstro.configs.recommended,
  eslintConfigPrettierFlat,
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx,astro}"],
    languageOptions: {
      ecmaVersion: 2021,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "unused-imports": pluginUnusedImports,
      import: pluginImport,
      "jsx-a11y": pluginJsxA11y,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // React Hooks recommended rules
      ...pluginReactHooks.configs.recommended.rules,

      // Custom overrides
      "no-console": "off",
      "react/prop-types": "off",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/interactive-supports-focus": "off",
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
      "react/self-closing-comp": "warn",
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
      "react/jsx-sort-props": [
        "off",
        {
          callbacksLast: true,
          shorthandFirst: true,
          noSortAlphabetically: false,
          reservedFirst: true,
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
      // Disable React-specific rules for .astro files
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unknown-property": "off",
      // You may want to adjust TypeScript rules for .astro files
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
];
