module.exports = {
	"env": {
		"es6": true,
		"node": true,
		"jest": true
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"extends": "airbnb/base",
	"parser": "babel-eslint",
	"rules": {
		"indent": [1, 2],
		"no-tabs": [1],
		"no-multiple-empty-lines": [1, {
			"max": 1,
			"maxEOF": 1,
			"maxBOF": 0
		}],
		"quotes": [1, "single", {
			"avoidEscape": true
		}],
		"no-use-before-define": [1, {
			"functions": false
		}],
		"prefer-const": [2],
		"arrow-parens": [1, "always"],
		"space-before-function-paren": [1, {
			"anonymous": "never",
			"named": "never",
			"asyncArrow": "always"
		}],
		"complexity": [0],
		"prefer-destructuring": [1, {
			"array": true,
			"object": true
		}],
		"comma-dangle": [0],
		"object-curly-spacing": [1, "always"],
		"object-curly-newline": [2, {
			"consistent": true
		}],
		"no-underscore-dangle": [0],
		"curly": [2, "all"],
		"no-plusplus": [2, {
			"allowForLoopAfterthoughts": true
		}],
		"no-console": [0],
		"strict": [0],
		"max-len": [0]
	}
};
