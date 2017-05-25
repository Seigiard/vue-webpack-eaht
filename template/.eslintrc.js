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
  extends: 'prettier',
  {{/if_eq}}
  // required to lint *.vue files
  plugins: [
    'html',
    'vue'
    {{#if_eq lintConfig "standard"}},
    'prettier'
    {{/if_eq}}
  ],
  // add your custom rules here
  'rules': {
    {{#if_eq lintConfig "standard"}}
    "prettier/prettier": ["error", {
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true,
      "trailingComma": "none",
      "bracketSpacing": true,
      "jsxBracketSameLine": true
    }],
    {{/if_eq}}
    'vue/jsx-uses-vars': 2,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
