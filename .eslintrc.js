module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"plugin:vue/essential",
		"xo",
	],
	parserOptions: {
		ecmaVersion: "latest",
		parser: "@typescript-eslint/parser",
		sourceType: "module",
	},
	plugins: [
		"vue",
		"@typescript-eslint",
	],
	rules: {
		semi: ["error", "always"],
		quotes: ["error", "double"],
		indent: ["error", 4],
		"eol-last": ["error", "never"],
		"linebreak-style": 0,
	},
};