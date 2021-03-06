module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:vue/essential",
		"plugin:prettier/recommended",
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["vue", "prettier"],
	rules: {
		"no-unused-vars": ["warn"],
		"prettier/prettier": [
			"warn",
			{
				endOfLine: "auto",
			},
		],
	},
};
