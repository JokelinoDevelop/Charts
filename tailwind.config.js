/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#261E35',
        cardBackground: '#3C354A',
        darkBackground: '#2F293E',
        dividerLine: '#8D8598',
        grayOverlay: '#868B93',
        darkPurple: '#592F7F',
        lightPurple: '#B783EB',
        veryLightPurple: '#F5EBFA',
        pink: '#F965C1'
      }
    }
  },
  // eslint-disable-next-line no-undef
  plugins: [require('flowbite/plugin')]
}
