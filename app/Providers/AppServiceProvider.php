<?php

namespace Atnic\LightBootstrapDashboard\Providers;

use Atnic\LightBootstrapDashboard\Console\Commands\LightBootstrapDashboardMakeCommand;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../../config/light-bootstrap-dashboard.php' => config_path('light-bootstrap-dashboard.php'),
        ], 'config');
        $this->loadViewsFrom(__DIR__.'/../../resources/views', 'light-bootstrap-dashboard');
        $this->publishes([
            __DIR__.'/../../resources/views' => resource_path('views/vendor/light-bootstrap-dashboard')
        ], 'views');
        if ($this->app->runningInConsole()) {
            $this->commands([
                LightBootstrapDashboardMakeCommand::class,
            ]);
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../../config/light-bootstrap-dashboard.php', 'light-bootstrap-dashboard'
        );
    }
}
