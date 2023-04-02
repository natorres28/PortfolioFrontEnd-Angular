import { Component } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-navbardash',
  templateUrl: './navbardash.component.html',
  styleUrls: ['./navbardash.component.css']
})
export class NavbardashComponent {

  //Crear variable de instancia para almacenar los datos con los que trata el servicio
  nombre: string = '';
  puesto: string = '';
  

  constructor (
    //Inyectar el servicio para tener acceso en la clase a los Metodos
    private datosService: DatosService) {}

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.datosService.getDatos().subscribe(datosportfolio =>{console.log(datosportfolio);
    //Definir informacion a mostrar
    this.nombre = datosportfolio.nombre;
    this.puesto = datosportfolio.puesto;
       
  });  

  }
}
