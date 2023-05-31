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
        'body-background': '#0e0e0e',
        'color-logo': '#ff5b50',
        'card-color': '#252525',
        'text-color': '#fff',
        'subtitle-color': '#5a5757',
        'black-text': '#000',
        'color-input': '#0D0D0D',
      }
    },
  },
  plugins: [],
}
