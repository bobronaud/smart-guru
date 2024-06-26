import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

const customRules = {
	'react/react-in-jsx-scope': 'off',
};

export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	{
		...pluginReactConfig,
		settings: { ...pluginReactConfig.settings, react: { version: 'detect' } },
	},
	{ rules: customRules },
	eslintConfigPrettier,
	eslintPluginPrettierRecommended,
];
