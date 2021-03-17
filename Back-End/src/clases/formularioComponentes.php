<?php

    class FormularioComponentes{

        public int $id;

        //METODO CONSTRUCTOR
        function __construct(
            public $estado,
            public $observaciones,
            public $presupuesto
        ) {
            
        }

    }

?>