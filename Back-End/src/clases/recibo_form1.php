<!-- ESTE FORM SOLO DEBE CONTENER LO QUE
RECIBE EL PROGRAMA DESDE EL CODIGO HTML,
NO DEBE CONTENER NADA DE LA API-->

<?php
require 'conexion.php';


/* ----------------------------------------------------------------FORMULARIO 1 -------------*/
$fecha = $_POST['fecha'];
$nombre = $_POST['nombre'];
$domi = $_POST['domicilio'];
$local = $_POST['localidad'];
$tel = $_POST['telefono'];
$cp = $_POST['cp'];

/* FORMULARIO 1 */
echo "<b>DATOS CLIENTE: </b>";
echo "<br>";
echo "<b>Fecha: </b>" .$fecha; 
echo "<br>";
echo "<b>Cliente: </b>" .$nombre; 
echo "<br>";
echo "<b>Domicilio: </b>" .$domi; 
echo "<br>";
echo "<b>Localidad: </b>" .$local; 
echo "<br>";
echo "<b>Telefono: </b>" .$tel; 
echo "<br>";
echo "<b>Codigo postal: </b>" .$cp; 
echo "<br>"; echo "<br>";

/* FORMULARIO 1 */
$insertar = "INSERT INTO formu (fecha,nombre,domicilio,localidad,telefono,codigo_postal) VALUES ('$fecha', '$nombre', '$domi', '$local', '$tel', '$cp')";

/* INTERACCION A LA BD */
$query = mysqli_query($conexion, $insertar);

if($query){
    echo "<script> alert('¡Cliente registrado con exito!'); </script>";
    
}else{
    echo "<script> alert('¡Se produjo un error en Cliente!'); </script>";
}


/* ---------------------------------------------------------------- FORMULARIO 2 -------------*/
$marca = $_POST['marca'];
$grupo = $_POST['grupo'];
$modelo = $_POST['modelo'];
$anio = $_POST['anio'];
$dominio = $_POST['dominio'];
$color = $_POST['color'];
$n_motor = $_POST['n_motor'];
$n_chasis = $_POST['n_chasis'];

/* FORMULARIO 2 */
echo "<b>DATOS AUTOMOTOR: </b>";
echo "<br>";
echo "<b>Marca: </b>"  .$marca; 
echo "<br>";
echo "<b>Grupo: </b>" .$grupo; 
echo "<br>";
echo "<b>Modelo: </b>" .$modelo; 
echo "<br>";
echo "<b>Anio: </b>" .$anio; 
echo "<br>";
echo "<b>Dominio: </b>" .$dominio; 
echo "<br>";
echo "<b>color: </b>" .$color; 
echo "<br>";
echo "<b>n_motor: </b>" .$n_motor; 
echo "<br>";
echo "<b>n_chasis: </b>" .$n_chasis; 
echo "<br>";echo "<br>";

/* FORMULARIO 2 */
$insertar = "INSERT INTO datos_auto (marca, grupo, modelo, anio, dominio, color, n_motor,n_chasis) VALUES ('$marca', '$grupo', '$modelo', '$anio', '$dominio', '$color', '$n_motor', '$n_chasis')";


/* INTERACCION A LA BD */
$query2 = mysqli_query($conexion, $insertar);

if($query2){
    echo "<script> alert('¡Automotor registrado con exito!'); </script>";
    
}else{
    echo "<script> alert('¡Se produjo un error en Automotor!'); </script>";
}




/* ---------------------------------------------------------------- FORMULARIO 3 -------------*/
$tecnico = $_POST['tecnico'];

/* FORMULARIO 3*/
echo "<b>DATOS DEL TÉCNICO</b>";
echo "<br>";
echo "<b>Técnico que revisó: </b>" .$tecnico;
echo "<br>";echo "<br>";

/* FORMULARIO 3*/
$insertar = "INSERT INTO revision_tecnica (tecnico) VALUE ($tecnico)"; 

/* INTERACCION A LA BD */
$query3 = mysqli_query($conexion, $insertar);

if($query2){
    echo "<script> alert('Tecnico registrado con exito!'); </script>";
    
}else{
    echo "<script> alert('¡Se produjo un error en Tecnico!'); </script>";
}

/* ---------------------------------------------------------------- FORMULARIO 4 -------------*/
/* INSPECCION DEL AUTOMOTOR (CHECKBOX) */

if (isset($_POST["enviar"])){

    if (isset($_POST["2_cilindros"]))
        echo "Tiene 2 cilindros";
        
        if (isset($_POST["4_cilindros"]))
        echo "Tiene 4 cilindros";
         
        if (isset($_POST["6_cilindros"]))
        echo "Tiene 6 cilindros";
     
        if (isset($_POST["8_cilindros"]))
        echo "Tiene 8 cilindros";

        if (isset($_POST["naftero"]))
        echo "Motor naftero";

        if (isset($_POST["diesel"]))
        echo "Motor diesel";

        if (isset($_POST["gnc"]))
        echo "Tiene gnc";

        if (isset($_POST["turbo"]))
        echo "Motor turbo";

        if (isset($_POST["3_velo"]))
        echo "Caja de 3 velocidades";

        if (isset($_POST["4_velo"]))
        echo "Caja de 4 velocidades";

        if (isset($_POST["5_velo"]))
        echo "Caja de 5 velocidades";
        
        if (isset($_POST["caja_automatica"]))
        echo "Tiene caja automatica";

        if (isset($_POST["4x4"]))
        echo "Traccion 4x4";

        if (isset($_POST["freno_potencia"]))
        echo "Tiene freno potencia";

        if (isset($_POST["abs"]))
        echo "Tiene frenos ABS";

        if (isset($_POST["dire_asistida"]))
        echo "Tiene direccion asistida";

        if (isset($_POST["2_vidrios"]))
        echo "Tiene 2 levantavidrios electricos";

        if (isset($_POST["4_vidrios"]))
        echo "Tiene 4 levantavidrios electricos";

        if (isset($_POST["calefaccion"]))
        echo "Tiene calefaccion";

        if (isset($_POST["aire"]))
        echo "Tiene aire acondicionado";

        if (isset($_POST["airbag"]))
        echo "Tiene AIRBAG";

        if (isset($_POST["cinturones"]))
        echo "Tiene cinturones de seguridad";

        if (isset($_POST["2_inerciales"]))
        echo "Tiene 2 cinturones inerciales";

        if (isset($_POST["4_inerciales"]))
        echo "Tiene 4 cinturoes inerciales";

        if (isset($_POST["radio"]))
        echo "Tiene radio";

        if (isset($_POST["cassette"]))
        echo "Tiene pasa cassettes";

        if (isset($_POST["cd"]))
        echo "Tiene estereo CD";

        if (isset($_POST["caja_automatica"]))
        echo "Tiene 3 velocidades";

        if (isset($_POST["cierre"]))
        echo "Tiene cierre centralizado";

        if (isset($_POST["polarizado"]))
        echo "Tiene vidrios tonalizados";

}
        $km = $_POST['kilometros'];
        echo "Tiene " .$km. " kilometros";
        
        
        
        
        
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
      
        // Almacenar el token de acceso para su uso en futuras requests
        $data = json_decode($response);
        echo "<pre>" . json_encode($data, JSON_PRETTY_PRINT) . "</pre>";
      
        // Obtener el token de acceso almacenado previamente
        $token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MTQwMDkwNjYsIm5iZiI6MTYxNDAwOTA2NiwianRpIjoiZGE0Yjk2OTYtMjllMy00ZTFiLWJmMWUtZTc4NzBlMzViMGZiIiwiZXhwIjoxNjE0MDEyNjY2LCJpZGVudGl0eSI6NTkyLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MiLCJ1c2VyX2NsYWltcyI6eyJyb2xlcyI6W3siaWQiOjExLCJuYW1lIjoiMGttIn0seyJpZCI6MTAsIm5hbWUiOiJFeHRyYXMifSx7ImlkIjo5LCJuYW1lIjoiTW9kZWxvcyJ9LHsiaWQiOjEyLCJuYW1lIjoiVXNhZG9zIn1dfX0.jhvSnL5Odzg12sBX773bV1EvaOe7eWQYAx7Ss_hICp8";
       
        $url = "https://demo.api.infoauto.com.ar/cars/pub/brands/";
        $headers = array(
            "Content-type: application/json",
            "Authorization: Bearer " . $token,
        );
      
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);    
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
      
        $response = curl_exec($ch);
        curl_close($ch);
      
        $data = json_decode($response);  
        echo "<pre>" . json_encode($data, JSON_PRETTY_PRINT) . "</pre>";
       
        
?>
