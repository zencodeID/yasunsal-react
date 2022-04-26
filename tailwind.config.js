module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {
      colors: {
        utama: '#E5E3C9',
        kedua: '#B4CFB0',
        ketiga: '#94B49F',
        dark: '#525E75',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
