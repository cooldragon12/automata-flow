/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C3E50',
        secondary: '#E74C3C',
        accent: '#3498DB',
        background: '#F2F2F2',
        text_color: '#333333',
        success: '#27AE60',
        warning: '#F39C12',
        danger: '#C0392B',
      }
    },
  },
  plugins: [],
}
