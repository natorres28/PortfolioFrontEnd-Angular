import { Component } from '@angular/core';
import { DatosService } from '../servicios/datos.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  //Crear variable de instancia para almacenar los datos con los que trata el servicio
  hard_skills: any= [];
  soft_skills: any= [];
  idiomas: any= [];
  

  constructor (
    //Inyectar el servicio para tener acceso en la clase a los Metodos
    private datosService: DatosService) {}

  ngOnInit(): void {
    //Esto es almacenar en la variable de instancia los datos recuperados por el servicio
    this.datosService.getDatos().subscribe(dataportfolio =>{console.log(dataportfolio);
    //Definir informacion a mostrar
    this.hard_skills = dataportfolio.hard_skills;
    this.soft_skills = dataportfolio.soft_skills;
    this.idiomas = dataportfolio.idiomas;
    
    
       
  });  

  }
}
