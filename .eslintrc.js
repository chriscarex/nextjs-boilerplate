module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:security/recommended',
  ],
  plugins: [
    'import',
    'security',
    'react',
    'react-hooks',
    'html',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable',
  },
  rules: {
    'import/prefer-default-export': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 0,
    'linebreak-style': ['error', 'unix'],
    'comma-dangle': ['error', 'only-multiline'],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/href-no-hash': [0],
    'jsx-a11y/anchor-is-valid': [0],
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-case-declarations': 0,
    radix: 0
  }
};
