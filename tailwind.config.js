module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'turquesa': '#4be2b6',
        'amarillo-boton': '#fddb0c',
      },
    },
  },
  variants: {},
  plugins: [],
};
