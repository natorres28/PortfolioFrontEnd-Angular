import { Injectable } from '@angular/core';
// Esto es para suscribirse y que se reciba respuesta de forma asincronica
import { Observable } from "rxjs";
// Esto es para poder hacer las peticiones
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }

  //Metodo observable que devuelve los datos
  getDatos(): Observable <any> {
    //se llama al json con su path -ruta-, o bien, en su lugar se puede poner una URL para traer datos de un json online
    return this.http.get('./assets/data/dataportfolio.json');
  }
  
}
