const OFF = 0
const WARN = 1
const ERROR = 2

module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:jsx-a11y/recommended", // TODO
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // typescript
    "@typescript-eslint/explicit-function-return-type": OFF,
    "@typescript-eslint/interface-name-prefix": OFF,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    // react
    "react/display-name": OFF,
    "react/prop-types": OFF,
    "react/jsx-no-target-blank": WARN,
    "react/no-unescaped-entities": WARN,
  },
}
