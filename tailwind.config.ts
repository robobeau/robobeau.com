import type { Config } from "tailwindcss";
// import colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";

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
      listStyleType: {
        square: "square",
      },
    },
  },
  plugins: [
    plugin((plugin) => {
      const { addUtilities } = plugin;

      addUtilities({
        // ".scrollbar-windows": {
        //   'scrollbar-color': `${colors.gray[200]} ${colors.gray[300]}`,
        //   'scrollbar-gutter': 'stable',
        //   'scrollbar-width': 'auto',
        //   "&::-webkit-scrollbar": {
        //   },
        //   "&::-webkit-scrollbar-button": {
        //     '&:horizontal': {
        //     },
        //     '&:vertical': {
        //     },
        //   },
        //   "&::-webkit-scrollbar-corner": {
        //   },
        //   "&::-webkit-scrollbar-thumb": {
        //     "&:horizontal": {
        //     },
        //     "&:vertical": {
        //     },
        //   },
        //   "&::-webkit-scrollbar-track": {
        //     "&:horizontal": {
        //     },
        //     "&:vertical": {
        //     },
        //   },
        //   '&::-webkit-scrollbar-track-piece': {
        //   },
        // },
      });
    }),
  ],
};
export default config;
