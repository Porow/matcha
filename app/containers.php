<?php
    $container['view'] = function($container)
    {
        $view = new \Slim\Views\Twig("../resources/views", ['cache' => false]);

        $view->addExtension(new \Slim\Views\TwigExtension(
            $container->router,
            $container->request->getUri()
        ));

        return ($view);
    };

    $container['db'] = function($container)
    {
        return (new \App\Classes\Database("matcha", "localhost", $container));
    };

    $container['generatorUser'] = function($container)
    {
       return (Faker\Factory::create());
    };

    $container['pagination'] = function($container)
    {
        return (new \App\Classes\Pagination());
    };

    $container['instagram_api'] = function($container)
    {
        return (new MetzWeb\Instagram\Instagram([
            'apiKey'     => '6ab5cf9843d54fddb46b0c53f081f91d',
            'apiSecret' => '37e403750d2d4bd794d96c08ad1bc68f',
            'apiCallback'  => 'http://localhost'
        ]));
    };

    $container['session'] = function($container)
    {
        return (new App\Classes\Session($container));
    };

    $container['flash'] = function()
    {
        return new \Slim\Flash\Messages();
    };

    $container['validateForm'] = function($container)
    {
        return (new App\Classes\ValidateForm($container->db));
    };