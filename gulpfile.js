require('laravel-elixir-vueify');
var elixir = require('laravel-elixir');
require('./src/resources/assets/js/elixir/extensions');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src/resources/assets/';

elixir(function(mix)
{
	mix.browserify('vue/index.js', 'src/public/js/app.js');
	mix.stack(mix);
	.fonts([
        '/font-awesome/fonts/**.*',
        '/bootstrap/dist/fonts/**.*'
    ]);
});