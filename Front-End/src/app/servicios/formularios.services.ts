import { from, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class FormularioServicio {

    public url1: string;
    public url2: string;

    constructor(
        public _http: HttpClient
    ){
        this.url1 = "https://web-app-lorenzo-tasaciones.herokuapp.com/src/servicios/traer_modelos.php";
        //"http://localhost/WebAppLorenzoTasa/Back-End/src/servicios/traer_modelos.php"
        //"https://web-app-lorenzo-tasaciones.herokuapp.com/src/servicios/traer_modelos.php"
        this.url2 = "http://192.168.9.10/WebAppLorenzoTasa/Back-End/src/servicios/guardarImagenes.php";
        //http://localhost/WebAppLorenzoTasa/Back-End/src/servicios/guardarImagenes.php
    }

    //ESTE METODO DEBE ESTAR EN INFOAUTO SERVICE
    enviarMarcasYModelos(marca_grupo: any): Observable<any>{
        return this._http.post(this.url1, marca_grupo);
    }

    cargarImagenesFormulario(parametros: Array<string>, listaImagenes: Array<File>, nombre: string){

        return new Promise(function(resolve, reject){
            let formdata: any = new FormData();
            let xhr = new XMLHttpRequest();

            for(let i = 0; i < listaImagenes.length; i++){

                formdata.append(nombre, listaImagenes[i]);
                console.log(formdata.get(nombre));

            }

            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            }

            xhr.open('POST',"http://localhost/WebAppLorenzoTasa/Back-End/src/servicios/guardarImagenes.php", true);
            xhr.send(formdata);
        })
    }

}