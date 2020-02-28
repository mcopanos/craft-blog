const mix = require('laravel-mix');


mix.version()
    .disableNotifications()
    .setPublicPath('web')
    .js('assets/js/main.js', 'web/js/main.js')
    .sass('assets/sass/app.scss', 'web/css/')
    .copyDirectory('assets/css', 'web/css')
    .sourceMaps()
    .browserSync({
        proxy: 'localhost:8080',
        files: ['templates/**/*', 'web/css/*.css', 'web/js/*.js']
    })