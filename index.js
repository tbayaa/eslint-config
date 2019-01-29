/**
 * Shareable ESLint-er config used in all bayzat projects.
 * @author Michal Kechner <kepek@bayzat.com>
 * @author Bernard Lange <bernard@bayzat.com>
 * @author Piotr Leszkowicz <piotr@bayzat.com>
 * @author Jiri Prokop <jiri@bayzat.com>
 */
const { DEFAULT_IGNORED_PROPERTIES } = require('eslint-plugin-ember/lib/rules/avoid-leaking-state-in-ember-objects')

module.exports = {
    plugins: [
        'ember',
        'bayzat'
    ],
    extends: [
        'eslint:recommended',
        'plugin:ember/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    env: {
        es6: true,
        node: true,
        browser: true,
        commonjs: true,
        mocha: true
    },
    rules: {
        // FIXME jprokop: during implementation of following two rules we discovered
        // the problem with Ember Data and Ember's proxies; it cannot be safely auto-fixed
        // We may introduce those rules later as a suggestions, or apply them and revert selectively places
        // where proxies are used. There is AR-1606 to track this.
        //
        // the following two rules can lead to another error:
        // if the code is autofixed and imported get/getProperties function is not used anymore
        // => it requires manual change in that case
        // 'bayzat/no-get-for-flat-props': 'error',
        // 'bayzat/no-get-properties-for-flat-props': 'error',

        'bayzat/no-get-properties-with-array': 'error',
        // to support propTypes definition on class prototype
        'ember/avoid-leaking-state-in-ember-objects': [ 'error', [
            ...DEFAULT_IGNORED_PROPERTIES,
            'propTypes'
        ]],
        'arrow-parens': [ 'error', 'always' ],
        'arrow-body-style': [ 'error', 'always'],
        'arrow-spacing': 'error',
        'brace-style': [ 'error', '1tbs' ],
        'comma-dangle': [ 'error', 'never' ],
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'curly': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'indent': [ 'error', 4, { 'SwitchCase': 1 } ],
        'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true } ],
        'keyword-spacing': 'error',
        'linebreak-style': [ 'error', 'unix' ],
        'max-params': [ 'warn', 4 ],
        'no-extra-bind': 'error',
        'no-lonely-if': 'error',
        'no-multi-spaces': 'error',
        'no-param-reassign': 'error',
        'no-spaced-func': 'error',
        'no-trailing-spaces': 'error',
        'no-unused-vars': [ 'error', { 'vars': 'all', 'args': 'none' } ],
        'no-var': 'error',
        'object-curly-spacing': [ 'error', 'always' ],
        'prefer-const': ['error', { 'destructuring': 'all', 'ignoreReadBeforeAssign': false }],
        'semi': [ 'error', 'never' ],
        'space-infix-ops': [ 'error', { 'int32Hint': false } ],
        'spaced-comment': [ 'error', 'always' ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [ 'error', 'never' ],
        'strict': 'off',
        'quotes': [ 'error', 'single' ],
        'eol-last': [ 'error', 'always' ]
    },
    overrides: [
        // no jquery in test files
        {
            files: [
                'tests/unit/**/*-test.js',
                'tests/integration/**/*-test.js',
                'tests/acceptance/**/*.js'
            ],
            rules: {
                'bayzat/no-jquery': 'error'
            }
        }
    ]
}
