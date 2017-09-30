# Laravel Light Bootstrap Dashboard
Laravel 5.4 Package for integrating Light Bootstrap Dashboard template and this package is Laravel Mix friendly. Currently this package can be integrated easily only on fresh installation.

# Installation
```bash
composer require atnic/laravel-light-bootstrap-dashboard
```
Add this line on ```config/app.php```, on  ```providers```
```php
'providers' => [
  ...
  Atnic\LightBootstrapDashboard\Providers\AppServiceProvider::class,
  ...
]
```
And then run,
```bash
php artisan make:light-bootstrap-dashboard
```
Let's see what we've install. First, make sure that you already ran ```php artisan migrate``` command, then do
```bash
php artisan serve
```
Viola! You've running a Laravel site using Light Bootstrap Dashboard.

For more information on command
```bash
php artisan make:light-bootstrap-dashboard --help
```

# Usage
This package provides view for auth and app. Take a look at ```resources/views/layouts/app.blade.php```.

In this file you can extends global section like menu.

To extends menu add this in ```app.blade.php```
```blade
@section('sidebar-menu')
<ul class="nav" id="side-menu">
  <li>
    <a href="{{ route('home') }}" class="active"><i class="fa fa-home fa-fw"></i> Home</a>
  </li>
</ul>
@endsection
```

This package give you free of choice to use any Laravel Package for Menu. We recommend [spatie/laravel-menu](https://github.com/spatie/laravel-menu) or [lavary/laravel-menu](https://github.com/lavary/laravel-menu).

Any new created page should extends this view.
```blade
@extends('layouts.app')

// Your blade here
```

# Configuration and Views Customization
## Config
To publish this package config to your app config run
```bash
php artisan vendor:publish --provider="Atnic\LightBootstrapDashboard\Providers\AppServiceProvider" --tag="config"
```
## Views
To publish this package views so you can customize on your own run
```bash
php artisan vendor:publish --provider="Atnic\LightBootstrapDashboard\Providers\AppServiceProvider" --tag="views"
```

# Next Step
First of all, you should understand how to use [Laravel Mix](https://laravel.com/docs/5.4/mix).

Light Bootstrap Dashboard need some package on npm. First you need to run
```bash
npm install
```

Install Light Bootstrap Dashboard needed package from npm
```bash
npm install --save-dev animate.css bootstrap-notify bootstrap-select bootstrap-switch chartist flatui-radiocheck font-awesome pixeden-stroke-7-icon
```

Run Laravel Mix command
```bash
npm run development
```
or use ```production``` minimize output
```bash
npm run production
```

Then have a good look on these files
- ```webpack.mix.js```
- ```resources/assets/js/light-bootstrap-dashboard.js```
- ```resources/assets/js/auth.js```
- ```resources/assets/sass/light-bootstrap-dashboard.scss```
- ```resources/assets/sass/auth.scss```

Happy experimenting!
