const tailwindcss = require('tailwindcss');

const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/components/*.svelte', './src/routes/*.svelte'],

    whitelistPatterns: [/svelte-/],

    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

const production = !process.env.ROLLUP_WATCH;

module.exports = {
    plugins: [tailwindcss('./tailwind.config.js'), ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])],
};
