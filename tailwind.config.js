/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#3B82F6", // Blue for light mode
          dark: "#60A5FA", // Lighter blue for dark mode
        },
        secondary: {
          light: "#EC4899", // Pink for light mode
          dark: "#F472B6", // Lighter pink for dark mode
        },
        bg: {
          light: "#F9FAFB", // Light gray for light mode
          dark: "#111827", // Dark gray for dark mode
        },
        bgGradient: {
          light: "#DBEAFE", // Light blue for light mode gradient
          dark: "#1F2937", // Darker gray for dark mode gradient
        },
        card: {
          light: "#FFFFFF",
          dark: "#1F2A44",
        },
        text: {
          light: "#1F2937",
          dark: "#D1D5DB",
        },
        border: {
          light: "#E5E7EB",
          dark: "#374151",
        },
        header: {
          light: "#3B82F6",
          lightGradient: "#60A5FA",
          dark: "#1E3A8A", // Dark blue for dark mode
          darkGradient: "#3B82F6",
        },
        headerText: {
          light: "#FFFFFF",
          dark: "#D1D5DB",
        },
      },
    },
  },
  plugins: [],
};
