import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      backgroundImage: {
        tokimeki: "url('~/src/images/TokimekiBG.gif')",
      },
      colors: {
        "title-bar": "#0000AA",
      },
      cursor: {
        wait: "url('~/src/images/Hourglass.gif'), wait",
      },
    },
  },
  plugins: [],
};
export default config;
