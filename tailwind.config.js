/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(var(--marine-blue) / <alpha-value>)',
        'purplish-blue': 'hsl(var(--purplish-blue) / <alpha-value>)',
        'pastel-blue': 'hsl(var(--pastel-blue) / <alpha-value>)',
        'light-blue': 'hsl(var(--light-blue) / <alpha-value>)',
        'strawberry-red': 'hsl(var(--strawberry-red) / <alpha-value>)',
        'cool-gray': 'hsl(var(--cool-gray) / <alpha-value>)',
        'light-gray': 'hsl(var(--light-gray) / <alpha-value>)',
        'magnolia': 'hsl(var(--magnolia) / <alpha-value>)',
        'alabaster': 'hsl(var(--alabaster) / <alpha-value>)',
        'white': 'hsl(var(--white) / <alpha-value>)',
      },
      fontFamily: {
        'ubuntu': [ 'ubuntu','sans-serif']
      },
      backgroundImage: {
        'sidebar-desktop': "url('/src/assets/bg-sidebar-desktop.svg')",
        'sidebar-mobile': "url('/src/assets/bg-sidebar-mobile.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}