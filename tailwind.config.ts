import type { Config } from "tailwindcss";
import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [addShortcutPlugin],
};

function addShortcutPlugin({ addUtilities }: PluginAPI) {
  const styles: CSSRuleObject = {
    ".center": {
      "align-items": "center",
      "justify-content": "center",
    },
    ".card-shadow": {
      "box-shadow": "0 0 0 1px rgba(0,0,0,.08),0 4px 6px rgba(0,0,0,.04)",
    },
    ".card-shadow:hover": {
      "box-shadow": "0 0 0 1px rgba(0,0,0,.08),0 6px 14px rgba(0,0,0,.08)",
    },
  };
  addUtilities(styles);
}
export default config;
