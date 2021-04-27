<?php
//permet de déclarer l'EntityManager à la console
use Doctrine\ORM\Tools\Console\ConsoleRunner;
require_once 'bootstrap.php';
return ConsoleRunner::createHelperSet($entityManager);