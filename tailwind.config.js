/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#081229',
        blue: '#102B5C',
        indigo: '#2D3A8C',
        purple: '#4B2E83',
        maroon: '#6B1839',
        wine: '#7A1F46',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(8, 18, 41, 0.25)',
      },
    },
  },
  plugins: [],
};
