// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "postcss-import": {
      path: ['src/assets/css/']
    },
    "postcss-cssnext": {
      features: {
        colorRgba: false,
        rem: false
      }
    }
  }
}
