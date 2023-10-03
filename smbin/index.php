<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");

define('__THEME__', [
    'mail_host'		 	=> 'mail.liloo.com.br',
    'mail_port'			=> 465,
    'mail_user'			=> 'suporte@liloo.com.br',
    'mail_pass'			=> 'iDJn[V=[b[LHG_(7TN!$SupjkgfJj?}~L-n2',
    'mail_from_name' 	=> 'Nova Conta de Usuário',
    'mail_from_email' 	=> 'suporte@liloo.com.br', // Recomendado ser o mesno do user
]);
require_once "vendor/autoload.php";
use Liloo\Email\Email;

$Data = json_decode(file_get_contents('php://input'), true);
if(!empty($Data)){

    // $FormData = json_decode($Data['data'], true);
    // var_dump($FormData);
    // echo json_encode($Data['data']); 
    
    $email = new Email;
    $email->add(
        'Seu link de confirmação de conta', // Assunto ou títlo do email
        'Chegou o e-mail massa', // Template do email (Body)
        'Nome do cliente', // NOme do cliente
        'felipe.game.studio@gmail.com' // Email do cliente
    );
    $Send = $email->send();
    
    $JSON = [
        'bool' => ($Send)? true : false,
        'output' => null,
        'message' => ($Send)? 'Enviado com sucesso! Estamos redirecionand. Aguarde...' : 'Não foi possível enviar. Tente novamente.'
    ];

    echo json_encode($JSON);
}