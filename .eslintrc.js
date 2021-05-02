module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "react-app",
    "plugin:react/recommended",
    "prettier"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  globals: {
    "localStorage": true,
    "window": true,
    "HTMLElement": true
  },
  ignorePatterns: ['.eslintrc.js', 'config-overrides.js'],
  plugins: [
    "@typescript-eslint",
    "eslint-plugin-prettier",
    "react",
    "jsx-a11y",
    "import",
    "prettier",
    "risxss",
  ],
  rules: {
    "prettier/prettier": "error",
    "no-console": "warn",
    "import/extensions": "off",
    "react/react-in-jsx-scope": "off",
    "import/order": "error",
    "import/no-unresolved": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "react/no-array-index-key": 2,
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "risxss/catch-potential-xss-react": "error",
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": true, "optionalDependencies": false, "peerDependencies": false }
    ],
  },
};
