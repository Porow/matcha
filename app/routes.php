<?php
    $app->get('/', \App\Controllers\HomeController::class . ":index")->setName('index');
    $app->post('/', \App\Controllers\Auth\AuthController::class . ":auth");

    $app->get('/users/me', \App\Controllers\UsersController::class. ":profil")->setName('me');

    $app->get('/admin', \App\Controllers\AdminController::class . ":admin")->setName('admin');

    $app->get('/logout', \App\Controllers\Auth\AuthController::class . ":logout")->setName('logout');

    $app->get('/swipe', \App\Controllers\SwipeController::class . ":swipe")->setName('swipe');

    $app->get('/messages', \App\Controllers\MessagesController::class . ":messages")->setName('messages');