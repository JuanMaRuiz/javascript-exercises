module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
    },
    plugins: ['mocha'],
    extends: ['eslint:recommended', 'plugin:mocha/recommended'],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['./**/tests/**/*.test.js'],
            rules: {
                'mocha/no-mocha-arrows': 'off'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {},
}
