/**
 * Shareable ESLint-er config used in all bayzat projects.
 * @author Michal Kechner <kepek@bayzat.com>
 */

module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "es6": true,
        "node": true,
        "browser": true,
        "commonjs": true,
        "mocha": true
    },
    "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": true,
        "destructuring": true,
        "forOf": true,
        "generators": true,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": true,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": true,
        "regexUFlag": true,
        "regexYFlag": true,
        "restParams": true,
        "spread": true,
        "superInFunctions": true,
        "templateStrings": true,
        "unicodeCodePointEscapes": true,
        "globalReturn": true,
        "jsx": true
    },
    "rules": {
        "no-unused-vars": [1, {"vars": "local", "args": "none"}],
        "indent": [2, 4, {"SwitchCase": 1}],
        "quotes": [2, "single"],
        "linebreak-style": [2, "unix"],
        "semi": [2, "never"],
        "strict": 0
    }
}
