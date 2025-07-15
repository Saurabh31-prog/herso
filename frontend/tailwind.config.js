/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-0.5rem)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },

      animation: {
        "spin-slow": "spin 6s linear infinite",
        fadeIn: "fadeIn 0.2s ease-out",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },

      colors: {
        primary: "#1d3557", // Dark Blue
        secondary: "#457b9d", // Muted Cyan
        accent: "#f4a261", // Warm Orange
        neutral: "#f8f9fa", // Soft White
      },
    },
  },
  plugins: [],
};


