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
		'ter-indent': [true, 'tab', {'SwitchCase': 1}],
		'indent': [true, 'tabs'],
		'interface-name': [true, 'never-prefix'],
		'variable-name': [
			true,
			'ban-keywords',
			'check-format',
			'allow-pascal-case',
		],
		'member-ordering': [
			true,
			{
			  'order': [
				 {
					'name': 'fields',
					'kinds': [
						'public-static-field',
						'public-instance-field',
						'protected-static-field',
						'protected-instance-field',
						'private-static-field',
						'private-instance-field',
					],
				 },
				 {
					'name': 'constructor',
					'kinds': [
						'public-constructor',
						'protected-constructor',
						'private-constructor',
					],
				 },
				 {
					'name': 'methods',
					'kinds': [
						'public-static-method',
						'protected-static-method',
						'private-static-method',
						'public-instance-method',
						'protected-instance-method',
						'private-instance-method',
					],
				 },
				],
			},
		],
		'no-switch-case-fall-through': true,
	},
};
