const CracoLessPlugin = require('craco-less');

module.exports = {
  babel: {
    // Support the decorator
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true, // Set to true is Less here is CSS
        },
      ],
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // There will be different configurations in accordance with the difference from the Less-Loader version. See the Less-Loader official documentation.
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@font-family': 'Open Sans Condensed',
              '@font-size-base': '16px',
              '@text-color': '#121212',
              '@layout-header-background': 'transparent',
              '@layout-body-background': 'transparent',
              '@link-color': '#000',
              '@divider-color': '#646464',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
