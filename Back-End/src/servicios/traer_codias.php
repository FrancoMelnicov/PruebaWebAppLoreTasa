<?php
//ACCESO AL TOKEN
  // Evite dejar el usuario y contraseña escritos en el código fuente
  $username = "gerardo@lorenzoautomotores.com.ar";
  $password = "API2021loren";

  $url = "https://demo.api.infoauto.com.ar/cars/auth/login";
  $headers = array(
    "Content-Length: 0",
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


  $url = "https://demo.api.infoauto.com.ar/cars/pub/brands/batch/";
  $headers = array(
      "Content-type: application/json",
      "Accept-Encoding: gzip"
      "Authorization: Bearer" . $token,
  );
  
 
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
  curl_setopt($ch, CURLOPT_URL, $url);    
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
  curl_setopt($ch, CURLOPT_POSTFIELDS,http_build_query($data));

  $response = curl_exec($ch);
  curl_close($ch);


  $data = json_decode($response);  
  echo "<pre>" . json_encode($data, JSON_PRETTY_PRINT) . "</pre>";
  

  ?>
