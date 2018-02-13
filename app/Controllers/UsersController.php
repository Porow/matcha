<?php

    namespace App\Controllers;


    class UsersController extends Controller
    {
        public function profil($request, $response)
        {
            $session = $this->container->session->read('auth');
            $vues = $this->container->db->query("SELECT * FROM visits WHERE user_visited = ?", [$session->id])->rowCount();

            if (!$session)
                return ($response->withRedirect($this->router->pathFor('index')));

            if (!empty($this->flash->getMessages()))
            {
                $flash = $this->flash->getMessages();
                $this->container->view->getEnvironment()->addGlobal('flash', $flash);
            }

            if (isset($_GET['checkEmpty']))
            {
                return (is_null($session->orientation) || is_null($session->gender) || is_null($session->tags) || is_null($session->relationship) || is_null($session->biography) || is_null($session->firstname) || is_null($session->lastname));
            }

            if (isset($_GET['checkAlerts']))
            {
                $query = $this->container->db->query("SELECT * FROM notifications WHERE user_target = ? AND is_checked = 0", [$session->id]);

                $count = $query->rowCount();
                $result = $query->fetchAll();

                return (json_encode(array($count, $result)));
            }

            if (isset($_GET['updateAlerts']) && isset($_GET['id_notifications']))
            {
                $update = $this->container->db->query("UPDATE notifications SET is_checked = 1 WHERE id = ? AND user_target = ?", [$_GET['id_notifications'], $session->id]);
                return (true);
            }

            if (isset($_GET['action']) && $_GET['action'] == "missing_values")
            {
                $tags = isset($_GET['tags']) ? $_GET['tags'] : false;
                $name = isset($_GET['name']) ? $_GET['name'] : false;

                $lastname = str_replace(' ', '', strstr($name, ' '));
                $firstname = strstr($name, ' ', true);
                $setTags = implode(",", array($tags));
                if (isset($_GET['name']) && empty($_GET['name']) ||
                    isset($_GET['tags']) && empty($_GET['tags']) ||
                    isset($_GET['gender']) && empty($_GET['gender']) ||
                    isset($_GET['biography']) && empty($_GET['biography']) ||
                    isset($_GET['relationship']) && empty($_GET['relationship']) ||
                    isset($_GET['orientation']) && empty($_GET['orientation']))
                {

                    exit (false);
                }
                else
                {
                    $update = $this->container->db->query("UPDATE users SET firstname = ?, lastname = ?, tags = ?, biography = ?, orientation = ?, gender = ?, relationship = ?  WHERE id = ?", [
                        isset($_GET['name']) ? $firstname : $session->firstname,
                        isset($_GET['name']) ? $lastname : $session->lastname,
                        isset($_GET['tags']) ? $setTags : $session->tags,
                        isset($_GET['biography']) ? $_GET['biography'] : $session->biography,
                        isset($_GET['orientation']) ? $_GET['orientation'] : $session->orientation,
                        isset($_GET['gender']) ? $_GET['gender'] : $session->gender,
                        isset($_GET['relationship']) ? $_GET['relationship'] : $session->relationship,
                        $session->id
                    ]);
                    $session->firstname = $firstname;
                    $session->lastname = $lastname;
                    $session->tags = $setTags;
                    $session->biography = isset($_GET['biography']) ? $_GET['biography'] : $session->biography;
                    $session->orientation = isset($_GET['orientation']) ? $_GET['orientation'] : $session->orientation;
                    $session->gender = isset($_GET['gender']) ? $_GET['gender'] : $session->gender;
                    $session->relationship = isset($_GET['relationship']) ? $_GET['relationship'] : $session->relationship;
                    exit (true);
                }
            }

            $missing = false;
            if (is_null($session->orientation) || is_null($session->gender) || is_null($session->tags) || is_null($session->relationship) || is_null(($session->biography)))
                $missing = true;

            $this->container->view->getEnvironment()->addGlobal('missing', $missing);
            $this->container->view->getEnvironment()->addGlobal('myself', $session);
            $this->container->view->getEnvironment()->addGlobal('vues', $vues);
            return ($this->view->render($response, 'users/me.twig'));
        }
    }