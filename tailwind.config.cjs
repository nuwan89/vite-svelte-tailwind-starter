/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",'./src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-bg': 'var(--primary-bg)',
        'text-color': 'var(--text-color)',
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: []
}
