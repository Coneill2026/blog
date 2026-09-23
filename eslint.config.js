import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    rules: {
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
    },
  },
];