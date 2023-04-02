import { Component } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent {

  //Crear variable de instancia para almacenar los datos con los que trata el servicio
  certificados: any= [];
  

  constructor (
    //Inyectar el servicio para tener acceso en la clase a los Metodos
    private datosService: DatosService) {}

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.datosService.getDatos().subscribe(dataportfolio =>{console.log(dataportfolio);
    //Definir informacion a mostrar
    this.certificados = dataportfolio.certificados;
    
       
  });  

  }
}
