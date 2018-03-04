<?php
    $app->get('/', \App\Controllers\HomeController::class . ":index")->setName('index');
    $app->post('/', \App\Controllers\Auth\AuthController::class . ":auth");

    $app->get('/users/me', \App\Controllers\UsersController::class. ":profil")->setName('me');

    $app->get('/admin', \App\Controllers\AdminController::class . ":admin")->setName('admin');

    $app->get('/logout', \App\Controllers\Auth\AuthController::class . ":logout")->setName('logout');

    $app->get('/matchs', \App\Controllers\MatchController::class . ":match")->setName('match');
