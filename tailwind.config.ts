import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#135bec',
        'primary-hover': '#0e4bce',
        secondary: '#F59E0B',
        cta: '#F97316',
        'cta-hover': '#EA6C00',
        'background-dark': '#07070F',
        'surface-dark': '#0F0F1E',
        'surface-2': '#161628',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        heading: ['var(--font-syne)', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.18', transform: 'scale(1.15)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
