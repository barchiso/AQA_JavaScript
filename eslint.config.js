import globals from 'globals';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,

	{
		// rules: {
		//   'no-unused-vars': 'warn',
		//   'no-undef': 'warn',
		//   'no-console': 'warn'
		// },
		// ignores: ['*/test.js']
		// env: {
		// 	jest: true, // Enables Jest globals
		// },
		plugins: ['jest'], // Add the Jest plugin
		extends: [
			'plugin:jest/recommended', // Use recommended Jest rules
		],
	},
];
