module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-font-smoothing": {},
    "postcss-easing-gradients": {},
    "postcss-nested": {},
    "postcss-preset-env": {
      stage: 0,
      preserve: false //Удалять свойства недоступные для данной настройки **Только для stage 0**
    },
    cssnano: {}
  }
};
