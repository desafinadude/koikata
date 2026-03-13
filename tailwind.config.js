/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        vaporware: {
          primary: '#f72585',           // neon pink
          'primary-content': '#ffffff',
          secondary: '#7209b7',         // deep purple
          'secondary-content': '#ffffff',
          accent: '#4cc9f0',            // cyan
          'accent-content': '#0d0d1a',
          neutral: '#e0d7ff',           // soft lavender
          'neutral-content': '#0d0d1a',
          'base-100': '#0d0d1a',        // near-black
          'base-200': '#13132a',
          'base-300': '#1a1a3e',
          'base-content': '#e0d7ff',
          info: '#4cc9f0',
          success: '#06d6a0',
          warning: '#ffd166',
          error: '#ef233c',
        },
      },
      {
        comic: {
          primary: '#e63946',          // bold manga red
          'primary-content': '#ffffff',
          secondary: '#457b9d',        // ink blue
          'secondary-content': '#ffffff',
          accent: '#f4a261',           // warm amber
          'accent-content': '#1c1917',
          neutral: '#1d1d1d',          // near-black ink
          'neutral-content': '#ffffff',
          'base-100': '#fffef7',       // warm off-white paper
          'base-200': '#f5f0e8',       // slightly warmer
          'base-300': '#e8e0d0',       // parchment edge
          'base-content': '#1d1d1d',
          info: '#3b82f6',
          success: '#2a9d8f',
          warning: '#e9c46a',
          error: '#e63946',
        },
      },
    ],
    darkTheme: 'comic',
    base: true,
    styled: true,
    utils: true,
    logs: false,
  },
}
