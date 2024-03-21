const colors = require('tailwindcss/colors');

module.exports = {
    content: ['src/index.html', './src/modules/**/*.html', './src/modules/**/*.js'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: colors.slate
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
