
<?php

    header("Content-Type: application/json");
    include_once('../clases/formulario.php');
    include_once('../clases/componentesFaltantes.php');
    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            $_POST = json_decode(file_get_contents('php://input'), true);
            $formulario = new Formulario(
                $_POST["fecha"],
                $_POST["nombre_apellido"],
                $_POST["domicilio"],
                $_POST["localidad"],
                $_POST["telefono"],
                $_POST["codigoPostal"],
                $_POST["marca"],
                $_POST["grupo"],
                $_POST["modelo"],
                $_POST["year"],
                $_POST["dominio"],
                $_POST["color"],
                $_POST["nombreTecnico"],
                $_POST["numeroMotor"],
                $_POST["numeroChasis"],
                $_POST["motorCilindros"],
                $_POST["combustible"],
                $_POST["combustibleGnc"],
                $_POST["turbo"],
                $_POST["cajaVelocidades"],
                $_POST["cajaAutomatica"],
                $_POST["cuatroXcuatro"],
                $_POST["frenoPotencia"],
                $_POST["ABS"],
                $_POST["direccionAsistida"],
                $_POST["levantaVidriosElec"],
                $_POST["calefaccion"],
                $_POST["aireAcondicionado"],
                $_POST["AirBag"],
                $_POST["cinturonesSeguridad"],
                $_POST["cinturionesInerciales"],
                $_POST["radio"],
                $_POST["pasaCassette"],
                $_POST["cd"],
                $_POST["cierreCentralizado"],
                $_POST["vidriosTontalizados"],
                $_POST["km"],
                new FormularioComponentes(
                    $_POST["motor"]["estado"],
                    $_POST["motor"]["observaciones"], 
                    $_POST["motor"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["sitemaEscape"]["estado"],
                    $_POST["sitemaEscape"]["observaciones"], 
                    $_POST["sitemaEscape"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["cajaCambios"]["estado"],
                    $_POST["cajaCambios"]["observaciones"], 
                    $_POST["cajaCambios"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["sistemaSuspension"]["estado"],
                    $_POST["sistemaSuspension"]["observaciones"], 
                    $_POST["sistemaSuspension"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["diferencial"]["estado"],
                    $_POST["diferencial"]["observaciones"], 
                    $_POST["diferencial"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["embrague"]["estado"],
                    $_POST["embrague"]["observaciones"], 
                    $_POST["embrague"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["direccion"]["estado"],
                    $_POST["direccion"]["observaciones"], 
                    $_POST["direccion"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["trenDelantero"]["estado"],
                    $_POST["trenDelantero"]["observaciones"], 
                    $_POST["trenDelantero"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["amortiguador"]["estado"],
                    $_POST["amortiguador"]["observaciones"], 
                    $_POST["amortiguador"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["frenos"]["estado"],
                    $_POST["frenos"]["observaciones"], 
                    $_POST["frenos"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["radiador"]["estado"],
                    $_POST["radiador"]["observaciones"], 
                    $_POST["radiador"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["chasis"]["estado"],
                    $_POST["chasis"]["observaciones"], 
                    $_POST["chasis"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["chapaCarroceria"]["estado"],
                    $_POST["chapaCarroceria"]["observaciones"], 
                    $_POST["chapaCarroceria"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["vidrios"]["estado"],
                    $_POST["vidrios"]["observaciones"], 
                    $_POST["vidrios"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["levantaCristales"]["estado"],
                    $_POST["levantaCristales"]["observaciones"], 
                    $_POST["levantaCristales"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["colizas"]["estado"],
                    $_POST["colizas"]["observaciones"], 
                    $_POST["colizas"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["pintura"]["estado"],
                    $_POST["pintura"]["observaciones"], 
                    $_POST["pintura"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["tapizados_alfombras"]["estado"],
                    $_POST["tapizados_alfombras"]["observaciones"], 
                    $_POST["tapizados_alfombras"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["instalacionElectrica"]["estado"],
                    $_POST["instalacionElectrica"]["observaciones"], 
                    $_POST["instalacionElectrica"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["instrumentoTablero"]["estado"],
                    $_POST["instrumentoTablero"]["observaciones"], 
                    $_POST["instrumentoTablero"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["acumulador"]["estado"],
                    $_POST["acumulador"]["observaciones"], 
                    $_POST["acumulador"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["faros"]["estado"],
                    $_POST["faros"]["observaciones"], 
                    $_POST["faros"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["limpiaParabrisas"]["estado"],
                    $_POST["limpiaParabrisas"]["observaciones"], 
                    $_POST["limpiaParabrisas"]["presupuesto"]
                ),
                new FormularioComponentes(
                    $_POST["limpiaLavaLuneta"]["estado"],
                    $_POST["limpiaLavaLuneta"]["observaciones"], 
                    $_POST["limpiaLavaLuneta"]["presupuesto"]
                ),
                new ComponentesFaltantes(
                    $_POST["faltantes"]["gato"],
                    $_POST["faltantes"]["auxilio"], 
                    $_POST["faltantes"]["llaveRueda"],
                    $_POST["faltantes"]["otros"]
                ),
                $_POST["precioInfoAuto"],
                $_POST["descuento"],
                $_POST["gastos"],
                $_POST["precioFinal"],

                
                                        );
            $formulario->postFormulario($formulario);
            echo json_encode($formulario);
            
        break;

        case 'GET':

        break;

        case 'PUT';

        break;

        case 'DELETE':

        break;
    }
    

?>