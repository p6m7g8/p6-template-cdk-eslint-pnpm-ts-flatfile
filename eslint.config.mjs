import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    '.github/',
    '.mergify.yml',
    '.vscode/',
    'cdk.json',
    'package.json',
    'tsconfig.json',
  ],
  plugins: {
  },
  languageOptions: {
  },
  rules: {
  },
  settings: {
  },
})
