module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
  },
  ignorePatterns: [
    "vite.config.ts",
    ".eslintrc.cjs",
    "jest.config.cjs",
    "jest.setup.ts",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["import", "unused-imports"],
  rules: {
    // Airbnbのルールから一部無効化
    // Reactの明示的なインポートを不要にする(Reactv17で対応)
    "react/react-in-jsx-scope": "off",

    "import/order": [
      // 条件に沿ったソート順になっていないと警告する
      "warn",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          // React関係のimportは最上部にソートする
          {
            pattern: "{react,react-dom/**,react-router-dom}",
            group: "builtin",
            position: "before",
          },
        ],
        alphabetize: {
          order: "asc",
        },
        "newlines-between": "always",
      },
    ],
  },
};
