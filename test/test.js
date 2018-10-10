'use strict'

const assert = require('assert')
const eslint = require('eslint')
const conf = require('../')

// The source files to lint.
const repoFiles = [
    'index.js',
    'test/test.js'
]

// Use the rules defined in this repo to test against.
const eslintOpts = {
    envs: ['node', 'es6'],
    useEslintrc: false,
    rules: conf.rules
}

// Runs the linter on the repo files and asserts no errors were found.
const cli = new eslint.CLIEngine(eslintOpts)
const report = cli.executeOnFiles(repoFiles)
if (report.errorCount || report.warningCount) {
    // get the default formatter
    const formatter = cli.getFormatter()

    // output to console
    console.log(formatter(report.results)) // eslint-disable-line no-console
}

assert.equal(report.errorCount, 0)
assert.equal(report.warningCount, 0)
repoFiles.forEach((file, index) => {
    assert(report.results[index].filePath.endsWith(file))
})
