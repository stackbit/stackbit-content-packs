const plugin = require('tailwindcss/plugin');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@stackbit/components/{base,layouts,components}/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: '#FFC329',
                secondary: '#FFF7E3',
                base: '#262626',
                'complimentary-1': '#e8f3ee',
                'complimentary-2': '#e2e4ff',
                info: '#EA5234'
            },
            fontFamily: {
                sans: ['Poppins', ...defaultTheme.fontFamily.serif]
            },
            spacing: {
                '1/1': '100%',
                '1/3': '33.333%',
                '1/2': '50%',
                '2/3': '66.667%'
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
