module.exports = {
  "parser": "babel-eslint",
  "extends": ['airbnb', 'plugin:react/recommended'],
  "plugins": ["react", "jsx-a11y", "import"],
  "rules": {
    "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/destructuring-assignment": 1,
    "no-underscore-dangle": ["warn", { "allow": ["_id", "_register", "_shift", "_store", "_user"] }],
    "import/prefer-default-export": 0,
    "no-console": 0,
    "semi": 0,
    "no-multiple-empty-lines": 0,
    "space-in-parens": ["warn", "never"],
    "quotes": 0,
    "no-tabs": 0,
    "jsx-quotes": 0,
    "comma-dangle": 0,
    "arrow-body-style": 0,
    "indent": 0,
    "import/no-extraneous-dependencies": 0,
    "no-unused-vars": 1,
    "space-before-function-paren": ["warn", "never"],
    "arrow-parens": ["warn"],
    "generator-star-spacing": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "jsx-a11y/label-has-associated-control": 0,
    "react/jsx-indent": 0,
    "react/jsx-props-no-spreading": 1,
    "react/prop-types": 1,
    "react/jsx-indent-props": 0,
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-multi-comp": 0,
    "react/no-array-index-key": 0,
    "no-param-reassign": ["warn"],
    "no-restricted-globals": ["warn"],
    "no-nested-ternary": ["warn"],
    "max-len": ["warn"],
    "react/display-name": 0,
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack.config.js"
      }
    }
  },
  "globals": {
    "navigator": true,
    "window": true,
    "document": true,
    "fetch": true,
  }
}
