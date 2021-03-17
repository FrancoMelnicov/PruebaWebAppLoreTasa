<?php

    include_once('../clases/formularioComponentes.php');

    class Componentes{


        function __construct(

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
            public FormularioComponentes $limpiaLavaLuneta

        )
        {
            
        }
    }

?>