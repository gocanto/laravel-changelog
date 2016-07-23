var Gulp = require('gulp');
var config = require('./config');
var Elixir = require('laravel-elixir');

Elixir.extend('fonts', function(source) {

    if ( typeof source === 'string' ) {

        Gulp
        .src(config.npm + source)
        .pipe(Gulp.dest(config.fonts));

    } else {

        for (var key in source) {

            Gulp
            .src(config.npm + source[key])
            .pipe(Gulp.dest(config.fonts));

        }
    }
});

Elixir.extend('stack', function (mix)
{
    mix.styles([
        config.npm + '/bootstrap/dist/css/bootstrap.min.css',
        config.npm + '/font-awesome/css/font-awesome.min.css',

        //THEME
        config.theme + '/index.css'

    ], 'src/public/css/app.css');

});
