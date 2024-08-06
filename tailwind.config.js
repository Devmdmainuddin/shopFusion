/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary":"#262626"
      },
      boxShadow: {
        'mainudin': '0 0 10px hsla(0, 0%, 0%, 0.1)',
        // box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.1);
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}