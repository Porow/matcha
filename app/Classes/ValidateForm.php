<?php
    namespace App\Classes;

    /**
     * Class ValidateForm
     * @package App\Classes
     */
    class ValidateForm
    {
        /**
         * @var $data
         */
        private $database;

        /**
         * @var array $errors
         */
        private $errors = [];

        /**
         * ValidateForm constructor.
         * @param $database
         */
        public function __construct($database)
        {
            $this->database = $database;
        }

        /**
         * @param $field
         * @param bool $message
         * @return bool
         */
        public function isUniq($data, $field, $table, $message = false)
        {
            $check = $this->database->query("SELECT $field FROM $table WHERE $field = ?", [$data]);
            if ($check->fetch())
            {
                $this->errors['email'] = $message;
                return (true);
            }
            return (false);
        }

        /**
         * @return bool
         */
        public function isValidate()
        {
            if (empty($this->errors))
                return (true);
            return (false);
        }

        /**
         * @return array
         */
        public function getErrors()
        {
            return $this->errors;
        }
    }