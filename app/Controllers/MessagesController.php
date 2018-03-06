<?php
/**
 * Created by PhpStorm.
 * User: poro
 * Date: 26/02/2018
 * Time: 16:57
 */

namespace App\Controllers;


class MessagesController extends Controller
{
    public function messages($request, $response)
    {
        return ($this->view->render($response, 'messages.twig'));
    }
}