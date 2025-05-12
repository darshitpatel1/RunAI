/** @type {import('tailwindcss').Config} */
module.exports = {
  // scan your HTML + all React/TS/JS files so Tailwind knows
  // which classes to include in the final CSS
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',   // keep if you use dark-mode toggling
  theme: {
    extend: {
      /* add custom colors / fonts here if you like */
    },
  },
  plugins: [],
};
