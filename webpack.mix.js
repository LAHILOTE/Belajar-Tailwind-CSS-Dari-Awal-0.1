let mix = require('laravel-mix');
var tailwindcss = require('tailwindcss');

mix.js('src/app.js', 'dist')
    .sass('src/app.scss', '')
    .options({
        processCssUrls: false,
        postCss: [tailwindcss('./tailwind.js')],
    })
    .setPublicPath('dist');