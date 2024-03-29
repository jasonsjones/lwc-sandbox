module.exports = {
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        babelOptions: {
            parserOpts: {
                plugins: ['classProperties', ['decorators', { decoratorsBeforeExport: false }]]
            }
        }
    },
    extends: ['prettier'],
    plugins: ['prettier', '@lwc/eslint-plugin-lwc'],

    rules: {
        'prettier/prettier': 'error',
        '@lwc/lwc/no-deprecated': 'error',
        '@lwc/lwc/valid-api': 'error',
        '@lwc/lwc/no-document-query': 'error'
    }
};
