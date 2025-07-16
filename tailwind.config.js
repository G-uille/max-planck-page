/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'ap-',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    // Solo si en algún momento querés usar clases *no* prefijadas sin que se purguen.
    // En este nuevo enfoque, probablemente no necesites ninguna de estas:
    'absolute',
    'inset-0',
    'aspect-square',
    'bg-gradient-to-l',
    'from-[var(--color-from)]',
    'via-[var(--color-to)]',
    'to-transparent',
    'rounded-[inherit]',
    'pointer-events-none',
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        secondary: "#FFF600",
        primary: "#FFC730",
        dark: "#1D1E27",
        light: '#F1F7FF'
      }
    }
  },
  plugins: [],
};
