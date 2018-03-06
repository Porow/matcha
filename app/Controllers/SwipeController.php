<?php
/**
 * Created by PhpStorm.
 * User: poro
 * Date: 26/02/2018
 * Time: 16:57
 */

namespace App\Controllers;


class SwipeController extends Controller
{
    public function swipe($request, $response)
    {
        return ($this->view->render($response, 'swipe.twig'));
    }
}