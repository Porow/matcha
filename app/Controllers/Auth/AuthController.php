<?php

    namespace App\Controllers\Auth;

    use App\Controllers\Controller;
    use DateTime;

    class AuthController extends Controller
    {
        public function auth($request, $response)
        {
            if (isset($_POST['register']))
            {
                $this->container->validateForm->isUniq($request->getParam('identifiant-register'), "identifiant", "users", "Cet identifiant est déjà utilisé");
                $this->container->validateForm->isUniq($request->getParam('email-register'), "email", "users", "Cette adresse e-mail est déjà utilsée");
                if ($this->container->validateForm->isValidate())
                {
                    $date = new DateTime(date("Y-m-d"));
                    $birthday = new DateTime($_POST['birthday-register']);
                    $old = $date->diff($birthday);

                    $this->db->query("INSERT INTO users SET identifiant = ?, password = ?, email = ?, age = ?, created_at = NOW()", [
                        $request->getParam('identifiant-register'),
                        password_hash($request->getParam('password-register'), PASSWORD_BCRYPT),
                        $request->getParam('email-register'),
                        $old->y
                    ]);
                    $email = $request->getParam('email-register');
                    $this->flash->addMessage('success', "Votre compte a bien été enregistré, une confirmation d'inscription a été envoyée sur $email");
                    return ($response->withRedirect($this->router->pathFor('index')));
                }
                else
                {
                    $this->flash->addMessage('errors', $this->container->validateForm->getErrors());
                    return ($response->withRedirect($this->router->pathFor('index')));
                }
            }
            else if (isset($_POST['login']))
            {
                $identifiant = $request->getParam('identifiant');
                $password = $request->getParam('password');

                $user = $this->db->query('SELECT * FROM users WHERE identifiant = ? AND ban = 0', [$identifiant])->fetch();
                if($user && password_verify($password, $user->password))
                {
                    $this->container->session->create('auth', $user);
                    $this->flash->addMessage('success', 'Vous vous êtes bien connecté');
                    $this->db->query('UPDATE users SET status = 1 WHERE identifiant = ?', [$identifiant]);
                    if ($user->level == 1)
                        return ($response->withRedirect($this->router->pathFor('me')));
                    else
                        return ($response->withRedirect($this->router->pathFor('admin')));
                }
                else
                {
                    if ($user->ban === 1)
                        $errors['ban'] = "Votre compte a été suspendu par un administrateur";
                    else
                        $errors['login'] = "Mot de passe ou identifant incorrect";
                    $this->flash->addMessage('errors', $errors);
                    return ($response->withRedirect($this->router->pathFor('index')));
                }
            }
        }

        public function logout($request, $response)
        {
            if ($this->container->session->read('auth'))
            {
                $this->container->db->query("UPDATE users SET status = 0, last_connection = NOW() WHERE id = ?", [
                    $this->container->session->read('auth')->id
                ]);
                $this->container->session->delete('auth');

                $this->flash->addMessage('success', 'Vous vous êtes bien déconnecté');
                return ($response->withRedirect($this->router->pathFor('index')));
            }
            else
                return ($response->withRedirect($this->router->pathFor('index')));
        }
    }