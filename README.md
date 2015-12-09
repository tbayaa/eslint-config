# eslint-config-bayzat

This package provides bayzat's .eslintrc as an extensible [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html).

## Usage

Our default export contains all of our ESLint rules, including EcmaScript 6+.

1. `npm install --save-dev bitbucket:bayzat/eslint-config `
2. add it to your `.eslintrc` file

    ```json
    {
      "extends": "eslint-config-bayzat"
    }

    ```

## Editors

If you want to use this config with your favourite code editor you will probably need to install this config globally into your system library.

`npm install --global bitbucket:bayzat/eslint-config`

See the [ESlint config docs](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like
anything involving regexes. Perhaps in a distant future, we could use literate
programming to structure our README as test cases for our .eslintrc?

You can make sure this module lints with itself using `npm run lint`.

## Support
If you have any problem or suggestion please open an issue [here](https://bitbucket.org/bayzat/eslint-config/issues).

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2015, Michal Kechner

## ఠ ͟ಠ Pull requests are welcome, naturally

![](http://i.imgur.com/Ikzywtp.gif)

----

Made with ♥ at [bayzat](http://bayzat.com)!