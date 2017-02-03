/**
 * Shareable ESLint-er config used in all bayzat projects.
 * @author Michal Kechner <kepek@bayzat.com>
 * @author Bernard Lange <bernard@bayzat.com>
 * @author Piotr Leszkowicz <piotr@bayzat.com>
 */

module.exports = {
    'extends': 'eslint:recommended',
    'env': {
        'es6': true,
        'node': true,
        'browser': true,
        'commonjs': true,
        'mocha': true
    },
    'ecmaFeatures': {
        'arrowFunctions': true,
        'binaryLiterals': true,
        'blockBindings': true,
        'classes': true,
        'defaultParams': true,
        'destructuring': true,
        'forOf': true,
        'generators': true,
        'modules': true,
        'objectLiteralComputedProperties': true,
        'objectLiteralDuplicateProperties': true,
        'objectLiteralShorthandMethods': true,
        'objectLiteralShorthandProperties': true,
        'octalLiterals': true,
        'regexUFlag': true,
        'regexYFlag': true,
        'restParams': true,
        'spread': true,
        'superInFunctions': true,
        'templateStrings': true,
        'unicodeCodePointEscapes': true,
        'globalReturn': true,
        'jsx': true
    },
    'rules': {
        'arrow-body-style': [2, 'always'],
        'arrow-parens': [2, 'always', { 'requireForBlockBody': true }],
        'brace-style': [ 2, '1tbs' ],
        'curly': 2,
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-unused-vars': [1, { 'vars': 'local', 'args': 'none' }],
        'indent': [ 2, 4, { 'SwitchCase': 1 } ],
        'key-spacing': [ 2, { 'beforeColon': false, 'afterColon': true } ],
        'keyword-spacing': 2,
        'quotes': [2, 'single'],
        'linebreak-style': [2, 'unix'],
        'max-params': [ 1, 4 ],
        'no-extra-bind': 2,
        'no-lonely-if': 2,
        'no-multi-spaces': 2,
        'no-param-reassign': 'error',
        'no-spaced-func': 2,
        'no-trailing-spaces': 2,
        'object-curly-spacing': ['error', 'always'],
        'semi': [2, 'never'],
        'spaced-comment': ['error', 'always'],
        'strict': 0
    }
}
