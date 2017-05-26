// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
  },
  {{#if_eq lintConfig "standard"}}
  extends: [
    'eaht'
  ],
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
  ],
  // add your custom rules here
  'rules': {
    'vue/jsx-uses-vars': 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
