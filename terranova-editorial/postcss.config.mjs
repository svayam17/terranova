import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Explicit path so this site's Tailwind config is used regardless of cwd.
    tailwindcss: { config: path.join(dir, "tailwind.config.ts") },
    autoprefixer: {}
  }
};

export default config;
