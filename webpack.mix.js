let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
 
mix .js('resources/js/app.js', 'app/public/assets/js')
	.sass('resources/scss/app.scss', 'app/public/assets/css')
	.options({
	    postCss: [
	        require('autoprefixer')({
	            browsers: ['last 40 versions'],
	        })
	    ]
	}
);