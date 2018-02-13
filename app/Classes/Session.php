<?php
    namespace App\Classes;

    /**
     * Class Session
     * @package App\Classes
     */
    class Session
    {
        /**
         * @var $container
         */
        protected $container;

        /**
         * @var $instance
         */
        static $instance;

        /**
         * @return Session
         */
        static function getInstance($container)
        {
            if(!self::$instance)
                self::$instance = new Session($container);
            return self::$instance;
        }

        /**
         * Session constructor.
         * @param $container
         */
        public function __construct($container)
        {
            $this->container = $container;
            if (!$_SESSION)
                session_start();
        }

        /**
         * Create new session key instance.
         * @param $key
         * @param $value
         */
        public function create($key, $value)
        {
            $_SESSION[$key] = $value;
        }

        /**
         * Return the session key instance.
         * @param $key
         * @return Session
         */
        public function read($key)
        {
            if (isset($_SESSION[$key]))
                return ($_SESSION[$key]);
        }

        /**
         * Delete the session key instance.
         * @param $key
         */
        public function delete($key)
        {
            if (isset($_SESSION[$key]))
                unset($_SESSION[$key]);
        }
    }