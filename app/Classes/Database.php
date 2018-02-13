<?php
    namespace App\Classes;

    /**
     * Class Database
     * @package App\Classes
     */
    class Database
    {
        protected $container;

        private $pdo;

        public function __construct($database, $host, $container)
        {
            $this->container = $container;
            $this->pdo = new \PDO("mysql:dbname=$database;host=$host", "root", "root");
            $this->pdo->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
            $this->pdo->setAttribute(\PDO::ATTR_DEFAULT_FETCH_MODE, \PDO::FETCH_OBJ);
        }

        public function query($query, $params = false)
        {
            if($params)
            {
                $req = $this->pdo->prepare($query);
                $req->execute($params);
            }else
                $req = $this->pdo->query($query);
            return $req;
        }

        public function lastInsertId()
        {
            return $this->pdo->lastInsertId();
        }
    }