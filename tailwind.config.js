/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#0A0A0A',
        white: '#FFFFFF',
        pink: {
          accent: '#FF2D9B',
        },
      },
      fontFamily: {
        display: ['Bebas Neue', 'Anton', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 45, 155, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 45, 155, 0.7)' },
        },
      },
    },
  },
  plugins: [],
};
