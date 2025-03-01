/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'deep-blue': '#003366',
        'rich-red': '#D71920',
        'dark-grey': '#4A4A4A',
        // Secondary colors
        'off-white': '#F9F9F9',
        'gold-accent': '#D4AF37',
        'light-grey': '#D1D1D1',
      },
      fontFamily: {
        // Primary typefaces
        'merriweather': ['var(--font-merriweather)'],
        'lato': ['var(--font-lato)'],
        // Secondary typefaces
        'montserrat': ['var(--font-montserrat)'],
        'roboto': ['var(--font-roboto)'],
      },
      backgroundColor: {
        'deep-blue': '#003366',
      },
      textColor: {
        'deep-blue': '#003366',
      },
      // Add animation keyframes and utilities
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        slideDown: 'slideDown 0.3s ease-in-out',
        slideUp: 'slideUp 0.3s ease-in-out',
        slideInRight: 'slideInRight 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
} 