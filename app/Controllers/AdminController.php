<?php

namespace App\Controllers;

class AdminController  extends Controller
{
    public function admin($request, $response)
    {
        $this->container->pagination->initialisation($this->container->db, "SELECT * FROM users");

        if (isset($_GET['loadPagination'])) {
            $this->container->pagination->getData(13, $_GET['loadPagination']);
            return $this->container->pagination->createLinks(5);
        }

        if (isset($_GET['loadUsers']))
        {
            $results = $this->container->pagination->getData(13, $_GET['loadUsers']);
            return $this->container->pagination->jsonUsers($results);
        }


        $session = $this->container->session->read('auth');

        if (!$session || $session->level != 2)
            return ($response->withRedirect($this->router->pathFor('index')));

        if (!empty($this->flash->getMessages()))
        {
            $flash = $this->flash->getMessages();
            $this->container->view->getEnvironment()->addGlobal('flash', $flash);
            $this->flash->clearMessage($flash);
        }

        $nbUsers = $this->container->db->query("SELECT id FROM users")->rowCount();
        $users = $this->container->db->query("SELECT * FROM users ORDER BY created_at DESC LIMIT 1, 13")->fetchAll();
        $usersOnline = $this->container->db->query("SELECT status FROM users WHERE status = 1")->rowCount();
        $nbGuys = $this->container->db->query("SELECT gender FROM users WHERE gender = 'M'")->rowCount();
        $nbGirls = $this->container->db->query("SELECT gender FROM users WHERE gender = 'F'")->rowCount();
        $ageMoy = $this->container->db->query("SELECT age FROM users")->fetchAll();
        $reports = $this->container->db->query("SELECT * FROM reports ORDER BY create_at DESC")->fetchAll();
        $nbReports = $this->container->db->query("SELECT * FROM reports")->rowCount();

        $a = 0;
        $b = 0;
        $c = 0;

        foreach ($ageMoy as $age)
        {
            if ($age->age >= 18 && $age->age <= 21)
                $a++;
            if ($age->age >= 21 && $age->age <= 25)
                $b++;
            if ($age->age > 25)
                $c++;
        }

        $arrayAge = [$a, $b, $c];

        $this->container->view->getEnvironment()->addGlobal('nbUsers', $nbUsers);
        $this->container->view->getEnvironment()->addGlobal('usersOnline', $usersOnline);
        $this->container->view->getEnvironment()->addGlobal('nbGuys', $nbGuys);
        $this->container->view->getEnvironment()->addGlobal('nbGirls', $nbGirls);
        $this->container->view->getEnvironment()->addGlobal('ageMoy', $arrayAge);
        $this->container->view->getEnvironment()->addGlobal('nbReports', $nbReports);
        $this->container->view->getEnvironment()->addGlobal('reports', $reports);
        $this->container->view->getEnvironment()->addGlobal('users', $users);

        if (isset($_GET['id']) && !isset($_GET['action']))
        {
            $report = $this->container->db->query("SELECT * FROM reports WHERE id = ?", [$_GET['id']])->fetch();
            $target = $this->container->db->query("SELECT * FROM users WHERE id = ?", [$report->user_id])->fetch();
            $accused = $this->container->db->query("SELECT * FROM users WHERE id = ?", [$report->user_target])->fetch();

            $nbReports = $this->container->db->query("SELECT user_target FROM reports WHERE user_target = ?", [
                $accused->id
            ])->rowCount();

            $a = array($report, $target, $accused, $nbReports);
            if ($report)
                return(json_encode($a));
            else
                return (false);
        }

        if (isset($_GET['id']) && isset($_GET['action']) && $_GET['action'] === "punishment")
        {
            $report = $this->container->db->query("SELECT * FROM reports WHERE id = ?", [$_GET['id']])->fetch();
            if ($report)
            {
                $this->container->db->query("UPDATE users SET ban = 1 WHERE id = ?", [$report->user_target]);
                $this->container->db->query("UPDATE reports SET status = 'Terminé' WHERE id = ?", [$report->id]);
                $this->container->db->query("UPDATE reports SET admin_action = 'ban' WHERE id = ?", [$report->id]);
                $this->container->db->query("UPDATE reports SET resolved_by = ? WHERE id = ?", [$this->container->session->read('auth')->identifiant, $report->id]);
                $this->container->db->query("UPDATE reports SET resolved_at = NOW() WHERE id = ?", [$report->id]);
                exit(true);
            }
            else
                exit(false);
        }

        if (isset($_GET['id']) && isset($_GET['action']) && $_GET['action'] === "remove_punishment")
        {
            $report = $this->container->db->query("SELECT user_target FROM reports WHERE id = ?", [$_GET['id']])->fetch();
            if ($report)
            {
                $this->container->db->query("UPDATE users SET ban = 0 WHERE id = ?", [$report->user_target]);
                exit(true);
            }
            else
                exit(false);
        }

        return ($this->view->render($response, 'admin/swipe.twig'));
    }
}