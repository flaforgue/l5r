import { defineConfig, globalIgnores } from "eslint/config";
import reactConfig from "@flaforgue/eslint-config-react";
import path from 'path';

export default defineConfig([
  globalIgnores([
    "**/.DS_Store",
  ]),
  {
    name: "React config",
    files: [
      "./src/**/*.{ts,tsx}",
    ],
    extends: [
      reactConfig,
    ],
    rules: {},
    settings: {
      "better-tailwindcss": {
        "entryPoint": path.resolve(import.meta.dirname, "./src/index.css"),
      }
    }
  },
]);
