const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@types': 'src/@types',
    '@components': 'src/components',
    '@redux': 'src/redux',
    '@themes': 'src/themes',
    '@routes': 'src/routes',
    '@views': 'src/views',
    '@layout': 'src/layout',
    '@styles': 'src/styles',
    '@utils': 'src/utils',
    '@assets': 'src/assets',
    '~': 'src',
  })(config);

  return config;
};
