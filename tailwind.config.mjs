import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Mohave variable', 'Mohave', ...defaultTheme.fontFamily.sans],
        sans: [
          'Quicksand variable',
          'Quicksand',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        // body: ,
        primary: '#1E1D20',
        // secondary: '#1E1D20',
        accent: '#f97316',
        background: '#F6F6F6',
        border: '#000000',
        'footer-text': '#FFFFFF',
        'footer-border': '#FFFFFF',
        'footer-background': '#1E1D20',
      },
      clipPath: {
        custom: 'polygon(0 35%, 100% 0, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
