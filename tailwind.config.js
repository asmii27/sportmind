/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./client/src/**/*.{ts,tsx,js,jsx}",
    "./client/index.html",
  ],
  theme: { extend: {} },
  plugins: [require("@tailwindcss/typography")],
}
