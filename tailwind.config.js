/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // src 폴더 안의 모든 React 파일에 Tailwind 적용
  ],
  theme: {
    extend: {
      fontFamily: {
        apple: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        myDark: "#1d1d1f",
        macRed: "#FF605C",
        macYellow: "#FFBD44",
        macGreen: "#00CA4E",
        macNotesTopDark: "#3C3B3C",
        macNotesSideDark: "#2A2629",
        macNotesMainDark: "#1e1e1e",
        macNotesTopLight: "#e5e4e4",
        macNotesSideLight: "#f8f7f7",
        macNotesMainLight: "#ffffff",
      },
    },
  },
  plugins: [],
};
