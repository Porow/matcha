<?php
    namespace App\Controllers;

    use DateTime;

    class HomeController extends Controller
    {
        public function index($request, $response)
        {
            /*for($i = 0;$i < 20; $i++)
            {
                $this->container->db->query("INSERT INTO users SET identifiant = ?, password = ?, email = ?, gender = ?, orientation = ?, biography = ?, tags = ?, profile_picture = ?, firstname = ?, lastname = ?, rating = ?, age = ?, status = ?, created_at = NOW() ", [
                    $this->generatorUser->firstName(),
                    password_hash($this->generatorUser->word(20), PASSWORD_BCRYPT),
                    $this->generatorUser->regexify('[a-z0-9]+@gmail\.com'),
                    $this->generatorUser->randomElement(array('M', 'F')),
                    $this->generatorUser->randomElement(array(0, 1, 2)),
                    $this->generatorUser->text(100),
                    'Sport',
                    $this->generatorUser->imageUrl(200, 200),
                    $this->generatorUser->firstName(),
                    $this->generatorUser->lastName(),
                    $this->generatorUser->numberBetween(0, 500),
                    $this->generatorUser->numberBetween(18, 50),
                    $this->generatorUser->numberBetween(0, 1)
                ]);
            }*/

            if (!empty($this->flash->getMessages()))
            {
                $flash = $this->flash->getMessages();
                $this->container->view->getEnvironment()->addGlobal('flash', $flash);
            }

            if ($this->container->session->read('auth'))
                $this->container->view->getEnvironment()->addGlobal('auth', $this->container->session->read('auth'));


            if (isset($_GET['userID']))
            {
                var_dump($_GET);
               if (!$this->container->session->read('auth'))
               {
                   $user = array(
                        'access_token' => $_GET['accessToken'],
                        'identifiant' => $_GET['name'],
                        'email' => $_GET['email'],
                        'gender' => $_GET['gender'],
                        'age' => $_GET['age'],
                        'relationship' => $_GET['relationship'],
                        'picture_profile' => $_GET['picture']
                   );

                   $fbUser = $this->container->db->query("SELECT * FROM users WHERE email = ?", [$_GET['email']])->fetch();
                   if (!$fbUser)
                   {
                       $this->container->db->query('INSERT INTO users SET access_token = ?, identifiant = ?, email = ?, age = ?, gender = ?, relationship = ?, profile_picture = ?, created_at = NOW()', [
                           $user['access_token'],
                           $user['identifiant'],
                           $user['email'],
                           $user['age'],
                           $user['gender'],
                           $user['relationship'],
                           $user['picture_profile']
                       ]);
                       $lastID = $this->container->db->lastInsertId();

                       $auth = $this->container->db->query("SELECT * FROM users WHERE id = ?", [$lastID])->fetchAll();
                       if ($auth)
                           $this->container->session->create('auth', $auth);
                   }
                   else
                       $this->container->session->create('auth', $fbUser);
                   $this->container->view->getEnvironment()->addGlobal('auth', $this->container->session->read('auth'));
                   $this->flash->addMessage('success', 'Vous vous êtes bien connecté');
                   exit(true);
               }
               else
                   exit(false);
            }

            if (isset($_GET['code']) && $this->container->session->read('auth'))
            {
                if (!$this->container->session->read('instagram'))
                {
                    $token = $this->contaier->instagram_api->getOAuthToken($_GET['code']);

                    $this->container->session->create('instagram', $token);
                    $this->container->view->getEnvironment()->addGlobal('instagram', $this->container->session->read('instagram'));

                    return ($response->withRedirect($this->router->pathFor('index')));
                }
            }

            return ($this->view->render($response, 'home.twig'));
        }
    }