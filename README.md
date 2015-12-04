# eslint-config-bayzat

This package provides bayzat's .eslintrc as an extensible [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

We export three ESLint configurations for your usage.

### eslint-config-bayzat

Our default export contains all of our ESLint rules, including EcmaScript 6+. It requires `eslint`.

1. `npm install --save-dev eslint-config-bayzat eslint`
2. add `"extends": "bayzat"` to your .eslintrc



See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can make sure this module lints with itself using `npm run lint`.