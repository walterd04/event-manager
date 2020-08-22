const config = require('../.eslintrc.js');

module.exports = {
  ...config,
  ignorePatterns: ['/__tests__', '/build', '/public'],
};
