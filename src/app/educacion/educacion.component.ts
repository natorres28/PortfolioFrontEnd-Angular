import { Component } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  //Crear variable de instancia para almacenar los datos con los que trata el servicio
  formacion_academica: any= [];
  

  constructor (
    //Inyectar el servicio para tener acceso en la clase a los Metodos
    private datosService: DatosService) {}

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.datosService.getDatos().subscribe(dataportfolio =>{console.log(dataportfolio);
    //Definir informacion a mostrar
    this.formacion_academica = dataportfolio.formacion_academica;
       
  });  

  }
}
