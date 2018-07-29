module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "no-null"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            { "SwitchCase": 1 }
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "object-curly-spacing": [ "error", "always" ],
        "array-bracket-spacing": [ "error", "always" ],
        "key-spacing": [ "error", { "beforeColon": false, "afterColon": true } ],
        "prefer-const": [ "error" ],
        "no-empty": [ "error", { "allowEmptyCatch": true } ],
        "no-unreachable": [ "error" ],
        "curly": [ "error", "multi-or-nest" ],
        "no-alert": [ "error" ],
        "no-else-return": [ "error" ],
        "no-extra-bind": [ "error" ],
        "camelcase": [ "error" ],
        "lines-between-class-members": [ "error" ],
        "no-multiple-empty-lines": [ "error", { "max": 1 } ],
        "no-tabs": [ "error" ],
        "prefer-arrow-callback": [ "error" ],
        "prefer-template": [ "error" ],
        "space-before-blocks": [ "error", "always" ],
        "no-null/no-null": [ "error" ],
        "space-infix-ops": [ "error" ],
        "no-multi-spaces": [ "error" ],
        "block-spacing": [ "error" ],
        "no-var": [ "error" ]
    },
    "globals": {
        "EXTENSION_ID": false,
        "chrome": false,
        "ENVIRONMENT": false
    }
};