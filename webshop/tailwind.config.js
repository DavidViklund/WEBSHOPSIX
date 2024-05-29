/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        greyscale: {
          surface: {
            default: "#b9b1c5",
            subtle: "#f6f5f8",
            disabled: "#dcd8e2",
          },
          border: {
            default: "#b9b1c5",
            disabled: "#cac5d5",
            darker: "#6d6678",
          },
          text: {
            title: "#25212a",
            body: "#332f39",
            subtitle: "#504b59",
            caption: "#8a8298",
            negative: "#f6f5f8",
            disabled: "#a79eb7",
            icon: "#504b59",
          },
        },
        primary: {
          surface: {
            default: "#11cdef",
            subtle: "#e7fafd",
            lighter: "#6ee1f5",
            darker: "#065260",
          },
          border: {
            default: "#11cdef",
            subtle: "#cff5fc",
            lighter: "#6ee1f5",
            darker: "#087b8f",
          },
          text: {
            label: "#032930",
            icon: "#065260",
          },
        },
        error: {
          surface: {
            default: "#f5365c",
            subtle: "#feebef",
            lighter: "#f9869e",
            darker: "#641626",
          },
          border: {
            default: "#f5365c",
            subtle: "#fdd7df",
            lighter: "#f9869e",
            darker: "#942038",
          },
          text: {
            label: "#330b13",
            icon: "#641626",
          },
        },
        success: {
          surface: {
            default: "#2dce89",
            subtle: "#eafaf3",
            lighter: "#80e2b9",
            darker: "#125237",
          },
          border: {
            default: "#2dce89",
            subtle: "#d5f5e8",
            lighter: "#80e2b9",
            darker: "#1a7c53",
          },
          text: {
            label: "#09291c",
            icon: "#125237",
          },
        },
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "9xl": ["148px", { lineHeight: "152px", fontFamily: "Montserrat" }],
        "8xl": ["120px", { lineHeight: "124px", fontFamily: "Montserrat" }],
        "7xl": ["96px", { lineHeight: "100px", fontFamily: "Montserrat" }],
        "6xl": ["76px", { lineHeight: "80px", fontFamily: "Montserrat" }],
        "5xl": ["64px", { lineHeight: "68px", fontFamily: "Montserrat" }],
        "4xl": ["48px", { lineHeight: "52px", fontFamily: "Montserrat" }],
        "3xl": ["40px", { lineHeight: "44px", fontFamily: "Montserrat" }],
        "2xl": ["32px", { lineHeight: "36px", fontFamily: "Montserrat" }],
        xl: ["24px", { lineHeight: "32px", fontFamily: "Roboto" }],
        lg: ["20px", { lineHeight: "28px", fontFamily: "Roboto" }],
        base: ["16px", { lineHeight: "24px", fontFamily: "Roboto" }],
        sm: ["12px", { lineHeight: "20px", fontFamily: "Roboto" }],
      },
    },
  },
  plugins: [],
};
