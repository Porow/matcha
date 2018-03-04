<?php
/**
 * Created by PhpStorm.
 * User: poro
 * Date: 26/02/2018
 * Time: 16:57
 */

namespace App\Controllers;


class MatchController extends Controller
{
    public function match($request, $response)
    {
        return ($this->view->render($response, 'users_index.twig'));
    }
}