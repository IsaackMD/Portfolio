const {heroui} = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/Home.{js,ts,jsx,tsx,mdx}',
    './src/components/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/react/**/*.js",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primarybg: '#F2CB05',  // Amarillo dorado vibrante
        secondary: '#1E1E1E',  // Negro grisáceo
        accent: '#F29F05',  // Naranja cálido
        neutralLight: '#ECECEC',  // Gris claro
        contrast: '#3D3D3D',  // Gris oscuro
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
