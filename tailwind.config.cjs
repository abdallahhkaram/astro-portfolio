module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--bgPrimary)',
        },
        secondary: {
          DEFAULT: 'var(--bgSecondary)',
        },
        tertiary: {
          DEFAULT: 'var(--bgTertiary)',
        },
      },
    },
  },
};
