<?php

    namespace App\Classes;

    /**
     * Class Pagination
     * @package App\Classes
     */
    class Pagination
    {
        /**
         * @var $database
         */
        private $database;

        /**
         * @var $query
         */
        private $query;

        /**
         * @var $limit
         */
        private $limit;

        /**
         * @var $current
         */
        private $current;

        /**
         * @var $total
         */
        private $total;

        /**
         * @var $start
         */
        private $start;

        /**
         * Function initialisation
         * @param $database
         * @param $query
         */
        public function initialisation($database, $query)
        {
            $this->database = $database;
            $this->query = $query;

            $rows = $this->database->query($this->query)->rowCount();
            $this->total = $rows;
        }

        /**
         * Function getData
         * @param int $limit
         * @param int $current
         */
        public function getData($limit, $current)
        {
            $this->limit = $limit;
            $this->current = $current;
            $this->start = (($this->current - 1) * $this->limit);
            $query = $this->query . " ORDER BY created_at DESC LIMIT {$this->start}, {$this->limit}";

            $data = $this->database->query($query)->fetchAll();

            $result = new \stdClass();
            $result->current = $this->current;
            $result->limit  = $this->limit;
            $result->total  = $this->total;
            $result->data   = $data;

            return ($result);
        }

        /**
         * @param $data
         * @return json
         */
        public function jsonUsers($data)
        {
            return json_encode($data);
        }

        /**
         * Function createLinks
         * @param $links
         */
        public function createLinks($links)
        {
            $last = ceil($this->total / $this->limit);
            $start = (($this->current - $links) > 0) ? $this->current - $links : 1;
            $end = (($this->current - $links) < $last) ? $this->current + $links : $last;

            $disabled = ($this->current == 1) ? "disabled": "";

            if ($this->current == 1)
            {
                echo "<a class=$disabled><i class='fas fa-caret-left'></i></a>";
            }
            else
            {
                echo '<a id=' . ($this->current - 1) . '><i class="fas fa-caret-left"></i></a>';
            }

            if ($start > 1)
            {
                echo "<a id='$this->current - 1'>1</a>";
                echo "<a class=$disabled>...</a>";
            }

            for ($i = $start; $i <= $end; $i++)
            {
                $active = ($this->current == $i ) ? "active" : "";
                echo "<a class='$active' id='$i'>$i</a>";
            }

            if ($end < $last)
            {
                echo "<a class=$disabled>...</a>";
                echo "<a id='$last'>$last</a>";
            }

            if ($this->current == $last)
            {
                echo "<a class=$disabled><i class='fas fa-caret-right'></i></a>";
            }
            else
            {
                echo '<a id=' . ($this->current + 1) . '><i class="fas fa-caret-right"></i></a>';
            }
        }
    }