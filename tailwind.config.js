/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        space: ['"Space Grotesk"', "sans-serif"],
        neue: ['"Neue Montreal"', "sans-serif"],
      },
      colors: {
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        accent: {
          teal: "#0D9488",
          coral: "#F97316",
        },
        charcoal: "#1F2937",
        "off-white": "#F9FAFB",
      },
      fontSize: {
        h1: ["48px", { lineHeight: "1.1", fontWeight: "700" }],
        h2: ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        h3: ["24px", { lineHeight: "1.3", fontWeight: "600" }],
        body: ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["16px", { lineHeight: "1.5", fontWeight: "400" }],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "hover-reveal": "hoverReveal 0.3s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        hoverReveal: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
      },
    },
  },
  plugins: [],
};
