const config = require('../.eslintrc');

module.exports = {
  ...config,
  extends: [
    'react-app',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:styled-components-a11y/recommended',
    ...config.extends,
  ],
  plugins: ['jsx-a11y', 'styled-components-a11y', ...config.plugins],
  rules: {
    ...config.rules,
    'import/no-cycle': 'error',
  },
};
