import oxlint from "eslint-plugin-oxlint";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ['**/*.ts'],
  extends: [
    tseslint.configs.base,
  ],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "error",
  },
}, ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"));

// export default [
//   {
//     files: ["**/*.ts"],
//     rules: {
//       "@typescript-eslint/no-non-null-assertion": "error",
//     },
//   },
//   // ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
// ];
