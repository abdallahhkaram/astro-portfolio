module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#000',
          DEFAULT: '#000',
          dark: '#000',
        },
        // primary: {
        //   light: '#F34954',
        //   DEFAULT: '#F34954',
        //   dark: '#F34954',
        // },
        secondary: {
          light: '#fff',
          DEFAULT: '#f1f5f9',
          dark: '#f1f5f9',
        },
        // secondary: {
        //   light: '#2B2D41',
        //   DEFAULT: '#222438',
        //   dark: '#222438',
        // },
      },
    },
  },
  // more options here
};
