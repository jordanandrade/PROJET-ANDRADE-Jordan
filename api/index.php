<?php
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Factory\AppFactory;

use Tuupola\Middleware\HttpBasicAuthentication;
use \Firebase\JWT\JWT;


require_once __DIR__ . '/bootstrap.php';
require_once __DIR__ . '/modeles/Catalogue.php';
require_once __DIR__ . '/modeles/Users.php';

require __DIR__ . '/vendor/autoload.php';
 
$app = AppFactory::create();

const JWT_SECRET = "KGDkdgGDEKJDdgDJDKJgdGED5464684DdDdEF84RZ68BNUJlh";



function addCorsHeaders (Response $response) : Response {

    $response =  $response
    // ->withHeader("Access-Control-Allow-Origin", 'http://localhost')
    // ->withHeader("Access-Control-Allow-Headers" ,'Content-Type, Authorization')
    ->withHeader("Access-Control-Allow-Methods", 'GET, POST, PUT, PATCH, DELETE,OPTIONS')
    ->withHeader ("Access-Control-Expose-Headers" , "Authorization");

    return $response;
}


// Middleware de validation qui vérifie le JWT envoyé dans les requêtes HTTP
$options = [
    "attribute" => "token",
    "header" => "Authorization",
    "regexp" => "/Bearer\s+(.*)$/i",
    "secure" => false,
    "algorithm" => ["HS256"],
    "secret" => JWT_SECRET,

    //URI qui n'ont pas besoin de JWT valide
    "path" => ["/api"],
    "ignore" => ["/hello","/api/hello","/api/login","/api/createUser","/api/catalogue"],
    "error" => function ($response, $arguments) {
        $data = array('ERREUR' => 'Connexion', 'ERREUR' => 'JWT Non valide');
        $response = $response->withStatus(401);
        $response = @addCorsHeaders($response);
        return $response->withHeader("Content-Type", "application/json")->getBody()->write(json_encode($data));
    }
];

// $app->get('/hello/{name}', function (Request $request, Response $response, $args) {
//     $array = [];
//     $array ["nom"] = $args ['name'];
//     $response->getBody()->write(json_encode ($array));
//     return $response;
// });


// $app->get('/api/hello/{name}', function (Request $request, Response $response, $args) {
//     $array = [];
//     $array ["nom"] = $args ['name'];
//     $response->getBody()->write(json_encode ($array));
//     $response = @addCorsHeaders($response);
//     return $response;
// });

$app->post('/api/login', function (Request $request, Response $response, $args) {    
    global $entityManager;
    $body = (array)json_decode($request->getBody());
    $userRepository = $entityManager->getRepository(Users::class);
    $user = $userRepository->findOneBy(
        array('login' => $body['login'], 'password' => $body['password']));
    
        if($user != null){
            
            $issuedAt = time();
            $expirationTime = $issuedAt + 500;
            $payload = array(
                'userid' => $user->getId(),
                'pseudo' => $user->getLogin(),
                'iat' => $issuedAt,
                'exp' => $expirationTime
            );
            $token_jwt = JWT::encode($payload,JWT_SECRET, "HS256");
            $response = addCorsHeaders($response);
            $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
        }else{
            $response = $response->withStatus(302);
        }
    
        $response = $response
            ->withHeader("Content-Type", "application/json;charset=utf-8");
        return $response;
});



$app->get('/api/catalogue', function (Request $request, Response $response, $args) {
    
    global $entityManager;

    $catalogueRepository = $entityManager->getRepository(Catalogue::class);
    $catalogue = $catalogueRepository->findAll();


    $data = [];

    foreach ($catalogue as $e) {
        $elem = [];
        $elem ["ref"] = $e->getRef();
        $elem ["titre"] = $e->getTitre ();
        $elem ["prix"] = $e->getPrix ();

        array_push ($data,$elem);
    }

    $response = $response
    ->withHeader("Content-Type", "application/json;charset=utf-8");

    
    $response->getBody()->write(json_encode($data));
    $response = @addCorsHeaders($response);
    return $response;
});


// $app->get('/api/client/{id}', function (Request $request, Response $response, $args) {
//     $array = [];
//     $array ["nom"] = "Jordan";
//     $array ["prenom"] = "Andrade";
    
//     $response->getBody()->write(json_encode ($array));
//     return $response;
// });



// Chargement du Middleware (ajout du middelware au controleur)
$app->add(new Tuupola\Middleware\JwtAuthentication($options));
$app->run ();