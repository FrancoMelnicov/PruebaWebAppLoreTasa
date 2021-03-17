<?php

include_once('../clases/formularioComponentes.php');
include_once('../clases/componentes.php');

    class Formulario{

        public int $id;
    
        function __construct(

            //datos del titular
            public string $fecha,
            public string $nombre_apellido,
            public string $domicilio,
            public string $localidad,
            public string $telefono,
            public int $codigoPostal,

            //datos automotor
            public string $marca,
            public string $grupo,
            public string $modelo,
            public int $year,
            public string $dominio,
            public string $color,

            //revision tecnica
            public string $nombreTecnico,

            //verificacion numeros automotor
            public string $numeroMotor,
            public string $numeroChasis,

            //inspeccion tecnica
            public string $motorCilindros,
            public string $combustible,
            public string $combustibleGnc,
            public string $turbo,
            public string $cajaVelocidades,
            public string $cajaAutomatica,
            public string $cuatroXcuatro,
            public string $frenoPotencia,
            public string $ABS,
            public string $direccionAsistida,
            public string $levantaVidriosElec,
            public string $calefaccion,
            public string $aireAcondicionado,
            public string $AirBag,
            public string $cinturonesSeguridad,
            public string $cinturionesInerciales,
            public string $radio,
            public string $pasaCassette,
            public string $cd,
            public string $cierreCentralizado,
            public string $vidriosTonalizados,
            public int $km,

            //FORMULARIO DE LOS COMPONENTES LOS CUALES CONTENDRAN OBJETOS

            public FormularioComponentes $motor,
            public FormularioComponentes $sitemaEscape,
            public FormularioComponentes $cajaCambios,
            public FormularioComponentes $sistemaSuspension,
            public FormularioComponentes $diferencial,
            public FormularioComponentes $embrague,
            public FormularioComponentes $direccion,
            public FormularioComponentes $trenDelantero,
            public FormularioComponentes $amortiguador,
            public FormularioComponentes $frenos,
            public FormularioComponentes $radiador,
            public FormularioComponentes $chasis,
            public FormularioComponentes $chapaCarroceria,
            public FormularioComponentes $vidrios,
            public FormularioComponentes $levantaCristales,
            public FormularioComponentes $colizas,
            public FormularioComponentes $pintura,
            public FormularioComponentes $tapizados_alfombras,
            public FormularioComponentes $instalacionElectrica,
            public FormularioComponentes $instrumentoTablero,
            public FormularioComponentes $acumulador,
            public FormularioComponentes $faros,
            public FormularioComponentes $limpiaParabrisas,
            public FormularioComponentes $limpiaLavaLuneta,
            //componentes faltantes no es agregador al array de objetos porque este contiene atributos distintos y se usaran metodos distintos
            public ComponentesFaltantes $faltantes,

            //precio de toma
            public int $precioInfoAuto,
            public int $descuento,
            public int $gastos,
            public int $precioFinal
        )
        {
        }

        //METODOLOGIAS CRUD
        public function postFormulario($formulario){
            $componentes = new Componentes(
                $formulario->motor,
                $formulario->sitemaEscape,
                $formulario->cajaCambios,
                $formulario->sistemaSuspension,
                $formulario->diferencial,
                $formulario->embrague,
                $formulario->direccion,
                $formulario->trenDelantero,
                $formulario->amortiguador,
                $formulario->frenos,
                $formulario->radiador,
                $formulario->chasis,
                $formulario->chapaCarroceria,
                $formulario->vidrios,
                $formulario->levantaCristales,
                $formulario->colizas,
                $formulario->pintura,
                $formulario->tapizados_alfombras,
                $formulario->instalacionElectrica,
                $formulario->instrumentoTablero,
                $formulario->acumulador,
                $formulario->faros,
                $formulario->limpiaParabrisas,
                $formulario->limpiaLavaLuneta,
            );

            require 'conexion.php';

            /* FORMULARIO 2 */
            $insertar = "INSERT INTO datos_auto (marca, grupo, modelo, anio, dominio, color, n_motor,n_chasis) VALUES ('$formulario->marca', '$formulario->grupo', '$formulario->modelo', '$formulario->year', '$formulario->dominio', '$formulario->color', '$formulario->numeroMotor', '$formulario->numeroChasis')";

            /* INTERACCION A LA BD */
            $query2 = mysqli_query($conexion, $insertar);
            $id_datos_auto = mysqli_insert_id($conexion);
            echo $id_datos_auto;

            if($query2){
                 echo "<script> alert('¡Automotor registrado con exito!'); </script>";
    
            }else{
                 echo "<script> alert('¡Se produjo un error en Automotor!'); </script>";
            }   

            /* FORMULARIO 3*/
            $insertar = "INSERT INTO revision_tecnica (tecnico) VALUES ('$formulario->nombreTecnico')"; 

            /* INTERACCION A LA BD */
            $query3 = mysqli_query($conexion, $insertar);
            $id_revision_tecnica = mysqli_insert_id($conexion);
            echo $id_revision_tecnica;

            if($query3){
                echo "<script> alert('Tecnico registrado con exito!'); </script>";

            }else{
                echo "<script> alert('¡Se produjo un error en Tecnico!'); </script>";
            }


            /* FORMULARIO 4*/
            /*$insertar = "INSERT INTO inspeccion_tecnica (motorCilindros, combustible, combustibleGnc, turbo, cajaVelocidades, cajaAutomatica, cuatroXcuatro, frenoPotencia, a_b_s, direccionAsistida, levantaVidriosElec, calefaccion, aireAcondicionado, AirBag, cinturonesSeguridad, cinturionesInerciales, radio, pasaCassette, cd, cierreCentralizado, vidriosTontalizados, km) VALUES ('$formulario->motorCilindros', '$formulario->combustible', '$formulario->combustibleGnc', '$formulario->turbo', '$formulario->cajaVelocidades', '$formulario->cajaAutomatica', '$formulario->cuatroXcuatro', '$formulario->frenoPotencia', '$formulario->ABS', '$formulario->direccionAsistida', '$formulario->levantaVidriosElec', '$formulario->calefaccion', '$formulario->aireAcondicionado', '$formulario->AirBag', '$formulario->cinturonesSeguridad', '$formulario->cinturionesInerciales', '$formulario->radio', '$formulario->pasaCassette', '$formulario->cd', '$formulario->cierreCentralizado', '$formulario->vidriosTontalizados', '$formulario->km')"; */

            $insertar = "INSERT INTO inspeccion_tecnica (kilometros) VALUES ('$formulario->km')"; 
            

            /* INTERACCION A LA BD */
            $query4 = mysqli_query($conexion, $insertar);
            $id_inspeccion_tecnica = mysqli_insert_id($conexion);
            echo $id_inspeccion_tecnica;


            if($query4){
                echo "<script> alert('Inspeccion tecnica registrado con exito!'); </script>";
    
            }else{
                echo "<script> alert('¡Se produjo un error en Inspeccion tecnica!'); </script>";
            }

            //FORMULARIO 5
            foreach($componentes as $atributo){
                $insertar = "INSERT INTO tabla_grande (estado, observaciones, presupuesto) VALUES ('$atributo->estado', '$atributo->observaciones', '$atributo->presupuesto')";

                /* INTERACCION A LA BD */
                $query5 = mysqli_query($conexion, $insertar);
                $id_tabla_grande = mysqli_insert_id($conexion);
                echo $id_tabla_grande;
            }

            if($query5){
                echo "<script> alert('Tabla grande registrado con exito!'); </script>";
    
            }else{
                echo "<script> alert('¡Se produjo un error en Tabla grande!'); </script>";
            }


            /* FORMULARIO 1 */
            $insertar = "INSERT INTO formu (fecha,nombre,domicilio,localidad,telefono,codigo_postal, id_datos_auto) VALUES ('$formulario->fecha', '$formulario->nombre_apellido', '$formulario->domicilio', '$formulario->localidad', '$formulario->telefono', '$formulario->codigoPostal', 
            )";

            /* INTERACCION A LA BD */
            $query = mysqli_query($conexion, $insertar);
            $id_formu = mysqli_insert_id($conexion);
            echo $id_formu;


            if($query){
                 echo "<script> alert('¡Cliente registrado con exito!'); </script>";
    
            }else{
                echo "<script> alert('¡Se produjo un error en Cliente!'); </script>";
            }
        }

        public function getFormularios(){

        }

        public function putFormulario(){

        }

        public function deleteFormulario(){

        }
    }

?>

<html>

</html>