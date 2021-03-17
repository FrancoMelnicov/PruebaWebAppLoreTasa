<?php

require 'conexion.php';
require 'tasaciones.php';

$fotos_auto = $_POST['archivosubido'];

$insertar = "INSERT INTO fotosAuto (archivosubido) VALUES ('$fotos_auto')";






?>