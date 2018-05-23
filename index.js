/**
 * Shareable ESLint-er config used in all bayzat projects.
 * @author Michal Kechner <kepek@bayzat.com>
 * @author Bernard Lange <bernard@bayzat.com>
 * @author Piotr Leszkowicz <piotr@bayzat.com>
 * @author Jiri Prokop <jiri@bayzat.com>
 */

module.exports = {
    'extends': 'eslint:recommended',
    'parserOptions': {
        'ecmaVersion': 2017,
        'sourceType': 'module'
    },
    'env': {
        'es6': true,
        'node': true,
        'browser': true,
        'commonjs': true,
        'mocha': true
    },
    'rules': {
        'arrow-parens': [ 'error', 'always' ],
        'arrow-body-style': [ 'error', 'always'],
        'arrow-spacing': 'error',
        'brace-style': [ 'error', '1tbs' ],
        'comma-dangle': [ 'error', 'never' ],
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
        'object-curly-spacing': [ 'error', 'always' ],
        'semi': [ 'error', 'never' ],
        'space-infix-ops': [ 'error', { 'int32Hint': false } ],
        'spaced-comment': [ 'error', 'always' ],
        'space-before-blocks': 'error',
        'space-before-function-paren': [ 'error', 'never' ],
        'strict': 'off',
        'quotes': [ 'error', 'single' ],
        'eol-last': [ 'error', 'always' ]
    }
}
