import { from, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class FormularioServicio {

    public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = "http://localhost/WebAppLorenzoTasa/Back-End/src/servicios/traer_modelos.php"
    }

    enviarMarcasYModelos(marca_grupo: any): Observable<any>{
        return this._http.post(this.url, marca_grupo);
    }
}