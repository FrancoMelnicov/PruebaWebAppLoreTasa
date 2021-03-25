import { Component, OnInit } from '@angular/core';
import { Codia } from 'src/app/modelos/codia';
import { FormularioServicio } from 'src/app/servicios/formularios.services';
import { InfoAutoServicio } from 'src/app/servicios/infoAuto.services';


@Component({
  selector: 'app-hoja1',
  templateUrl: './hoja1.component.html',
  styleUrls: ['./hoja1.component.css']
})
export class Hoja1Component implements OnInit {

  //variables que seran enviadas al componente padre
  public nombre_apellido: string = "";
  public marca: string = "";
  public grupo: string = "";
  public modelo: string = "";
  public year: string = "";
  public precio: string = "";
  public dominio: string = "";
  public color: string = "";
  public km: string = "";
  public fotoCedula: string = "";
  public nombreTecnico: string = "";
  public usuario: string = "";

  //estas contienen un array de los elementos obtenidos del json, solo contienen el dato de su respectivo nombre
  public marcas: any = [];
  public grupos: any = [];
  public modelos: any = [];
  public modelos_codias: any = [];
  public precios_years: any = [];

  //variables que guardan la data de los json al hacer las peticiones a infoauto
  public dataMarca_Grupo: any;
  public dataModelo_Year: any;
  public dataPrecios_Year: any;

  public codia = new Codia(0);

  constructor(private _infoAutoServicio: InfoAutoServicio, private _formularioServicio: FormularioServicio) { }

  ngOnInit(): void {
    
    //este es el unico metodo que se ejecuta apenas se carga el componente
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
        for(let groups of data.object[this.marcas.indexOf(this.marca)].groups){
          this.grupos.push(groups.name);
        }
        this.dataMarca_Grupo = data.object;
      }, 
      error =>{
        console.log(error);
      }
    );
  }

  obtenerModelos(){
    let marca_grupo = {
      id_marca: this.dataMarca_Grupo[this.marcas.indexOf(this.marca)].id,
      id_grupo: this.dataMarca_Grupo[this.marcas.indexOf(this.marca)].groups[this.grupos.indexOf(this.grupo)].id
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
         this.modelo = this.modelos_codias[i].modelo;
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


  //ESTE METODO TIENE QUE ESTAR EN PRECIO DE TOMA
  obtenerPrecios(){
    /*
    var posicion= 0;

    //HACER UN BUCLE
    for(var i = 0; i < this.precios_years.length; i++){

      if(this.precios_years[i].precio == this.precio.precio){

         this.formularioObjeto.precioInfoAuto = this.precios_years[i].precio * 1000;
      }
    }*/

  }

  cargarEstadoNeumaticos(){

    //ESTE MODELO SE USARA PARA TOMAR EL VALOR DE LOS CHECKOBS DE NEUMATICOS
    /*
    let memo= <any>document.getElementsByName("cilindro");
    for(let i=0; i<memo.length; i++){
      if(memo[i].checked){
      let valor: HTMLInputElement= <any>document.getElementsByName('cilindro').item(i).getAttribute("value");
      this.formularioObjeto.motorCilindros =  valor;
      }
    }*/
  }
}
