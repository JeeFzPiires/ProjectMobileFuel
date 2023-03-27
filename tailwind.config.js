/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{tsx, js, ts}',
    './App.tsx',
  ],
  theme: {
      extend: {
        colors: {
          blue: {
            500: '#297FFF',
            600: '#1F306E',
            900: '#0E163A'
          },
          grey: {
            500: '#424A6D',
            700: '#1F2937'
          }
        }
      }
    },
  plugins: [],
}
