module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        turquesa: "#4abba0",
        /* hover: "#4be2b6",*/
        "focus-text": "#053726",
        "amarillo-boton": "#fddb0c",
        "contact-1": "#4abba0",
        "contact-2": "#b6ffc7",
        "border-a": "#6ac78f",
        "border-b": "#1c5a4b",
        "button-red": "#f4055a",
        "button-yellow": "#fddb0c",
      },
    },
  },
  variants: {},
  plugins: [],
};
