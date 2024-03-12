/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', './src/**/*jsx',
    'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      
    },
   
  },
  variants: {
    extend: {
      fontFamily: ['responsive', 'hover', 'focus'],
    },
  plugins: [
    require('@tailwindcss/typography'), 
    require('@tailwindcss/aspect-ratio'),
    require('flowbite/plugin'),
    require('daisyui')


 
  ],
  layers: {
    components: [],
  },
  corePlugins: {
    applyUtilities: true
  }
}

}

