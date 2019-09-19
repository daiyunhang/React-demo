const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', { libraryName: 'antd', libraryDirectory: 'es', style: true }),
    fixBabelImports(['@babel/plugin-proposal-decorators', { "legacy": true }]),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1890ff' },
    }),
);