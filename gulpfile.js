const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix){
    //var bootstrapPath = './node_modules/bootstrap-sass/assets';
    mix.styles([
        'style.css',
        'dark.css',
        'font-icons.css',
        'animate.css',
        'magnific-popup.css',
        'responsive.css',
    ],'public/assets/css/index.css');
    mix.copy('./resources/assets/css/fonts','public/assets/css/fonts');
    mix.copy('./resources/assets/images','public/assets/images');
    //mix.copy(bootstrapPath + '/fonts', 'public/assets/fonts');
    mix.sass('app.scss','public/assets/css/app.css');
    mix.scripts(['plugins.js','functions.js'],'public/assets/js/index.js');


    mix.webpack(
        [
            'app.js',
            './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
            './node_modules/jquery-ui/ui',
            './node_modules/sweetalert2/dist/sweetalert2.min.js',
            './node_modules/angular/angular.min.js',
            //'./node_modules/angular-messages/angular-messages.min.js',
        ], 'public/assets/js/');
    mix.copy('/node_modules/bootstrap-sass/assets/fonts', 'public/assets/fonts');
    mix.webpack('receitas/receitas.js','public/assets/js/');
    mix.styles(
        [
            './node_modules/jquery-ui/themes/base/theme.css',
            './node_modules/sweetalert2/dist/sweetalert2.min.css',
        ], 'public/assets/css/all.css');
    mix.copy('./node_modules/jquery-ui/themes/base/images', 'public/assets/images');

});
