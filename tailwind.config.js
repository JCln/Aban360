/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      borderColor: {
        gray: "#D3D3D3",
        "light-gray": "var(--light-gray)",
        blue: "var(--blue)",
        dark: "#333",
      },
      fontFamily: {
        ravi: ["RaviRegular", "RaviNumRegular"],
      },
      fontSize: {
        tiny: "0.5",
        small: "0.625",
        base: "1rem",
        10: "10px",
        12: "12px",
        14: "14px",
        15: "15px",
        16: "16px",
      },
      colors: {
        meta: {
          1: "#DC3545",
          2: "#EFF2F7",
          3: "#10B981",
          4: "#313D4A",
          5: "#259AE6",
          6: "#FFBA00",
          7: "#FF6766",
          8: "#F0950C",
          9: "#E5E7EB",
          10: "#0FADCF",
        },
        gray: {
          DEFAULT: "#3f3f3f",
          2: "#E0E0E0",
          3: "#FAFAFA",
        },
        // gray: "#3f3f3f",
        "tab-disable": "#DDE1EE",
        "light-gray": "#C0C0C0",
        "light-blue": "#e7ecfb",
        red: "#730f12",
        "red-light": "#d7393e4d",
        blue: "#345ED4",
        black: {
          DEFAULT: "#1C2434",
          2: "#010101",
        },
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
      },
      backgroundColor: {
        gray: "var(--gray)",
        "light-gray": "#dadde84a",
        "light-blue": "var(--light-blue)",
      },
      width: {
        130: "130px",
        150: "150px",
        300: "300px",
        400: "400px",
        500: "500px",
      },
      maxWidth: {
        "8xl": "88rem", // 1408px
        "9xl": "96rem", // 1536px
        "10xl": "104rem", // 1664px
        "11xl": "112rem", // 1792px
        "12xl": "120rem", // 1920px
        "15xl": "144rem", // 2304px
        "20xl": "180rem", // 2880px
      },
      screens: {
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3072px",
      },
      height: {
        130: "130px",
        150: "150px",
      },
    },
  },
  plugins: [],
};
