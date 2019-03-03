const path = require('path');

module.exports = {
	extends: [
		'tslint-config-airbnb',
	],
	rulesDirectory: [
		path.join(path.dirname(require.resolve('tslint-consistent-codestyle')), './'),
		path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules'),
	],
	rules: {
		'no-collapsible-if': true,
		'no-unnecessary-else': true,
		'no-static-this': true,
		"ter-indent": [true, "tab", {"SwitchCase": 1}],
		"indent": [true, "tabs"],
	},
};
