/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  important: '#root',
  theme: {
    fontFamily: {
      serif: ['Unbounded', 'serif'],
      sans: ['Mulish', 'sans'],
    },
    extend: {
      screens: {
        'xs-max': { max: '320px' },
        'sm-max': { max: '480px' },
        'md-max': { max: '768px' },
        'lg-max': { max: '1024px' },
        'xl-max': { max: '1440px' },
      },
      colors: {
        primary: '#ffc30f',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '10px',
          'xs-max': '10px',
          'sm-max': '20px',
          'md-max': '50px',
          'lg-max': '100px',
          'xl-max': '10rem',
        },
        screens: {
          'xl-max': '1440px',
        },
      },
    },
  },
  plugins: [],
}
