import { Component } from '@angular/core';
// importamos a libreria de formulario que vamos a necesitar
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  // Inyectar en el constructor el formBuilder
  constructor(private formBuilder: FormBuilder) {
    /// Creamos el grupo de controles para el formulario de login
    this.form = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit() {}

  get Password(){
    return this.form.get("password");
  }

  get Mail(){
    return this.form.get("email");
  }

  get PasswordValid(){
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid(){
    return this.Mail?.touched && !this.Mail?.valid;
  }

  onLogin(event: Event){
    //Detenemos la propagacion o ejecucion del comportamiento submit de un form
    event.preventDefault;

    if (this.form.valid){
      //Llamamos a nuestro servicio para enviar los datos al servidor
      //Tambien podriamos ejecutar alguna lógica extra
      alert("Todo salió bien ¡Enviar Formulario!")
    }else{
      //Corremos todas las validaciones para qie se ejecuten los mensajes de error en el template
      this.form.markAllAsTouched();
    }

  }
}

