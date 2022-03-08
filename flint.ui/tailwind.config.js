module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  mode: 'jit',
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      laptop: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      tablet: { max: '1272px' },
      // => @media (max-width: 1023px) { ... }

      mid: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      small: { max: '639px' }
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        earth: '#475447'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
}
