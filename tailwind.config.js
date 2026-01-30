/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'asb-blue': '#0033A0',
        'asb-red': '#E4002B',
        'asb-light-blue': '#0077C8',
        'asb-gray': '#F5F7FA',
      },
    },
  },
  plugins: [],
}