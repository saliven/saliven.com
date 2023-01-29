const radixColors = require('@radix-ui/colors');
const { fontFamily } = require('tailwindcss/defaultTheme');

const colors = Object.fromEntries(
  Object.keys(radixColors)
    .filter((color) => color.includes('Dark') && !color.includes('A'))
    .map((color) => {
      const colorName = color.replace('Dark', '');

      const scales = Object.keys(radixColors[color]).map((scale) => {
        const [step] = scale.match(/\d+/);

        return [step, radixColors[color][scale]];
      });

      return [[colorName], Object.fromEntries(scales)];
    })
);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['var(--font-raleway)', ...fontFamily.sans] },
      transitionProperty: {
        width: 'width'
      }
    },
    colors: {
      ...colors,
      white: '#FFFFFF',
      black: '#000000'
    }
  },
  plugins: []
};
