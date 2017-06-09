const precss = require('precss');
const autoprefixer = require('autoprefixer');
const grid = require('postcss-grid');

module.exports = {
  plugins: [
    precss,
    autoprefixer,
    // grid,
  ],
};
