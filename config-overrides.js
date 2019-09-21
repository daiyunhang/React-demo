const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    disableEsLint
} = require('customize-cra');
module.exports = override(

    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    // disable eslint in webpack
    disableEsLint(),

    fixBabelImports('import', { libraryName: 'antd', libraryDirectory: 'es', style: true }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1890ff' },
    }),
);