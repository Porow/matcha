<?php
    session_start();
    require_once '../vendor/autoload.php';

    $config['displayErrorDetails'] = true;

    $config['db']['driver'] = 'mysql';
    $config['db']['host'] = 'localhost';
    $config['db']['database'] = 'matcha';
    $config['db']['username'] = 'root';
    $config['db']['password'] = 'root';
    $config['db']['charset'] = 'utf8';
    $config['db']['collation'] = 'utf8_unicode_ci';
    $config['db']['prefix'] = '';

    $app = new \Slim\App(['settings' => $config]);

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    $container = $app->getContainer();

    $app->add(new \App\Middleware\ValidationErrorsMiddleware($container));
    $app->add(new \App\Middleware\OldInputMiddleware($container));

    require_once '../app/containers.php';
    require_once '../app/routes.php';