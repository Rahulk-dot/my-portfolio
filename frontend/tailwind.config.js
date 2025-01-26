/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        customElements: ['Cinzel', 'serif'],
        iMFellDoublePica: ['"IM Fell Double Pica"', 'serif']
      }
    }
  },
  plugins: []
};
