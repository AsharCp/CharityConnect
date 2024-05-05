/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-color': '#4863D3',
        'gray-color': '#757575',
        'green-color': '#137C05',
      },
    },
  },
  plugins: [],
}

