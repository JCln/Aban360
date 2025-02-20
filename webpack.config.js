const path = require('path');

module.exports = {
  // other config options
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@pages': path.resolve(__dirname, 'src/pages/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@data': path.resolve(__dirname, 'src/data/'),
    },
  },
};