module.exports = {
    root: true, // So parent files don't get applied
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: [
        'plugin:import/recommended',
        'plugin:import/typescript',
        'airbnb-typescript',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.eslint.json', './tsconfig.json'],
        ecmaVersion: 7,
    },
    plugins: ['eslint-plugin-react-hooks', '@typescript-eslint/eslint-plugin'],
};
