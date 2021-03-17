<?php

header('Access-Control-Allow-Origin: *');

//UTILIZA LAS LIBRERIAS DE COMPOSSER 
require '../../vendor/autoload.php';

//CONEXION A LA BASE DE DATOS  
$client = new MongoDB\Client(
'mongodb+srv://admin:Lorenzo2021@cluster0.qwaux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

$infoAuto = $client -> InfoAuto;
$empcollection = $infoAuto -> marcas_grupos;

$dia = date("d");

if($dia == "10" || $dia == "20"){

  //ACCESO AL TOKEN
  // Evite dejar el usuario y contraseña escritos en el código fuente
  $username = "gerardo@lorenzoautomotores.com.ar";
  $password = "API2021loren";

  $url = "https://demo.api.infoauto.com.ar/cars/auth/login";
  $headers = array(
    "Content-type: application/json",
    "Authorization: Basic " . base64_encode($username . ":" . $password)
  );

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  $response = curl_exec($ch);
  curl_close($ch);

  $data = json_decode($response);
  $token = $data->{'access_token'};

  $url = "https://demo.api.infoauto.com.ar/cars/pub/brands/download/";
 
  $headers = array(
      "Content-type: application/json",
      "Authorization: Bearer " . $token,
  ); 

  $ch = curl_init();
  curl_setopt($ch, CURLOPT_ENCODING , "gzip");
  curl_setopt($ch, CURLOPT_URL, $url);    
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

  $response = curl_exec($ch);
  curl_close($ch);

  $data = json_decode($response);  

  //ELIMINAMOS TODOS LOS ELEMENTOS DE LA COLECCION
  $cursor = $empcollection -> deleteMany([]);
    
  //INSERTAMOS EN LA COLECCION EL JSON DE MARCAS Y GRUPOS
  $insert = $empcollection -> insertOne(
    ['object'=> $data]
  );

   //TRAEMOS EL JSON DE LA COLECCION
  //en la coleccion solo se va a encontrar un solo objeto json, el cual se eliminara y se actualizara
  $getCollection = $empcollection -> find();

  foreach ($getCollection as $collection){
    echo json_encode($collection);
  };

} else {

   //TRAEMOS EL JSON DE LA COLECCION
  //en la coleccion solo se va a encontrar un solo objeto json, el cual se eliminara y se actualizara
  $getCollection = $empcollection -> find();

  foreach ($getCollection as $collection){
    echo json_encode($collection);
  };

}

?>