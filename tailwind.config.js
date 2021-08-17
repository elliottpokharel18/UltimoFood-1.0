module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#26798e",
        secondary: "#ecc94b",
        white: "#fff",
        white_1: "#f3fdff",
        black: "#000",
        black_1: "#2c2c2c",
        black_2: "#7a7a7a",
        danger: "#e3342f",
      },
      boxShadow: {
        card: '0px 5px 40px 10px rgba(0, 0, 0, 0.03), 0px 5px 30px 5px rgba(0, 0, 0, 0.03)',
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
