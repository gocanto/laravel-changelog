var elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src/assets/';

elixir(function(mix)
{
	mix.browserify('index.js', 'src/public/js/extension.js');
});