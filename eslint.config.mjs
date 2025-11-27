// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';
import prettierConfig from 'eslint-config-prettier';

export default withNuxt(
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      ...prettierConfig.rules
    }
  },
  prettierConfig
);
