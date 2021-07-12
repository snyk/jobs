module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '~': `${__dirname}/src`,
        icons: `${__dirname}/node_modules/vue-material-design-icons`,
      },
    },
  },
};
