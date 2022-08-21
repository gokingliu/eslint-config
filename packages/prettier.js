module.exports = {

  plugins: ['prettier', 'chalk'], rules: {
    'prettier/prettier': [
      'warn',
      {
        'printWidth': 120,
        'tabWidth': 2,
        'useTabs': false,
        'semi': true,
        'singleQuote': true,
        'quoteProps': 'as-needed',
        'jsxSingleQuote': false,
        'trailingComma': 'all',
        'bracketSpacing': true,
        'jsxBracketSameLine': false,
        'arrowParens': 'always',
        'rangeStart': 0,
        'rangeEnd': null,
        'requirePragma': false,
        'insertPragma': false,
        'proseWrap': 'preserve',
        'htmlWhitespaceSensitivity': 'css',
        'vueIndentScriptAndStyle': false,
        'endOfLine': 'lf',
        'embeddedLanguageFormatting': 'auto'
      },
      {
        'usePrettierrc': false
      }
    ]
  }
};