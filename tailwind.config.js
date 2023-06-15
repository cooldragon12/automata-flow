/** @type {import('tailwindcss').Config} */
// const plugin = require('tailkwindcss/plugin');
module.exports = {
  darkMode: 'class',
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
        // dark mode
        dark_primary: '#FFFFFF',
        dark_background: '#1E272E',
        dark_text_color: '#FFFFFF',
      }
    },
  },
  plugins: [
    // plugin(function ({ addComponents }) {
      
    //   addComponents({
    //     '.triangle': {
    //       width: 0,
    //       height: 0,
    //       border: "50px solid transparent",
    //       borderBottomColor: 'red',
    //       position: relative,
    //       top: '-50px',
    //       '&:after':{
    //           content: '',
    //           position: 'absolute',
    //           left: '-50px',
    //           top: '50px',
    //           width: 0,
    //           height: 0,
    //           border: '50px solid transparent',
    //           borderTopColor: red,
    //         }
    //     }
    //   })
    // })
  ],
}
