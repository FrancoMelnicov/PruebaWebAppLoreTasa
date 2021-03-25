
import { Component, OnInit } from '@angular/core';
//importamos servicios
import { InfoAutoServicio } from "../../servicios/infoAuto.services";
import { FormularioServicio } from "../../servicios/formularios.services";
//importamos los modelos-clases para ser utilizados
import { Formulario } from "../../modelos/formulario";
import { FormularioComponentes } from 'src/app/modelos/formularioComponentes';
import { ChaperiaPintura } from 'src/app/modelos/chaperiaPintura';
import { Neumaticos } from 'src/app/modelos/neumaticos';
import { Precio } from 'src/app/modelos/precio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [FormularioServicio, InfoAutoServicio]
})
export class FormularioComponent implements OnInit {

  //posicion en la pagina
  public paginaPosicion: number = 1;
  public cantPaginas: any = [1,2,3,4,5];

  //creamos los objetos que seran utilizados para guardar y procesar los datos
  public formulario = new Formulario(
    //fecha
    new Date(),
    //nombre_apellido
    "",
    //telefono
    "",
    //marca
    "",
    //grupo
    "",
    //modelo
    "",
    //year
    "",
    //dominio
    "",
    //color
    "",
    //km
    "",
    //fotoCedula
    "",
    //nombreTecnico
    "",
    //AGREGAR USUARIO
    //motor
    new FormularioComponentes("", "", ""),
    //sitemaEscape
    new FormularioComponentes("", "", ""),
    //cajaCambios
    new FormularioComponentes("", "", ""),
    //sistemaSuspension
    new FormularioComponentes("", "", ""),
    //diferencial
    new FormularioComponentes("", "", ""),
    //embrague
    new FormularioComponentes("", "", ""),
    //direccion
    new FormularioComponentes("", "", ""),
    //trenDelantero
    new FormularioComponentes("", "", ""),
    //amortiguador
    new FormularioComponentes("", "", ""),
    //frenos
    new FormularioComponentes("", "", ""),
    //radiador
    new FormularioComponentes("", "", ""),
    //chasis
    new FormularioComponentes("", "", ""),
    //chapaCarroceria
    new FormularioComponentes("", "", ""),
    //vidrios
    new FormularioComponentes("", "", ""),
    //levantaCristales
    new FormularioComponentes("", "", ""),
    //colizas
    new FormularioComponentes("", "", ""),
    //pintura
    new FormularioComponentes("", "", ""),
    //tapizados_alfombras
    new FormularioComponentes("", "", ""),
    //instalacionElectrica
    new FormularioComponentes("", "", ""),
    //instrumentoTablero
    new FormularioComponentes("", "", ""),
    //acumulador
    new FormularioComponentes("", "", ""),
    //faros
    new FormularioComponentes("", "", ""),
    //limpiaParabrisas
    new FormularioComponentes("", "", ""),
    //limpiaLavaLuneta
    new FormularioComponentes("", "", ""),
    //totalComponentes
    "",
    //delanteraI
    new Neumaticos("", "", ""),
    //delanteraD
    new Neumaticos("", "", ""),
    //traseraI
    new Neumaticos("", "", ""),
    //traseraD
    new Neumaticos("", "", ""),
    //auxiliar
    new Neumaticos("", "", ""),
    //gato
    "",
    //llave
    "",
    //balancinTraseraI
    new Neumaticos("", "", ""),
    //balancinTraseraD
    new Neumaticos("", "", ""),
    //chaperiaPintura
    new ChaperiaPintura(0, []),
    //fotoFrente
    "",
    //fotoLateralIzq
    "",
    //fotoLateralDer
    "",
    //fotoPosterior
    "",
    //fotoInterior
    "",
    //precioInfoAuto
    "",
    //descuento
    "",
    //gastos
    "",
    //precioFinal
    ""
  )

  public precio = new Precio(0);


  //metodo constructor del componente
  constructor(private _infoAutoServicio: InfoAutoServicio, private _formularioServicio: FormularioServicio) {};

  ngOnInit(): void {

    document.getElementById('2')!.style.display = 'none';
    document.getElementById('3')!.style.display = 'none';
    document.getElementById('4')!.style.display = 'none';
    document.getElementById('5')!.style.display = 'none';
    document.getElementById('anterior')!.style.display = 'none';
  }

  moverPaginaAnterior(){
    
    for(let i=1; i < 6; i++){
      
      document.getElementById(i.toString())!.style.display = 'none';
    }
    this.paginaPosicion = this.paginaPosicion - 1;
    if(this.cantPaginas.indexOf(this.paginaPosicion) == 0){
      document.getElementById(this.paginaPosicion.toString())!.style.display = 'block';
      document.getElementById('anterior')!.style.display = 'none';
    } else {
    document.getElementById(this.paginaPosicion.toString())!.style.display = 'block';
    document.getElementById('siguiente')!.style.display = 'block';
    }

  }

  moverPaginaSiguiente(){
    
    for(let i=1; i < 6; i++){
      
      document.getElementById(i.toString())!.style.display = 'none';
    }
    this.paginaPosicion = this.paginaPosicion + 1;

    if(this.cantPaginas.indexOf(this.paginaPosicion) == 4){
      document.getElementById(this.paginaPosicion.toString())!.style.display = 'block';
      document.getElementById('siguiente')!.style.display = 'none';
    } else {
    document.getElementById(this.paginaPosicion.toString())!.style.display = 'block';
    document.getElementById('anterior')!.style.display = 'block';
    }
  }

  actualizarValor(){
    //cada vez que se haga un cambio en los inputs estos se tomaran del objeto y se realizara la operacion
    /*this.formularioObjeto.totalComponentes = Number(this.formularioObjeto.motor.presupuesto) + 
                                              Number(this.formularioObjeto.sitemaEscape.presupuesto) + 
                                              Number(this.formularioObjeto.cajaCambios.presupuesto) +
                                              Number(this.formularioObjeto.sistemaSuspension.presupuesto) +
                                              Number(this.formularioObjeto.diferencial.presupuesto) +
                                              Number(this.formularioObjeto.embrague.presupuesto) +
                                              Number(this.formularioObjeto.direccion.presupuesto) +
                                              Number(this.formularioObjeto.trenDelantero.presupuesto) +
                                              Number(this.formularioObjeto.amortiguador.presupuesto) +
                                              Number(this.formularioObjeto.frenos.presupuesto) +
                                              Number(this.formularioObjeto.radiador.presupuesto) +
                                              Number(this.formularioObjeto.chasis.presupuesto) +
                                              Number(this.formularioObjeto.chapaCarroceria.presupuesto) +
                                              Number(this.formularioObjeto.vidrios.presupuesto) +
                                              Number(this.formularioObjeto.levantaCristales.presupuesto) +
                                              Number(this.formularioObjeto.colizas.presupuesto) +
                                              Number(this.formularioObjeto.pintura.presupuesto) +
                                              Number(this.formularioObjeto.tapizados_alfombras.presupuesto) +
                                              Number(this.formularioObjeto.instalacionElectrica.presupuesto) +
                                              Number(this.formularioObjeto.instrumentoTablero.presupuesto) +
                                              Number(this.formularioObjeto.acumulador.presupuesto) +
                                              Number(this.formularioObjeto.faros.presupuesto) +
                                              Number(this.formularioObjeto.limpiaParabrisas.presupuesto) +
                                              Number(this.formularioObjeto.limpiaLavaLuneta.presupuesto); 

    this.formularioObjeto.gastos = this.formularioObjeto.totalComponentes;
    this.formularioObjeto.precioFinal = this.formularioObjeto.precioInfoAuto - this.formularioObjeto.descuento - this.formularioObjeto.gastos*/
  }

  cargarForm(){/*
    this.cargarInspeccionAutomotor();
    this.cargarEstadoComponentesFaltantes();
    let formulario = JSON.stringify(this.formularioObjeto);
    console.log(formulario);*/
  }
}
