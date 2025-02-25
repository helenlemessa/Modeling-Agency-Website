/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        comic: ['Comic Sans MS', 'cursive'],
      },
    },
    
  },
  variants: {
    extend: {
      scale: ["active", "hover"],
    },
  },
  plugins: [],
}

