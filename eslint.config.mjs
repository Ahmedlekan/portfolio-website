import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },
  {
    files: ["**/*.cjs", "next.config.js", "postcss.config.js"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  {
    files: ["app/libs/contact.ts"],
    rules: { "no-control-regex": "off" },
  },
  globalIgnores([".next/**", "out/**", "build/**", "artifacts/**", "next-env.d.ts"]),
]);
