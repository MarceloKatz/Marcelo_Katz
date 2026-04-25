/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        ink: "#1a1a1a",
        paper: "#fafaf7",
        accent: "#d97706",
        muted: "#6b6b6b",
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
