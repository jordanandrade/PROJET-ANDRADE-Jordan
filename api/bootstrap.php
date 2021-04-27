<?php
//permet de défnir les paramètres de connexion de la BDD
use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;
date_default_timezone_set('America/Lima');
require_once "vendor/autoload.php";
$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config/yaml"), $isDevMode);
$conn = array(
'host' => 'ec2-176-34-222-188.eu-west-1.compute.amazonaws.com',
'driver' => 'pdo_pgsql',
'user' => 'rkoehlsenohjsm',
'password' => '582933c371e9d790f1c37ab491cdde73236fcd8c1c30d35c40ed913d8c7492da',
'dbname' => 'dbcccm24v689bm',
'port' => '5432'
);
$entityManager = EntityManager::create($conn, $config);
