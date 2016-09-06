require('laravel-elixir-vue');
const elixir = require('laravel-elixir');
require('./src/resources/assets/js/elixir/extensions');

const allFiles = '**.*';
elixir.config.sourcemaps = false;
elixir.config.assetsPath = 'src/resources/assets/';

elixir( mix =>
{
    mix.webpack('vue/index.js', 'src/public/js/app.js')
	mix.stack(mix)
	.fonts([
        '/font-awesome/fonts/' + allFiles,
        '/bootstrap/dist/fonts/' + allFiles
    ]);
});