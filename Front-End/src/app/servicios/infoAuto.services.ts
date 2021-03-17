import { from, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";

@Injectable()
export class InfoAutoServicio {
    [x: string]: any;

    public url1: string;
    public url2: string;
    public url3: string;

    constructor(
        public _http: HttpClient
    ){
        this.url1 = "https://web-app-lorenzo-tasaciones.herokuapp.com/src/servicios/traer_marcas_grupos.php";
        this.url2 = "http://web-app-lorenzo-tasaciones.herokuapp.com/src/servicios/traer_modelos.php";
        this.url3 = "http://web-app-lorenzo-tasaciones.herokuapp.com/src/servicios/traer_precios_usados.php";

    }

    obtenerMarcas_Grupos(): Observable<any>{
        return this._http.get(this.url1);
    }

    obtenerModelo_Year(): Observable<any>{
        return this._http.get(this.url2)
    }

    obtenerPrecio_Year(codia_Modelo: any): Observable<any>{
        return this._http.post(this.url3, codia_Modelo)
    }

}