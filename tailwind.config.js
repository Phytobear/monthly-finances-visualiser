/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neu: {
          base: "#EEF2FF", // Made background plae blue so boxes stand out more
          light: "#FFFFFF",
          dark: "#D1D9E6",
          accent: "#6366F1",
        },
      },
      // Made shaddows more pronounced
      boxShadow: {
        "neu-flat": `4px 4px 8px 0 rgba(209, 217, 230, 0.5),
                    -4px -4px 8px 0 rgba(255, 255, 255, 0.8),
                    inset 1px 1px 1px 0 rgba(255, 255, 255, 0.2)`,
        "neu-pressed": `inset 4px 4px 8px 0 rgba(209, 217, 230, 0.5),
                      inset -4px -4px 8px 0 rgba(255, 255, 255, 0.8)`,
        "neu-component": `8px 8px 16px 0 rgba(209, 217, 230, 0.6),
                        -8px -8px 16px 0 rgba(255, 255, 255, 0.8),
                        inset 1px 1px 1px 0 rgba(255, 255, 255, 0.2)`,
      },
    },
  },
  plugins: [],
};
