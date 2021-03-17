import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { InfoAutoServicio } from "../../servicios/infoAuto.services";
import { FormularioServicio } from "../../servicios/formularios.services";
import { Formulario } from "../../modelos/formulario";
import { FormularioComponentes } from 'src/app/modelos/formularioComponentes';
import { ComponentesFaltantes } from 'src/app/modelos/componentesFaltantes';
import { Neumaticos } from 'src/app/modelos/neumaticos';
import { Codia } from 'src/app/modelos/codia';
import { Precio } from 'src/app/modelos/precio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  providers: [FormularioServicio, InfoAutoServicio]
})
export class FormularioComponent implements OnInit {

  public check: boolean = true;
  public dataMarca_Grupo: any;
  public dataModelo_Year: any;
  public dataPrecios_Year: any;
  public marcas: any = [];
  public grupos: any = [];
  public modelos: any = [];
  public modelos_codias: any = [];
  public precios_years: any = [];
  public codia = new Codia(0);
  public precio = new Precio(0);
  public formularioObjeto = new Formulario(
    //DATOS DEL TITULAR
      //fecha
      new Date(),
      //nombre y apellido
      "",
      //domicilio
      "",
      //localidad
      "",
      //telefono
      "",
      //codigo postal
      0,
      //DATOS DEL AUTOMOTOR
      //marca
      "",
      //grupo
      "",
      //modelo
      "",
      //año
      0,
      //dominio
      "",
      //color
      "",
      //REVISION TECNICA
      //nombre del tecnico
      "",
      //VERIFICACION NUMEROS IDENTIFICATORIOS DEL AUTOMOTOR
      //numero de motor
      "",
      //numero de chasis
      "",
      //INSPECCION TECNICA DEL AUTOMOTOR
      //motor cilindros
      "",
      //combustible
      "",
      //gnc
      "No posee",
      //turbo
      "No posee",
      //caja velocidades
      "",
      //caja automatica
      "No posee",
      //4x4
      "No posee",
      //Freno potencia
      "No posee",
      //ABS
      "No posee",
      //Direccion asistida
      "No posee",
      //Levanta vidrios electrico
      "No posee",
      //Calefaccion
      "No posee",
      //Aire acondicionado
      "No posee",
      //Air bag
      "No posee",
      //Cinturones de seguridad
      "No posee",
      //cinturnoes inerciales
      "No posee",
      //radio,
      "No posee",
      //pasa cassette
      "No posee",
      //cd
      "No posee",
      //cierre centralizado
      "No posee",
      //vidrios tonalizados
      "No posee",
      //km
      0,
      //motor
      new FormularioComponentes("", "", Number(0)),
      //sitemaEscape
      new FormularioComponentes("", "", 0),
      //cajaCambios
      new FormularioComponentes("", "", 0),
      //sistemaSuspension
      new FormularioComponentes("", "", 0),
      //diferencial
      new FormularioComponentes("", "", 0),
      //embrague
      new FormularioComponentes("", "", 0),
      //direccion
      new FormularioComponentes("", "", 0),
      //trenDelantero
      new FormularioComponentes("", "",0),
      //amortiguador
      new FormularioComponentes("", "", 0),
      //frenos
      new FormularioComponentes("", "", 0),
      //radiador
      new FormularioComponentes("", "", 0),
      //chasis
      new FormularioComponentes("", "", 0),
      //chapaCarroceria
      new FormularioComponentes("", "", 0),
      //vidrios
      new FormularioComponentes("", "", 0),
      //levantaCristales
      new FormularioComponentes("", "", 0),
      //colizas
      new FormularioComponentes("", "", 0),
      //pintura
      new FormularioComponentes("", "", 0),
      //tapizados_alfombras
      new FormularioComponentes("", "", 0),
      //instalacionElectrica
      new FormularioComponentes("", "", 0),
      //instrumentoTablero
      new FormularioComponentes("", "", 0),
      //acumulador
      new FormularioComponentes("", "", 0),
      //faros
      new FormularioComponentes("", "", 0),
      //limpiaParabrisas
      new FormularioComponentes("", "", 0),
      //limpiaLavaLuneta
      new FormularioComponentes("", "", 0),
      //faltantes
      new ComponentesFaltantes("","","",""),
      //totalComponentes
      0,
      //delanteraI
      new Neumaticos("","",""),
      //delanteraD
      new Neumaticos("","",""),
      //traseraI
      new Neumaticos("","",""),
      //traseraD
      new Neumaticos("","",""),
      //auxiliar
      new Neumaticos("","",""),
      //balan_Dual_TraseraI
      new Neumaticos("","",""),
      //balan_Dual_TraseraD
      new Neumaticos("","",""),
      //precioInfoAuto
      0,
      //descuento
      0,
      //gastos
      0,
      //precioFinal
      0
  )

  constructor(private _infoAutoServicio: InfoAutoServicio, private _formularioServicio: FormularioServicio) {};

  ngOnInit(): void {
  
    this.obtenerMarcas();

  }


  obtenerMarcas(){
    this._infoAutoServicio.obtenerMarcas_Grupos().subscribe(
      data =>{
        //metodo para recorrer el array y mostar marcas
        for(let marcas of data.object){
          this.marcas.push(marcas.name);
        }
      }, 
      error =>{
        console.log(error);
      }
    );
  }

  obtenerGrupos(){
    this._infoAutoServicio.obtenerMarcas_Grupos().subscribe(
      data =>{
        //le decimos al array de grupos que se vacie
        this.grupos = [];
        //metodo para recorrer el array y mostar grupos de una marca
        for(let groups of data.object[this.marcas.indexOf(this.formularioObjeto.marca)].groups){
          this.grupos.push(groups.name);
        }
        this.dataMarca_Grupo = data.object;
      }, 
      error =>{
        console.log(error);
      }
    );
  }

  //COSAS DUDOSAS EN ESTE METODO
  obtenerModelos(){

    let marca_grupo = {
      id_marca: this.dataMarca_Grupo[this.marcas.indexOf(this.formularioObjeto.marca)].id,
      id_grupo: this.dataMarca_Grupo[this.marcas.indexOf(this.formularioObjeto.marca)].groups[this.grupos.indexOf(this.formularioObjeto.grupo)].id
    };

    this._formularioServicio.enviarMarcasYModelos(marca_grupo).subscribe(
      data => {

        this.dataModelo_Year = data;
        this.modelos_codias = [];

        for(let modelos of data){

          let modelo_codia = {
            modelo: modelos.description,
            codia: modelos.codia
          }

          this.modelos_codias.push(modelo_codia);
        }

        let posicion = 0;

        for(let i=0; i < this.modelos_codias; i++){

          if(this.modelos_codias[i].codia == this.codia.codia){

          }
        }
      },
        error => {
          console.log(error);
        }
      );
  }

  obtenerYears(){

   var posicion= 0;

    //HACER UN BUCLE
    for(var i = 0; i < this.modelos_codias.length; i++){

      if(this.modelos_codias[i].codia == this.codia.codia){

         posicion = i;
         this.formularioObjeto.modelo = this.modelos_codias[i].modelo;
      }
    }
    
    let codia_Modelo = {
      codia_modelo: this.dataModelo_Year[posicion].codia
    };

    this._infoAutoServicio.obtenerPrecio_Year(codia_Modelo).subscribe(
    data => {

      this.dataPrecios_Year = data;
      this.precios_years = [];

      for(let precios_years of data){

        let precio_year = {
          precio: precios_years.price,
          year: precios_years.year
        }

        this.precios_years.push(precio_year);
      }
    },
    error => {
      console.log(error);
    }
    );
  }

  obtenerPrecios(){

    var posicion= 0;

    //HACER UN BUCLE
    for(var i = 0; i < this.precios_years.length; i++){

      if(this.precios_years[i].precio == this.precio.precio){

         this.formularioObjeto.precioInfoAuto = this.precios_years[i].precio * 1000;
      }
    }

  }

  cargarInspeccionAutomotor(){

    //MOTOR CILINDROS
    let memo= <any>document.getElementsByName("cilindro");
    for(let i=0; i<memo.length; i++){
      if(memo[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cilindro').item(i).getAttribute("value");
      this.formularioObjeto.motorCilindros =  valor;
      }
    }

    //COMBUSTIBLE
    let memo1= <any>document.getElementsByName("combustible");
    for(let i=0; i<memo1.length; i++){
      if(memo1[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('combustible').item(i).getAttribute("value");
      this.formularioObjeto.combustible =  valor;
      }
    }

    //GNC
    let memo5= <any>document.getElementsByName("combustibleGNC");
    for(let i=0; i<memo5.length; i++){
      if(memo5[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('combustibleGNC').item(i).getAttribute("value");
      this.formularioObjeto.combustibleGnc =  valor;
      }
    }

    //TURBO
    let memo2= <any>document.getElementsByName("turbo");
    for(let i=0; i<memo2.length; i++){
      if(memo2[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('turbo').item(i).getAttribute("value");
      this.formularioObjeto.cajaVelocidades =  valor;
      }
    }

    //CAJA VELOCIDADES
    let memo3= <any>document.getElementsByName("cajaVelocidades");
    for(let i=0; i<memo3.length; i++){
      if(memo3[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cajaVelocidades').item(i).getAttribute("value");
      this.formularioObjeto.cajaVelocidades =  valor;
      }
    }
    if(memo3[7].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cajaVelocidades').item(7).getAttribute("value");
      this.formularioObjeto.cajaAutomatica =  valor;
      }

    //4x4
    let memo4= <any>document.getElementsByName("4x4");
    for(let i=0; i<memo4.length; i++){
      if(memo4[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('4x4').item(i).getAttribute("value");
      this.formularioObjeto.cuatroXcuatro =  valor;
      }
    }

    //Freno potencia
    let memo6= <any>document.getElementsByName("frenoPotencia");
    for(let i=0; i<memo6.length; i++){
      if(memo6[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('frenoPotencia').item(i).getAttribute("value");
      this.formularioObjeto.frenoPotencia =  valor;
      }
    }

    //ABS
    let memo7= <any>document.getElementsByName("ABS");
    for(let i=0; i<memo7.length; i++){
      if(memo7[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('ABS').item(i).getAttribute("value");
      this.formularioObjeto.ABS =  valor;
      }
    }

    //Direccion asistida
    let memo8= <any>document.getElementsByName("direccionAsistida");
    for(let i=0; i<memo8.length; i++){
      if(memo8[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('direccionAsistida').item(i).getAttribute("value");
      this.formularioObjeto.direccionAsistida =  valor;
      }
    }

    //Levanta vidrios electrico
    let memo9= <any>document.getElementsByName("vidrios");
    for(let i=0; i<memo9.length; i++){
      if(memo9[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('vidrios').item(i).getAttribute("value");
      this.formularioObjeto.levantaVidriosElec =  valor;
      }
    }

    //Calefaccion
    let memo10= <any>document.getElementsByName("calefaccion");
    for(let i=0; i<memo10.length; i++){
      if(memo10[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('calefaccion').item(i).getAttribute("value");
      this.formularioObjeto.calefaccion =  valor;
      }
    }

    //Aire acondicionado
    let memo11= <any>document.getElementsByName("aireAcondicionado");
    for(let i=0; i<memo11.length; i++){
      if(memo11[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('aireAcondicionado').item(i).getAttribute("value");
      this.formularioObjeto.aireAcondicionado =  valor;
      }
    }

    //Air bag
    let memo12= <any>document.getElementsByName("airBag");
    for(let i=0; i<memo12.length; i++){
      if(memo12[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('airBag').item(i).getAttribute("value");
      this.formularioObjeto.AirBag =  valor;
      }
    }

    //Cinturones de seguridad
    let memo13= <any>document.getElementsByName("cinturonesSeg");
    for(let i=0; i<memo13.length; i++){
      if(memo13[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cinturonesSeg').item(i).getAttribute("value");
      this.formularioObjeto.cinturonesSeguridad =  valor;
      }
    }

    //Cinturones inerciales
    let memo14= <any>document.getElementsByName("cinturonesIner");
    for(let i=0; i<memo14.length; i++){
      if(memo14[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cinturonesIner').item(i).getAttribute("value");
      this.formularioObjeto.cinturonesSeguridad =  valor;
      }
    }

    //RADIO
    let memo15= <any>document.getElementsByName("radio");
    for(let i=0; i<memo15.length; i++){
      if(memo15[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('radio').item(i).getAttribute("value");
      this.formularioObjeto.radio =  valor;
      }
    }

    //Pasa cassete
    let memo16= <any>document.getElementsByName("pasaCassette");
    for(let i=0; i<memo16.length; i++){
      if(memo16[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('pasaCassette').item(i).getAttribute("value");
      this.formularioObjeto.pasaCassette =  valor;
      }
    }

    //Cd
    let memo17= <any>document.getElementsByName("cd");
    for(let i=0; i<memo17.length; i++){
      if(memo17[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cd').item(i).getAttribute("value");
      this.formularioObjeto.cd =  valor;
      }
    }

    //Cierre central
    let memo18= <any>document.getElementsByName("cierreCentral");
    for(let i=0; i<memo18.length; i++){
      if(memo18[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cierreCentral').item(i).getAttribute("value");
      this.formularioObjeto.cierreCentralizado =  valor;
      }
    }

  }


  cargarEstadoComponentesFaltantes(){

    //Motor
    let memo1= <any>document.getElementsByName("motor");
    for(let i=0; i<memo1.length; i++){
      if(memo1[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('motor').item(i).getAttribute("value");
      this.formularioObjeto.motor.estado =  valor;
      }
    }

    //Sistema de escape
    let memo2= <any>document.getElementsByName("motor");
    for(let i=0; i<memo2.length; i++){
      if(memo2[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('motor').item(i).getAttribute("value");
      this.formularioObjeto.motor.estado =  valor;
      }
    }

    //CONTINUAR CON LOS METODOS FALTANTES
  }


  actualizarValor(){
    this.formularioObjeto.totalComponentes = Number(this.formularioObjeto.motor.presupuesto) + 
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
    this.formularioObjeto.precioFinal = this.formularioObjeto.precioInfoAuto - this.formularioObjeto.descuento - this.formularioObjeto.gastos
  }

  cargarForm(){
    //console.log(JSON.stringify(this.formularioResponsive.value));
    this.cargarInspeccionAutomotor();
    this.cargarEstadoComponentesFaltantes();
    let formulario = JSON.stringify(this.formularioObjeto);
    console.log(formulario);
  }

  nuevoForm(){
    console.log("Nuevo formulario creado")
    this.formularioObjeto.fecha = new Date();
    this.formularioObjeto.nombre_apellido = "";
    this.formularioObjeto.domicilio = "";
    this.formularioObjeto.localidad = "";
    this.formularioObjeto.telefono = "";
    this.formularioObjeto.codigoPostal = 0;
    this.formularioObjeto.marca = "";
    this.formularioObjeto.grupo = "";
    this.formularioObjeto.modelo= "";
    this.formularioObjeto.year = 0;
    this.formularioObjeto.dominio = "";
    this.formularioObjeto.color = "";
    this.formularioObjeto.nombreTecnico = "";
    this.formularioObjeto.numeroMotor = "";
    this.formularioObjeto.numeroChasis = "";
    this.formularioObjeto.motorCilindros = "";
    this.formularioObjeto.combustible = "";
    this.formularioObjeto.combustibleGnc = "No posee"
    this.formularioObjeto.turbo = "No posee";
    this.formularioObjeto.cuatroXcuatro = "No posee";
    this.formularioObjeto.cajaVelocidades = "";
    this.formularioObjeto.cajaAutomatica = "No posee";
    this.formularioObjeto.frenoPotencia = "No posee";
    this.formularioObjeto.ABS = "NO posee";
    this.formularioObjeto.direccionAsistida = "No posee";
    this.formularioObjeto.levantaVidriosElec = "No posee";
    this.formularioObjeto.calefaccion = "No posee";
    this.formularioObjeto.aireAcondicionado = "No posee";
    this.formularioObjeto.AirBag = "No posee";
    this.formularioObjeto.cinturonesSeguridad = "No posee";
    this.formularioObjeto.cinturionesInerciales = "No posee";
    this.formularioObjeto.radio = "No posee";
    this.formularioObjeto.pasaCassette = "No posee";
    this.formularioObjeto.cd = "No posee";
    this.formularioObjeto.cierreCentralizado = "No posee";
    this.formularioObjeto.vidriosTontalizados = "No posee";
    this.formularioObjeto.cinturionesInerciales = "";
    this.formularioObjeto.km = 0;
    this.formularioObjeto.motor.presupuesto
    console.log(this.formularioObjeto)

    //SE DEBERÁ REALIZAR UN METODO PARA DESCHECKEAR TODOS LOS INPUT Y CHECBOX

  }
}
