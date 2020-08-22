const path = require('path');

const tasks = (arr) => arr.join(' && ');

module.exports = {
  hooks: {
    'pre-commit': tasks(['lint-staged --concurrent false']),
  },
};
