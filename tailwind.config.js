/* @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "search-background": "url(/world-map.png)",
        "search-background-dark": "url(/world-map-dark.png)",
      },
      colors: {
        primary: "#590BD8",
        primaryLighter: "#DDD5EA",
        primaryDarker: "#312A4F",
        grayPrimary: "#717171",
        grayLighter: "#BBBEBF",
        walterWhite: "#F5F5F5",
        darkBG: "#0f0f0f",
        darkBGLighter: "#2d2d2d",
        whiteBG: "#e5e5e5",
        whiteBGDarker: "#c3c3c3",
      },
      textColor: {
        dark: "#717171",
      },
    },
  },
  plugins: [],
};
