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
        // Brand accent — violet
        primary: '#7c3aed',
        'primary-hover': '#6d28d9',
        // CTA — dark ink (Wiza-style dark pill)
        cta: '#1c1917',
        'cta-hover': '#292524',
        // Amber second accent
        secondary: '#f59e0b',
        // Light backgrounds
        'bg-base': '#fefcf8',
        'bg-alt': '#fef9ee',
        'bg-card': '#ffffff',
        // Dark surfaces (footer)
        'background-dark': '#1c1917',
        'surface-dark': '#28211e',
        'surface-2': '#342c28',
        // Ink text scale
        ink: '#1c1917',
        'ink-2': '#44403c',
        'ink-3': '#78716c',
        'ink-4': '#a8a29e',
        // Borders
        'border-warm': '#e7e5e4',
        'border-soft': '#f5f5f4',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        heading: ['var(--font-syne)', 'sans-serif'],
      },
      animation: {
        'blob-drift': 'blob-drift 12s ease-in-out infinite',
        'blob-drift-slow': 'blob-drift 16s ease-in-out 3s infinite',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out 1s infinite',
        'fade-up': 'fade-up 0.6s ease-out forwards',
        shimmer: 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        'blob-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.97)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(28 25 23 / 0.06), 0 1px 2px -1px rgb(28 25 23 / 0.06)',
        'card-hover': '0 8px 24px -4px rgb(124 58 237 / 0.12), 0 2px 8px -2px rgb(28 25 23 / 0.08)',
        float: '0 20px 40px -8px rgb(28 25 23 / 0.12)',
      },
    },
  },
  plugins: [],
}

export default config
