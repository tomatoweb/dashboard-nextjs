'use strict'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,css}'],
    corePlugins: {
        preflight: false
      },
      important: '#__next',
    theme: {
      extend: {},
    },
    plugins: [
        require('tailwindcss-logical'),
        require('./src/tailwind/plugin')
    ],
  }