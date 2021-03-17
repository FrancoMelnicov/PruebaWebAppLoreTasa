<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Request-Methods: GET,HEAD,OPTIONS,POST,PUT');
header('Access-Control-Allow-Headers: Content-Type');

  if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $_POST = json_decode(file_get_contents('php://input'), true);
    $id_marca = $_POST['id_marca'];
    $id_grupo = $_POST['id_grupo'];

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
    //echo  $token;
    //echo "<pre>" . json_encode($data, JSON_PRETTY_PRINT) . "</pre>"; 

    $url = "https://demo.api.infoauto.com.ar/cars/pub/brands/" . $id_marca ."/groups/" . $id_grupo ."/models/";
  
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
    echo json_encode($data);
    } else {
      echo json_encode("El metodo no es admitido. Hiciste un " . $_SERVER['REQUEST_METHOD']);
    }

  ?>